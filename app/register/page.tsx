import RegisterForm from "./register-form";
import Link from "next/link";

export default function Register() {
  return (
    <div className="h-[calc(100vh-59px)] flex lg:justify-center items-center lg:items-start flex-col gap-5 lg:gap-10 lg:flex-row mt-5 md:mt-10 mx-5 sm:mx-auto max-w-[800px]">
      <div className="bg-white lg:flex-grow-[2] w-full sm:w-[500px] lg:w-full rounded border border-gray-100">
        <h1 className="px-6 py-4 text-xl md:text-2xl border-b ">Criar Conta</h1>
        <div>
          <p className="font-light pl-6 py-4 text-sm sm:text-base">
            Você já tem uma conta?{" "}
            <span>
              <Link href="/">Acesse agora</Link>
            </span>
          </p>
        </div>
        <RegisterForm />
      </div>
      <div className="bg-white w-full sm:w-[500px] rounded border border-gray-100"></div>
    </div>
  );
}
