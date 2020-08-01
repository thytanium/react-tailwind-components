import * as React from 'react';

interface ThemeContext {
  theme: 'light' | 'dark';
}

const ThemeContext = React.createContext<ThemeContext>({
  theme: 'light',
});

export default ThemeContext;
