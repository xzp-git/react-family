import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, BrowserRouter, Routes, Route } from "./react-router-dom";

import Home from "./components/Home";
import Profile from "./components/Profile";
import User from "./components/User";

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/user" element={<User />} />
    </Routes>
  </HashRouter>,
  document.getElementById("root")
);
