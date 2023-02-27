import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

import Header from "./components/UI/Header";
import AboutUser from "./pages/AboutUser";
import AboutApp from "./pages/AboutApp";
import AboutUs from "./pages/AboutMe";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/aboutUser/:login" exact element={<AboutUser />}></Route>
          <Route path="/about-app" exact element={<AboutApp />}></Route>
          <Route path="/about-me" exact element={<AboutUs />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
