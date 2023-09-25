import { getServerSession } from "next-auth";
import RegisterForm from "./register-form";
import Link from "next/link";
import { OPTIONS } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Register() {
  const user = await getServerSession(OPTIONS);
  if (user) redirect("/users");
  return (
    <div className="h-[calc(100vh-59px)] flex lg:justify-center items-center lg:items-start flex-col gap-5 lg:gap-10 lg:flex-row mt-5 md:mt-10 mx-5 sm:mx-auto max-w-[800px]">
      <div className="bg-white lg:flex-grow-[2] w-full sm:w-[500px] lg:w-full rounded border border-gray-100 px-6 py-4">
        <h1 className="pb-4 text-xl md:text-2xl border-b ">Criar Conta</h1>
        <div>
          <p className="font-light pt-4 pb-6 text-sm sm:text-base">
            Você já tem uma conta?{" "}
            <span>
              <Link href="/auth/signin">Acesse agora</Link>
            </span>
          </p>
        </div>
        <RegisterForm />
      </div>
      <div className="bg-white w-full sm:w-[500px] rounded border border-gray-100 px-6 py-4">
        <h2 className="pb-4 text-lg md:text-xl">Encontra novos usuários</h2>
        <p className="pt-4 leading-8">
          Obtenha informações sobre usuários aleatórios 🚀. Usamos a API{" "}
          <a href="https://randomuser.me/documentation" target="_blank">
            randomuser.
          </a>{" "}
          Desenvolvido por{" "}
          <a
            className="text-green-900"
            href="https://www.linkedin.com/in/carlos-eduardo-botero/"
            target="_blank"
          >
            Carlos Botero.
          </a>
        </p>
      </div>
    </div>
  );
}
