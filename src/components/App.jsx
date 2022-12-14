import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Login, Books } from "pages";

import { CssBaseline } from "@mui/material";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Books />} />
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
      <CssBaseline />
    </>
  );
};

export default App;
