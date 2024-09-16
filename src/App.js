import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import Hotels from "./Hotels/Hotels";
import Layout from "./Layout/Layout";
import Resturants from "./Resturants/Resturants";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='/hotels' element={<Hotels />} />
                    <Route path='/resturants' element={<Resturants />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}