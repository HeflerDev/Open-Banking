import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.scss';
import Home from "./pages/home/Home";
import {Navbar} from "./components/Navbar";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path={"/"} element={<Home type={"login"}/>}/>
                <Route path={"/register"} element={<Home type={"register"}/>}/>
                <Route path={"/dashboard"} element={<Dashboard/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
