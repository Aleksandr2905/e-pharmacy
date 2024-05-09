import { useForm } from "react-hook-form";
import InputForm from "../InputForm/InputForm";
import * as s from "./RegisterForm.styled";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button/Button";
import WrapperSignIn from "../WrapperSignIn/WrapperSignIn";
import { registerSchema } from "../../helpers/validation";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, touchedFields },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(registerSchema),
  });

  const username = watch("name");
  const email = watch("email");
  const phone = watch("phone");
  const password = watch("password");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <WrapperSignIn>
      <s.Forma onSubmit={handleSubmit(onSubmit)}>
        <InputForm
          name="name"
          type="text"
          placeholder="User Name"
          register={register}
          errors={errors}
          touched={touchedFields.name}
          isValid={!errors.name && username}
        />
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
          name="phone"
          type="phone"
          placeholder="Phone number"
          register={register}
          errors={errors}
          touched={touchedFields.phone}
          isValid={!errors.name && phone}
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
        <Button type="button" name="buttonMain" text="Register" />
        <s.Btn to="/login">Already have an account?</s.Btn>
      </s.Forma>
    </WrapperSignIn>
  );
};

export default RegisterForm;
