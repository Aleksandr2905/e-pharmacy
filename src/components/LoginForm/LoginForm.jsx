import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import WrapperSignIn from "../WrapperSignIn/WrapperSignIn";
import InputForm from "../InputForm/InputForm";
import Button from "../Button/Button";
import * as s from "./LoginForm.styled";
import { loginSchema } from "../../helpers/validation";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, touchedFields },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(loginSchema),
  });

  const email = watch("email");
  const password = watch("password");

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <WrapperSignIn>
      <s.Forma onSubmit={handleSubmit(onSubmit)}>
        <InputForm
          name="email"
          type="email"
          placeholder="Email address"
          register={register}
          errors={errors}
          touched={touchedFields.email}
          isValid={!errors.name && email}
        />
        <InputForm
          name="password"
          type="password"
          placeholder="Password"
          register={register}
          errors={errors}
          touched={touchedFields.password}
          isValid={!errors.name && password}
        />
        <Button type="button" name="buttonMain" text="Log in" />
        <s.Btn to="/register">Don't have an account?</s.Btn>
      </s.Forma>
    </WrapperSignIn>
  );
};

export default LoginForm;
