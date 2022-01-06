import { ReactNode } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Header } from "../Header";
import { Home } from "../../views/Home/Home";
import { Fallback404 } from "../../views/Fallback404/Fallback404";

export const Navigator = () => (
  <Router>
    <Header />
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/404"} element={<Fallback404 />} />
    </Routes>
  </Router>
);
