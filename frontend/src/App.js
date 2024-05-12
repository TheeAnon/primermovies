import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";


const App = () => (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signin" element={<Login />} />
          <Route exact path="/register" element={<Signup />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </Router>
);

export default App;
