import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Router from "./components/Router";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <NavBar />
      <Router />
    </div>
  );
}

export default App;
