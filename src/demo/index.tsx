import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'tailwindcss/tailwind.css';
import ThemeContext from '../context/ThemeContext';
import { Button } from '..';

const App = () => (
  <ThemeContext.Provider value={{ theme: 'light' }}>
    <div className="p-4">
      <Button scheme="solid" variant="secondary">
        Hello
      </Button>
    </div>
  </ThemeContext.Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
