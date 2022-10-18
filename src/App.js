import MainHeader from "./components/NavBar/MainHeader";
import { Route, Routes } from "react-router-dom";
import Orders from "./pages/Orders";
import Menu from "./pages/Menu";
import { Fragment } from "react";
import Homepage from "./pages/Homepage";
import "./App.css";

function App() {
  return (
    <Fragment>
      <MainHeader></MainHeader>
        <main>
          <Routes>
            <Route path="/" element={<Homepage></Homepage>}></Route>
            <Route path="/order" element={<Orders></Orders>}></Route>
            <Route path="/menu" element={<Menu></Menu>}></Route>
          </Routes>
        </main>
    </Fragment>
  );
}

export default App;
