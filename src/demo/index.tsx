import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'tailwindcss/tailwind.css';
import ThemeContext from '../context/ThemeContext';
import { Button } from '..';

const App = () => (
  <ThemeContext.Provider value={{ theme: 'light' }}>
    <div className="p-4 space-x-4">
      <Button variant="solid">Button</Button>
      <Button variant="outline">Button</Button>
    </div>
  </ThemeContext.Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
