// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { useEffect, useState } from "react";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import { Homepage } from "./pages/HomePage/HomePage";
import { CardsPage } from "./pages/CardsPage/CardsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />} />
        <Route index element={<Homepage />} />
        <Route path="/tweets" element={<CardsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;