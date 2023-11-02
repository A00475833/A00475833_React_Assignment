import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import AboutMe from "./components/AboutMe";
import MyTown from "./components/MyTown";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/about-me">About Me</Link>
          </li>
          <li>
            <Link to="/my-town">My Town</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/my-town" element={<MyTown />} />

        <Route index element={<Navigate to="/about-me" />} />
      </Routes>
    </Router>
  );
}

export default App;
