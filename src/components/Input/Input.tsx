import React, { FC } from "react";

interface InputProps {
  name: string;
  placeholder: string;
  register: any;
  errors: any;
}

export const Input: FC<InputProps> = ({
  name,
  placeholder,
  register,
  errors,
}) => {
  return (
    <>
      <input
        {...register(name, {
          required: `${name} is required`,
          validate: {
            maxLength: (v: string) =>
              v.length <= 50 || `The ${name} should have at most 50 char`,
            minLength: (v: string) =>
              v.length >= 6 || `The ${name} should have more than 6 char`,
          },
        })}
        name={name}
        placeholder={placeholder}
        className="border-2 rounded p-2 my-2 mx-2"
      />
      {/* {errors[name] && <small className="text-red-600">{errors[name]}</small>} */}

      {errors[name] && (
        <small className="text-red-600">{name} is required</small>
      )}
    </>
  );
};
