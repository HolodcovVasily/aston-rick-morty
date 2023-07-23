import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../Input/Input";

interface FormProps {
  title: string;
  handleClick: (email: string, password: string) => void;
}

interface IInputValue {
  email: string;
  password: string;
}

export const Form: FC<FormProps> = ({ title, handleClick }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IInputValue>();

  const onSubmitHandler = (values: IInputValue) => {
    const { email, password } = values;
    handleClick(email, password);
  };

  return (
    <form
      className="form flex flex-col bg-white rounded w-[300px] h-auto gap-5"
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <Input
        name="email"
        placeholder="Enter your email"
        register={register}
        errors={errors}
      />
      <Input
        name="password"
        placeholder="Enter password"
        register={register}
        errors={errors}
      />

      <button
        type="submit"
        className="bg-green-500 rounded hover:bg-green-600 transition-all"
      >
        {title}
      </button>
    </form>
  );
};
