import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Home } from "../../views/Home/Home";
import { Fallback404 } from "../../views/Fallback404/Fallback404";
import { About } from "../../views/About/About";
import { Ranking } from "../../views/Ranking/Ranking";
import { DefaultTemplate } from "../../views/Templates/DefaultTemplate";

export const Navigator = () => (
  <Router>
    <DefaultTemplate>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/ranking"} element={<Ranking />} />
        <Route path={"/404"} element={<Fallback404 />} />
      </Routes>
    </DefaultTemplate>
  </Router>
);
