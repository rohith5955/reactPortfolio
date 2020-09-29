//import React from "react";
import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./containers/Main";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Themes"

function App() {
  const [theme, setTheme] = useState('dark');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles/>
    <div>
      {/* <button onClick={themeToggler}>Switch Theme</button> */}

      <Main />
    </div>
    </>
    </ThemeProvider>
  );
}

export default App;
