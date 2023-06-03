import "./App.css";
import Home from "./pages/Home";

import CatogeryMovies from "./pages/CatogeryMovies";
import { routhPath } from "./constant/route";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>

        <Routes>
          <Route path={routhPath.home} element={<Home></Home>} />
          <Route
            path={routhPath.catogry}
            element={<CatogeryMovies></CatogeryMovies>}
          />
          <Route path={routhPath.invalid} element={<Home></Home>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
