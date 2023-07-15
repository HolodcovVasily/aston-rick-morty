import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { HomePage } from "./pages/HomePage/HomePage";
import { FavoritesPage } from "./pages/FavoritesPage/FavoritesPage";
import { SignInPage } from "./pages/SignInPage/SignInPage";
import { SignUpPage } from "./pages/SignUpPage/SignUpPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/signin" element={<SignInPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/favorites" element={<FavoritesPage />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
