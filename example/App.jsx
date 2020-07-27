import React from 'react';
import 'tailwindcss/tailwind.css';
import ThemeContext from '../src/context/ThemeContext';
import { Button } from '../src';

const App = () => (
  <ThemeContext.Provider>
    <div className="p-4">
      <Button scheme="solid" variant="secondary">
        Hello
      </Button>
    </div>
  </ThemeContext.Provider>
);

export default App;
