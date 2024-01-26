import { FC, createContext, useState } from 'react';

export type Theme = 'dark' | 'light';
export type Density =
  | 'mini'
  | 'micro'
  | 'compact'
  | 'comfortable'
  | 'cozy'
  | 'spacious';
export const defaultTheme: Theme = 'dark';
interface ThemeContextState {
  theme: Theme;
  density?: Density;
}

export interface ThemeProps extends ThemeContextState {
  children: React.ReactNode;
}

const ThemeContext = createContext<ThemeProps>({
  theme: defaultTheme,
  density: 'comfortable',
  children: null,
});

export const ThemeProvider: FC<ThemeProps> = ({ children, theme, density }) => {
  const [themeState, setThemeState] = useState<Theme>(theme);

  return (
    <ThemeContext.Provider value={{ theme: themeState, density }}>
      {children}
    </ThemeContext.Provider>
  );
};
