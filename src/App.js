import MainHeader from "./components/NavBar/MainHeader";
import { Route, Routes } from "react-router-dom";
import Orders from "./Pages/Orders";
import Menu from "./Pages/Menu";
import { Fragment } from "react";
import Homepage from "./Pages/Homepage";
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
