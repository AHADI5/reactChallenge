import About from "./components/About";
import Info from "./components/Info";
import Interests from "./components/Interests";
import Profile from "./components/Profile";
import React from "react";

export default function App  () {
    return (
        <div className="app-container">
            <Profile/>
            <Info/>
            <About/>
            <Interests/>
        </div>
    )
}