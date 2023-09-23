import SignInForm from "./signin-form";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { OPTIONS } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function SignIn() {
  const user = await getServerSession(OPTIONS);
  if (user) redirect("/dashboard");
  return (
    <div className="h-[calc(100vh+--header-height)] flex lg:justify-center items-center lg:items-start flex-col gap-5 lg:gap-10 lg:flex-row mt-5 md:mt-10 mx-5 sm:mx-auto max-w-[800px]">
      <div className="bg-white lg:flex-grow-[2] w-full sm:w-[500px] lg:w-full rounded border border-gray-100 px-6">
        <h1 className="p-4 text-xl md:text-2xl border-b ">Bem-vindo</h1>
        <div>
          <p className="font-light pt-4 pb-8 text-sm sm:text-base">
            Não tem conta?{" "}
            <span>
              <Link href="/register">Criar conta!</Link>
            </span>
          </p>
        </div>
        <SignInForm />
      </div>
      <div className="bg-white w-full sm:w-[500px] rounded border border-gray-100">
        <div className="px-6 py-4 flex flex-col">
          <h2 className="pb-4 text-lg md:text-xl">Encontra novos usuários</h2>
          <p className="py-4  leading-8">
            Obrigado por voltar, sentimos sua falta ❤️.
          </p>
          <p className=" leading-8">
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
    </div>
  );
}
