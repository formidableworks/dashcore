import Editor, { loader, Monaco, OnValidate } from '@monaco-editor/react';
import { Grid, useTheme } from '@mui/material';
import * as monacoEditor from 'monaco-editor';
import { editor as editorApi } from 'monaco-editor/esm/vs/editor/editor.api';
import EditorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import JsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
import { useRef, useState } from 'react';
import { DeliveryConfigToolbar } from '../../dashboard/DeliveryConfigToolbar';
import { deliveryConfigMonacoSchema } from './DeliveryConfigSchema';
import { IssuesIndicator } from './IssuesIndicator';
import { KeyboardShortcuts } from './KeyboardShortcuts';

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

export function JsonEditorRoot(): JSX.Element {
  const [isFocused, setFocused] = useState(false);
  const [editorMarkers, setEditorMarkers] = useState<IMarker[]>([]);
  const theme = useTheme();
  const editorRef = useRef<IStandaloneCodeEditor | null>(null);

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
  };

  const handleFormat = () => {
    editorRef.current?.trigger('external toolbar', 'editor.action.formatDocument', undefined);
  };
  const handleSave = () => {
    console.log('save');
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
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        sx={(t) => ({
          pl: 0,
          width: '100%',
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: t.palette.divider,
          ...(isFocused && {
            borderColor:
              t.palette.mode === 'dark' ? t.palette.primary.dark : t.palette.primary.light,
          }),
        })}
      >
        <Editor
          onMount={editorOnMount}
          options={{ minimap: { enabled: false } }}
          theme={theme.palette.mode === 'dark' ? 'vs-dark' : 'light'}
          height="15rem"
          defaultLanguage="json"
          defaultValue={`
          {
            "signature_required": "yes indeed", "customer_id": "1235339", "service_tier": "invalid enum val",
            "address": {
              "addressee": "Stringer Bell",
              "premise_identifier": "Barksdale towers",
            },
            "handling_tags": [
              "fragile",
              "fragile"
            ],
            "dimensions": {
              "width": -1,
              "height": 4,
              "depth": 1000
            }
          }
          `}
          onValidate={handleValidate}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        sx={(t) => ({
          pl: 2,
          pr: 1,
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          borderBottomLeftRadius: t.spacing(1),
          borderBottomRightRadius: t.spacing(1),
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: t.palette.divider,
          ...(isFocused && {
            borderColor:
              t.palette.mode === 'dark' ? t.palette.primary.dark : t.palette.primary.light,
          }),
        })}
      >
        <KeyboardShortcuts />
        <IssuesIndicator markers={editorMarkers} onMarkerClick={handleMarkerClick} />
      </Grid>
    </>
  );
}
