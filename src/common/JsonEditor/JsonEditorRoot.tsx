import Editor, { loader, Monaco, OnValidate } from '@monaco-editor/react';
import { Grid, GridProps, styled, useTheme } from '@mui/material';
import * as monacoEditor from 'monaco-editor';
import { editor as editorApi } from 'monaco-editor/esm/vs/editor/editor.api';
import EditorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import JsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
import { useEffect, useRef, useState } from 'react';
import { DeliveryConfigToolbar } from '../../dashboard/DeliveryConfigToolbar';
import { ConfirmDialog } from './ConfirmDialog';
import { deliveryConfigMonacoSchema } from './DeliveryConfigSchema';
import { IssuesIndicator } from './IssuesIndicator';
import { KeyboardShortcuts } from './KeyboardShortcuts';
import { cobaltTheme } from './monacoThemes';

// expose types from namespace.
type IStandaloneCodeEditor = editorApi.IStandaloneCodeEditor;
type IMarker = editorApi.IMarker;

// eslint-disable-next-line no-restricted-globals
self.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === 'json') {
      return new JsonWorker();
    }
    return new EditorWorker();
  },
};
// ensure monaco components are loaded from node_modules not a cdn.
loader.config({ monaco: monacoEditor });

interface EditorWrapperProps extends GridProps {
  isFocused: boolean;
}
const EditorWrapper = styled(Grid, {
  shouldForwardProp: (prop) => prop !== 'isFocused',
})<EditorWrapperProps>(({ isFocused, theme }) => ({
  pl: 0,
  width: '100%',
  borderWidth: 2,
  borderStyle: 'solid',
  borderColor: theme.palette.divider,
  ...(isFocused && {
    borderColor:
      theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
  }),
}));

interface StatusBarProps extends GridProps {
  isFocused: boolean;
}
const StatusBar = styled(Grid, {
  shouldForwardProp: (prop) => prop !== 'isFocused',
})<StatusBarProps>(({ isFocused, theme }) => ({
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  borderBottomLeftRadius: theme.spacing(1),
  borderBottomRightRadius: theme.spacing(1),
  borderWidth: 2,
  borderTopWidth: 0,
  borderStyle: 'solid',
  borderColor: theme.palette.divider,
  ...(isFocused && {
    borderColor:
      theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
  }),
}));

interface Props {
  value: string;
  onSave: (value: string) => void;
}
export function JsonEditorRoot(props: Props): JSX.Element {
  const { value, onSave } = props;
  const [editorValue, setEditorValue] = useState<string | undefined>(value);
  const [isFocused, setFocused] = useState(false);
  const [isConfirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [editorMarkers, setEditorMarkers] = useState<IMarker[]>([]);
  const theme = useTheme();
  const editorRef = useRef<IStandaloneCodeEditor | null>(null);

  // only update internal prop-derived-state when prop changes.
  useEffect(() => {
    setEditorValue(value);
  }, [value]);

  const editorOnMount = (editor: IStandaloneCodeEditor, monaco: Monaco) => {
    editorRef.current = editor;
    // set tabSize to 2 spaces.
    editor.getModel()?.updateOptions({ tabSize: 2 });
    // enable monaco's json schema features.
    monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
      schemas: [deliveryConfigMonacoSchema],
      validate: true,
    });
    // use monaco's focus/blur listeners to set isFocused appropriately.
    editor.onDidFocusEditorText(() => setFocused(true));
    editor.onDidBlurEditorText(() => setFocused(false));
    // add cobalt theme (closer match to dark theme).
    monaco.editor.defineTheme('cobalt', cobaltTheme);
  };

  const handleFormat = () => {
    editorRef.current?.trigger('external toolbar', 'editor.action.formatDocument', undefined);
  };
  const handleSave = () => {
    setConfirmDialogOpen(true);
  };
  const handleValidate: OnValidate = (markers) => {
    setEditorMarkers(markers);
  };
  const handleMarkerClick = (marker: IMarker) => {
    editorRef.current?.setSelection({
      startLineNumber: marker.startLineNumber,
      endLineNumber: marker.endLineNumber,
      startColumn: marker.startColumn,
      endColumn: marker.endColumn,
    });
    editorRef.current?.revealLine(marker.startLineNumber);
  };

  return (
    <>
      <DeliveryConfigToolbar onFormat={handleFormat} onSave={handleSave} />
      <EditorWrapper
        item
        isFocused={isFocused}
        columns={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}
      >
        <Editor
          onMount={editorOnMount}
          options={{ minimap: { enabled: false } }}
          theme={theme.palette.mode === 'dark' ? 'cobalt' : 'light'}
          height="15rem"
          defaultLanguage="json"
          value={editorValue}
          onChange={(val) => setEditorValue(val)}
          onValidate={handleValidate}
        />
      </EditorWrapper>
      <StatusBar item columns={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }} isFocused={isFocused}>
        <KeyboardShortcuts />
        <IssuesIndicator markers={editorMarkers} onMarkerClick={handleMarkerClick} />
      </StatusBar>
      <ConfirmDialog
        isOpen={isConfirmDialogOpen}
        onClose={() => setConfirmDialogOpen(false)}
        originalValue={value}
        modifiedValue={editorValue}
        onConfirm={() => {
          onSave(editorValue ?? '');
        }}
      />
    </>
  );
}
