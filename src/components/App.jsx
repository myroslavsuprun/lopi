import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Login } from "pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        {/* Route log-in log in form  */}
        {/* Route log out log out form */}
        {/* Route books - booksList */}
        {/* registration - registartion of books */}
        {/* Route lending - lending of books */}
        {/* Route return - returning of books */}
        {/* Route statistics - statistics of books */}
        
        <Route path='users/'>
          <Route path="login/" element={<Login />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
