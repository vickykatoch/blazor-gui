import { Theme, ThemeProvider } from '@avam/ui-core';
import { ComponentType, useState } from 'react';

export function withThemeProvider<T>(
  Component: ComponentType<JSX.IntrinsicAttributes & T>
) {
  return (props: JSX.IntrinsicAttributes & T) => {
    const [theme] = useState<Theme>('light');

    return (
      <ThemeProvider theme={theme} density="compact">
        <Component {...props} />
      </ThemeProvider>
    );
  };
}
