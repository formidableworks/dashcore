import '@fontsource/ibm-plex-sans/latin-400.css';
import '@fontsource/ibm-plex-sans/latin-500.css';
import '@fontsource/ibm-plex-sans/latin-700.css';
import '@fontsource/plus-jakarta-sans/latin-700.css';
import '@fontsource/plus-jakarta-sans/latin-800.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { deepmerge } from '@mui/utils';
import { ReactNode, useMemo } from 'react';
import { useAppSelector } from '../redux/hooks';
import { getDesignTokens, getThemedComponents } from './brandingTheme';

interface Props {
  children: ReactNode;
}
export function AppTheme(props: Props): JSX.Element {
  const { children } = props;
  const themeMode = useAppSelector((s) => s.theme.themeType);
  const prefersDarkColorScheme = useMediaQuery('(prefers-color-scheme: dark)');
  const systemDerivedMode = prefersDarkColorScheme ? 'dark' : 'light';
  const mode = themeMode === 'system' ? systemDerivedMode : themeMode;

  const theme = useMemo(() => {
    const designTokens = getDesignTokens(mode);
    let newTheme = createTheme(designTokens);
    newTheme = deepmerge(newTheme, getThemedComponents(newTheme));
    return newTheme;
  }, [mode]);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
