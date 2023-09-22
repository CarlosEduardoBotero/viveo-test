"use client";
import { useState } from "react";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ControllerTextField } from "../components/controller-textfield/controller-textfield";
import { Button, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { ControllerCheckbox } from "../components/controller-checkbox/controller-checkbox";
import Link from "next/link";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const formSchema = z.object({
    email: z
      .string({ required_error: "Insira seu E-mail" })
      .email("Informe o endereço de e-mail")
      .min(1, "insira seu E-mail"),
    password: z
      .string({ required_error: "Insira sua senha" })
      .min(1, "Insira sua senha")
      .min(6, "A senha deve ter de 6 a 12 caracteres")
      .max(12, "A senha nao deve ter mais de 12 caracteres"),
    terms: z.literal(true, {
      errorMap: () => ({
        message: "Você deve aceitar os Termos e Condições",
      }),
    }),
  });

  type FormSchemaType = z.infer<typeof formSchema>;

  const {
    handleSubmit,
    control,
    formState: { isValid, errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      terms: true,
    },
  });

  const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
    console.log(data);
  };

  return (
    <form className="bg-white flex justify-center items-center flex-col py-4 px-6 rounded gap-7">
      <ControllerTextField
        control={control}
        name="email"
        label="E-mail"
        type="email"
        id="email"
        variant="outlined"
        fullWidth
      />
      <ControllerTextField
        control={control}
        name="password"
        label="Senha"
        type={showPassword ? "text" : "password"}
        variant="outlined"
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <div className="self-start">
        <ControllerCheckbox
          controlController={control}
          name="terms"
          id="terms"
        />
        <span className="font-light text-gray-700 text-xs sm:text-sm">
          Ao clicar em “Criar uma conta”, você concorda com os{" "}
          <Link href="conditions" className="">
            Termos de Serviço
          </Link>
        </span>
        <br />
        <span className="text-xs text-red-500">{errors.terms?.message}</span>
      </div>
      <Button variant="contained" onClick={handleSubmit(onSubmit)} fullWidth>
        Criar uma conta
      </Button>
    </form>
  );
}
