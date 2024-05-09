import { useForm } from "react-hook-form";
import InputForm from "../InputForm/InputForm";
import * as s from "./RegisterForm.styled";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button/Button";
import WrapperSignIn from "../WrapperSignIn/WrapperSignIn";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, touchedFields },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(),
  });

  return (
    <WrapperSignIn>
      <s.Forma>
        <InputForm
          name="name"
          type="text"
          placeholder="User Name"
          register={register}
          errors={errors}
          // touched={touchedFields.name}
          // isValid={!errors.name && username}
        />
        <InputForm
          name="email"
          type="email"
          placeholder="Email address"
          register={register}
          errors={errors}
          // touched={touchedFields.name}
          // isValid={!errors.name && username}
        />
        <InputForm
          name="phone"
          type="phone"
          placeholder="Phone number"
          register={register}
          errors={errors}
          // touched={touchedFields.name}
          // isValid={!errors.name && username}
        />
        <InputForm
          name="password"
          type="password"
          placeholder="Password"
          register={register}
          errors={errors}
          // touched={touchedFields.name}
          // isValid={!errors.name && username}
        />
        <Button type="button" name="buttonMain" text="Register" />
        <s.Btn to="/login">Already have an account?</s.Btn>
      </s.Forma>
    </WrapperSignIn>
  );
};

export default RegisterForm;
