import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Books } from "pages";

import Container from "@mui/material/Container";
import { CssBaseline } from "@mui/material";

const App = () => {
  return (
    <>
      <Container>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<div>Outlet</div>} />
            <Route path="books" element={<Books />} />
            {/* <Route path="" /> */}
            {/* Route log-in log in form  */}
            {/* Route log out log out form */}
            {/* Route books - booksList */}
            {/* registration - registartion of books */}
            {/* Route lending - lending of books */}
            {/* Route return - returning of books */}
            {/* Route statistics - statistics of books */}
          </Route>
        </Routes>
      </Container>
      <CssBaseline />
    </>
  );
};

export default App;
