import React from "react";
import { Outlet } from "react-router-dom";
import './App.css'
import Home from "./components/Rotas/Home";

const App = () => {
  return (
    <div className="align-center">
      <Home />
      <Outlet />
    </div>
  )
}

export default App
