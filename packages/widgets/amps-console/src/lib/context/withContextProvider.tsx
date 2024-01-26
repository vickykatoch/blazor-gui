import { FC } from 'react';
import { AmpsConsoleContextProvider } from './amps-console-context-provider';

export function withContextProvider<T extends JSX.IntrinsicAttributes>(
  Component: FC<T | undefined>
) {
  return (props?: T) => (
    <AmpsConsoleContextProvider>
      <Component {...(props as T)} />
    </AmpsConsoleContextProvider>
  );
}
