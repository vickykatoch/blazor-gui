import { ReactElement } from 'react';
import { useTheme } from '@avam/ui-core';
import { withThemeProvider } from './withThemeProvider';
import { Mode, SaltProvider } from '@salt-ds/core';
import { LayoutType, useLayoutRenderer } from '../layouts';
import { LocalRouterProvider } from '../routing/local-router';

const routeProvider = new LocalRouterProvider();

export function App(): ReactElement {
  const { theme } = useTheme();
  const LayoutRenderer = useLayoutRenderer(LayoutType.Docking);

  return (
    <SaltProvider mode={theme as Mode} applyClassesTo="root" density="medium">
      <div className="d-flex flex-grow-1 flex-column pos-rel">
        <LayoutRenderer routeProvider={routeProvider} />
      </div>
    </SaltProvider>
  );
}

export default withThemeProvider(App);
