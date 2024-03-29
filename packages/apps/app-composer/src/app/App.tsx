import { RouterProvider } from 'react-router-dom';
import { ReactElement } from 'react';
import { router } from './router';
import { useTheme } from '@avam/ui-core';
import { withThemeProvider } from './withThemeProvider';
import { Mode, SaltProvider } from '@salt-ds/core';

export function App(): ReactElement {
  const { theme } = useTheme();

  return (
    <SaltProvider mode={theme as Mode} applyClassesTo="root" density="medium">
      <div className="d-flex flex-grow-1 flex-column pos-rel">
        <RouterProvider router={router} />
      </div>
    </SaltProvider>
  );
}

export default withThemeProvider(App);
