import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Login() {
  return (
    <div>
      <Header />
      <main className="flex justify-center items-center">
        <div className="m-44  flex w-[800px] h-[370px]">
          <div className=" bg-[#00579D] shadow-2xl w-[50%] h-[370px] flex flex-col gap-2 justify-center items-center font-semibold text-white">
            <p>Ainda não possui uma conta?</p>
            <button className="text-[#00579D] w-44 bg-white rounded-lg p-1">
              Inscrever-se
            </button>
          </div>
          <div className="bg-[#006EC7] w-[50%] h-[370px] flex flex-col items-center  justify-center">
            <div>
              <p className="text-xl text-white font-bold">Entrar</p>
            </div>
            <div className="flex flex-col gap-6 mt-11">
              <div className="w-[274px] flex bg-white rounded-lg text-center sombra p-1">
                <img
                  width="20px"
                  height="20px"
                  src="https://img.icons8.com/ios-filled/50/user-male-circle.png"
                  alt="user-male-circle"
                  className="ml-2"
                />
                <input
                  type="text"
                  className="ml-2 placeholder:font-semibold  p-1 w-[230px] "
                  placeholder="Nome de usuário ou email"
                />
              </div>
              <div className="w-[274px] flex bg-white rounded-lg text-center sombra p-1">
                <img
                  width="20px"
                  height="20px"
                  src="https://img.icons8.com/material/24/lock--v1.png"
                  className="ml-2"
                  alt="lock--v1"
                />
                <input
                  type="text"
                  className="ml-2 placeholder:font-semibold  p-1 w-[230px] "
                  placeholder="Senha"
                />
              </div>
            </div>
            <a href="#" className="text-sm adashed text-white mt-3">
              Esqueceu a senha?
            </a>
            <button className=" bg-[#00579D] mt-9 w-[171px] rounded-xl p-1 text-white font-medium">
              Confirmar
            </button>
          </div>
        </div>
      </main>
<Footer/>
    </div>
  );
}
