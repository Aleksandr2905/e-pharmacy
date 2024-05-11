import { useForm } from "react-hook-form";
import InputForm from "../InputForm/InputForm";
import * as s from "./RegisterForm.styled";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button/Button";
import WrapperSignIn from "../WrapperSignIn/WrapperSignIn";
import { registerSchema } from "../../helpers/validation";
import { useDispatch } from "react-redux";
import { registration } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, touchedFields },
    reset,
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(registerSchema),
  });

  const username = watch("username");
  const email = watch("email");
  const phone = watch("phone");
  const password = watch("password");

  const onSubmit = (data) => {
    dispatch(registration(data)).then((response) => {
      // if (!response.error) {
      //   navigate("/login");
      // }
    });
    reset();
  };

  return (
    <WrapperSignIn>
      <s.Forma onSubmit={handleSubmit(onSubmit)}>
        <InputForm
          name="username"
          type="text"
          placeholder="User Name"
          register={register}
          errors={errors}
          touched={touchedFields.username}
          isValid={!errors.username && username}
        />
        <InputForm
          name="email"
          type="email"
          placeholder="Email address"
          register={register}
          errors={errors}
          touched={touchedFields.email}
          isValid={!errors.email && email}
        />
        <InputForm
          name="phone"
          type="phone"
          placeholder="Phone number"
          register={register}
          errors={errors}
          touched={touchedFields.phone}
          isValid={!errors.phone && phone}
        />
        <InputForm
          name="password"
          type="password"
          placeholder="Password"
          register={register}
          errors={errors}
          touched={touchedFields.password}
          isValid={!errors.password && password}
        />
        <Button type="submit" name="buttonMain" text="Register" />
        <s.Btn to="/login">Already have an account?</s.Btn>
      </s.Forma>
    </WrapperSignIn>
  );
};

export default RegisterForm;
