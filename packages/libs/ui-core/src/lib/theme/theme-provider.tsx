import { FC, useState } from 'react';
import { ThemeContext, ThemeState } from './theme-context';
import { defaultTheme } from './types';

export interface ThemeProps extends ThemeState {
  children: React.ReactNode;
}

export const ThemeProvider: FC<ThemeProps> = ({ children, theme, density }) => {
  const [themeState, setTheme] = useState<ThemeState>({
    theme: theme || defaultTheme,
    density: density || 'high',
  });

  return (
    <ThemeContext.Provider value={{ ...themeState, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
