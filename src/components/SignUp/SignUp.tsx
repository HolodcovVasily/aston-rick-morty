import React, { FC } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { Form } from "./../Form/Form";
import { useActions } from "./../../hooks/actions";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "./../../hooks/redux";

interface ISignUpProps {}

export const SignUp: React.FC<ISignUpProps> = () => {
  const navigate = useNavigate();
  const { setUser } = useActions();

  const handleSignUp = async (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        setUser({
          email: user.email,
          id: user.uid,
          token: user.refreshToken,
        });
        navigate("/");
      })
      .catch(() => alert("Such email already exists, please sign in"));
  };

  return (
    <div className="flex-auto flex flex-col justify-center items-center">
      <div className="bg-white rounded min-width-[300px] h-auto p-5 drop-shadow-lg">
        <h1 className="font-bold text-green-500 text-center">Register</h1>
        <Form title="sign up" handleClick={handleSignUp} />
        <p className="text-center pt-3">
          Already have an account?
          <Link to="/signin" className="ml-3 font-bold">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};
