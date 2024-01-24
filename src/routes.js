import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import { Home } from "./pages/Home/Home";
import { Message } from "./pages/Message/Message";
import { Profile } from "./pages/Profile/Profile";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={ <Home/> } path="/" exact />
        <Route element={ <Message/> } path="/message" />
        <Route element={ <Profile/> } path="/profile" />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
