import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./../../hooks/useAuth";

export default function NotFoundPage() {
  const { isAuth } = useAuth();
  if (!isAuth) {
    return <Navigate to="/signin" />;
  }
  return (
    <div className="flex-auto text-center font-bold text-red-600">
      <p>Page not found</p>
    </div>
  );
}
