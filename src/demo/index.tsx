import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ThemeContext from '../context/ThemeContext';
import ButtonShowcase from './components/ButtonShowcase';
import StackShowcase from './components/StackShowcase';
import './demo.css';

const App = () => (
  <ThemeContext.Provider value={{ theme: 'light' }}>
    <ButtonShowcase />
    <StackShowcase />
  </ThemeContext.Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
