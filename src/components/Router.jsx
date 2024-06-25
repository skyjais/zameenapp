import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Buy from "./Pages/Buy";
import Rent from "./Pages/Rent";
import Sell from "./Pages/Sell";
import PostProp from "./Pages/PostProp";
import Login from "./Pages/Login";
import Pg from "./Pages/Pg";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/buy" element={<Buy />} />
      <Route path="/rent" element={<Rent />} />
      <Route path="/Sell" element={<Sell />} />
      <Route path="/PG" element={<Pg />} />
      <Route path="/post-property" element={<PostProp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Router;
