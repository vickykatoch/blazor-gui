import { RouterProvider } from 'react-router-dom';
import { ReactElement } from 'react';
import { router } from './router';
import { useTheme } from '@avam/ui-core';
import { withThemeProvider } from './withThemeProvider';
import { Mode, SaltProvider } from '@salt-ds/core';
import { LayoutType, useLayoutRenderer } from '../layouts';

export function App(): ReactElement {
  const { theme } = useTheme();
  const LayoutRenderer = useLayoutRenderer(LayoutType.Docking);

  return (
    <SaltProvider mode={theme as Mode} applyClassesTo="root" density="medium">
      <div className="d-flex flex-grow-1 flex-column pos-rel">
        <LayoutRenderer>
          <RouterProvider router={router} />
        </LayoutRenderer>
      </div>
    </SaltProvider>
  );
}

export default withThemeProvider(App);
