import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./Blogs/Blogs";
import AboutMe from "./components/AboutMe/AboutMe";
import Checkout from "./components/Checkout/Checkout";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/checkout/:id" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
