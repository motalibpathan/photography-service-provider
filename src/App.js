import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import Home from "./Header/Home/Home";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
