import React, { FC } from "react";
import { useAuth } from "./../../hooks/useAuth";

interface AuthUserInfoProps {
  email: string | null;
  logout: () => void;
}

export const AuthUserInfo: FC<AuthUserInfoProps> = ({ email, logout }) => {
  const { logAuthOut } = useAuth();
  const logOutHandler = () => {
    logout();
    logAuthOut();
  };
  return (
    <div className="flex items-center text-white">
      <span className="text-center font-thin">{email}</span>
      <button
        onClick={logOutHandler}
        className="text-center text-small m-2 bg-[#DE0963] px-2 py-1 ml-2 cursor-pointer rounded hover:bg-[#F42250] transition-all"
      >
        Выход
      </button>
    </div>
  );
};
