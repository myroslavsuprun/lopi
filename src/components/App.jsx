import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Login, Books } from "pages";

import { CssBaseline, Container } from "@mui/material";

const App = () => {
  return (
    <>
      <Container>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<div>Outlet</div>} />
            <Route path="books" element={<Books />} />

            {/* Route log-in log in form  */}
            {/* Route log out log out form */}
            {/* Route books - booksList */}
            {/* registration - registartion of books */}
            {/* Route lending - lending of books */}
            {/* Route return - returning of books */}
            {/* Route statistics - statistics of books */}

            <Route path="users/">
              <Route path="login/" element={<Login />} />
            </Route>
          </Route>
        </Routes>
      </Container>
      <CssBaseline />
    </>
  );
};

export default App;
