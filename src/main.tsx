import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { AppTheme } from './layout/AppTheme';
import { worker } from './mocks/browser';
import { store } from './redux/store';

worker.start({ onUnhandledRequest: 'bypass' });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="dashcore">
        <CssBaseline />
        <AppTheme>
          <App />
        </AppTheme>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
