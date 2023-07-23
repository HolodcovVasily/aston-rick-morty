import React from "react";
import { Navigations } from "../Navigations/Navigations";
import { Logo } from "./../Logo/Logo";
import { AuthUserInfo } from "./../AuthUserInfo/AuthUserInfo";
import { useAuth } from "./../../hooks/useAuth";
import { useActions } from "./../../hooks/actions";

export function Header() {
  const { email, isAuth } = useAuth();
  const { logout } = useActions();

  return (
    <div className="shadow-md bg-[#262561] text-[#05B7E5] h-auto flex justify-between items-center px-5">
      <Logo />
      {isAuth ? (
        <AuthUserInfo email={email} logout={logout} />
      ) : (
        <span>Guest</span>
      )}
      <Navigations />
    </div>
  );
}
