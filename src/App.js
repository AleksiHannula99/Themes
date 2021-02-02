
import './App.css';
import { ThemeProvider } from 'styled-components';
import {useState} from "react";
import { lightTheme, darkTheme } from "./themes"
import { GlobalStyles } from './Global';

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme }>
      <>
      <GlobalStyles />
      <h1>Switching themes</h1>
      <button onClick={toggleTheme}>Switch theme</button>
      </>
    </ThemeProvider>
  );
}

export default App;
