import React, { FC, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { Form } from "./../Form/Form";
import { useActions } from "./../../hooks/actions";
import { useNavigate } from "react-router-dom";

interface ISignInProps {}

export const SignIn: React.FC<ISignInProps> = () => {
  const { setUser } = useActions();
  const navigate = useNavigate();

  const handleSignIn = (email: string, password: string) => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        setUser({
          email: user.email,
          id: user.uid,
          token: user.refreshToken,
        });
        navigate("/");
      })
      .catch((error) => {
        alert("Invalid password or please, sign up!");
      });
  };

  return (
    <div className="flex-auto flex flex-col justify-center items-center">
      <div className="bg-white rounded min-width-[300px] h-auto p-5 drop-shadow-lg">
        <h1 className="font-bold text-green-500 text-center">Log In</h1>
        <Form title="Sign in" handleClick={handleSignIn} />
        <p className="text-center pt-3">
          Or go to{" "}
          <Link to="/signup" className="font-bold">
            registration page
          </Link>
        </p>
      </div>
    </div>
  );
};
