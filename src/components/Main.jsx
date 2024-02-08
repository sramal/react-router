import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Blue from "./Blue";
import Red from "./Red";
import Yellow from "./Yellow";
import Orange from "./Orange";

export default function Main() {
    return (
        <div id="main-section">
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/blue" element={<Blue />}></Route>
                <Route path="/red" element={<Red />}></Route>
                <Route path="/yellow" element={<Yellow />}></Route>
                <Route path="/orange" element={<Orange />}></Route>
            </Routes>
        </div>
    );
}
