import React from "react";
import Home from "./pages/Home";
import {Routes, Route} from 'react-router-dom';
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";


const App: React.FC = ()  => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark"
    },
  });

  return (
    <ThemeProvider theme={darkTheme}> 
    <CssBaseline />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </ThemeProvider>
  );
}

export default App;


