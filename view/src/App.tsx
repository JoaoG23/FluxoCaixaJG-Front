import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AdminRouters from "./Routers/AdminRouters";
import InicialRouters from "./Routers/InicialRouters";
import ComumRouters from "./Routers/ComumRouters";

import GlobalStyle from "./themes/global";
import { ThemeProvider } from "styled-components";

import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import { Body } from "./styles";
import light from "./themes/light";

// import Login from "./Pages/Login";
// import Registrar from "./Pages/Registrar";

function App() {
  return (
    <ThemeProvider theme={light}>
      <>
        <GlobalStyle />
        <Router>
          <Sidebar></Sidebar>
          <Header></Header>
          <Body>
            <AdminRouters/>
            <ComumRouters/>
          </Body>
            <InicialRouters/>
        </Router>
      </>
    </ThemeProvider>
  );
}

export default App;
