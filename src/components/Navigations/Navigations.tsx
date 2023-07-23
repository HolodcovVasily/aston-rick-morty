import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./../../hooks/useAuth";

export function Navigations() {
  const { isAuth } = useAuth();

  return (
    <nav>
      <span className="flex gap-5">
        {isAuth ? (
          <>
            <Link to="/history">
              <span>История</span>
            </Link>
            <Link to="/search">
              <span>Поиск</span>
            </Link>
            <Link to="/favorites">
              <span>Избранное</span>
            </Link>
          </>
        ) : (
          <>
            <Link to="/signup">
              <span>Регистрация</span>
            </Link>
            <Link to="/signin">
              <span>Вход</span>
            </Link>
          </>
        )}
      </span>
    </nav>
  );
}
