import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Anime from "./pages/anime";
import Movies from "./pages/movies";
import Series from "./pages/series";
import ResetPassword from "./pages/reset_password";
import ResetPasswordConfirm from "./pages/reset_password_confirm";
import Activate from "./pages/activate";
import Signin from "./pages/signin";
import Signup from "./pages/signup";

const App = () => (
        <Routes>
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/movies" element={<Movies />} />
          <Route exact path="/anime" element={<Anime />} />
          <Route exact path="/series" element={<Series />} />
          <Route exact path="/reset-password" element={<ResetPassword />} />
          <Route
            exact
            path="/password/reset/confirm/:uid/:token"
            element={<ResetPasswordConfirm />}
          />
          <Route exact path="/activate/:uid/:token" element={<Activate />} />
        </Routes>
);

export default App;
