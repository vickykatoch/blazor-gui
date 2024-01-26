import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { SaltProvider } from '@salt-ds/core';
import '@salt-ds/theme/index.css';

import App from './app/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <SaltProvider mode="light" applyClassesTo="root" density="high">
      <App />
    </SaltProvider>
  </StrictMode>
);
