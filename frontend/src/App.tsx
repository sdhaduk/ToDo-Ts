import React from "react";
import Home from "./pages/Home";
import {Routes, Route} from 'react-router-dom';
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import DeletePage from "./pages/DeletePage";
import UpdatePage from "./pages/UpdatePage";
import ViewPage from "./pages/ViewPage";


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
      <Route path="/delete/:id" element ={<DeletePage />} />
      <Route path="/update/:id" element={<UpdatePage />} />
      <Route path="/view/:id" element={<ViewPage />} />
    </Routes>
    </ThemeProvider>
  );
}

export default App;


