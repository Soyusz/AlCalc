import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Home } from "../../views/Home/Home";
import { Fallback404 } from "../../views/Fallback404/Fallback404";
import { About } from "../../views/About/About";
import { Ranking } from "../../views/Ranking/Ranking";
import { DefaultTemplate } from "../../views/Templates/DefaultTemplate";
import { Admin } from "../../views/Admin/Admin";
import { Feed } from "../../views/Feed/Feed";

export const Navigator = () => (
  <Router>
    <DefaultTemplate>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/calc" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/404" element={<Fallback404 />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </DefaultTemplate>
  </Router>
);