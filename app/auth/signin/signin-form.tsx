"use client";
import { useEffect, useState } from "react";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ControllerTextField } from "@/app/components/controller-textfield";
import { Button, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import GithubOAuthButton from "@/app/components/github-oauth-button";

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [invalidCredentialsError, setInvalidCredentialsError] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const router = useRouter();

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
  });

  type FormSchemaType = z.infer<typeof formSchema>;

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleOnSubmit: SubmitHandler<FormSchemaType> = async (credentials) => {
    setInvalidCredentialsError("");
    try {
      const data = await signIn("credentials", {
        ...credentials,
        redirect: false,
      });

      if (data?.error) throw new Error();

      router.push("/users?page=1");
    } catch (error) {
      setInvalidCredentialsError("e-mail ou senha inválida");
    }
  };

  useEffect(() => {
    // Prefetch the users page
    router.prefetch("/users?page=1");
  }, [router]);

  return (
    <div>
      <form
        className="bg-white flex justify-center items-center flex-col rounded gap-7"
        onSubmit={handleSubmit(handleOnSubmit)}
      >
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
        {invalidCredentialsError && (
          <span className="text-red-500">{invalidCredentialsError}</span>
        )}
        <Button
          variant="contained"
          type="submit"
          fullWidth
          disabled={isSubmitting}
        >
          Ingressar
        </Button>
      </form>
      <div className="flex justify-between items-center py-4">
        <div className="h-[1px] bg-gray-200 flex-grow"></div>
        <div className="mx-2 text-gray-500 text-sm">ou faça login com</div>
        <div className="h-[1px] bg-gray-200 flex-grow"></div>
      </div>
      <GithubOAuthButton />
    </div>
  );
}
