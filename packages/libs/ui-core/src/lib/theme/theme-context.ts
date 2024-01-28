import { Dispatch, createContext, useContext } from 'react';
import { Density, Theme } from './types';

export interface ThemeState {
  theme: Theme;
  density?: Density;
}

export interface ThemeContextState extends ThemeState {
  setTheme: Dispatch<React.SetStateAction<ThemeState>>;
}

export const ThemeContext = createContext<ThemeContextState>(
  {} as ThemeContextState
);

export const useTheme = () => useContext(ThemeContext);
