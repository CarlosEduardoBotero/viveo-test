export default function Home() {
  return (
    <div className="mx-5 md:mx-10 flex flex-col items-center">
      <h1 className="text-center text-2xl mt-2 md:mt-5">Bem vindo</h1>
      <p className="text-center my-4 text-gray-700">
        Este é um teste de código para a empresa{" "}
        <a href="https://www.viveo.com.br/" target="_blank">
          VIVEO.
        </a>
      </p>
      <p className="text-center max-w-prose leading-7 text-gray-800">
        Implementei login e cadastro utilizando uma API gratuita{" "}
        <a href="https://mockapi.io/" target="_blank">
          MockApi
        </a>{" "}
        e{" "}
        <a href="https://next-auth.js.org/providers/github" target="_blank">
          OAuth com github
        </a>
        . Uma vez autenticado, você poderá ver uma lista de usuários aleatórios
        e filtrar por país e sexo.🚀
      </p>
    </div>
  );
}
