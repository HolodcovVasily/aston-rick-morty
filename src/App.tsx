import React, { Suspense } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { routesConfig } from "./routes/routesConfig";
import app from "./firebase";
import ErrorBoundary from "./components/ErrorBoundaries/ErrorBoundaries";

function App() {
  return (
    <>
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<div className="text-center">Loading....</div>}>
          <Routes>
            {routesConfig.map((route, id) => {
              return (
                <Route key={id} path={route.path} element={route.element} />
              );
            })}
          </Routes>
        </Suspense>
      </ErrorBoundary>
      <Footer />
    </>
  );
}

export default App;
