import Button from "../../components/Button";
import Input from "../../components/Input";
import SmallInputPassword from "../../components/SmallInputPassword";

export default function Register() {
    return(
        <>
        <div className="min-h-screen flex items-center justify-center p-4">
            <form method="POST" className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md xl:max-w-md 2xl:max-w-md mx-auto flex items-center 
                justify-center flex-col gap-3 p-5">
                <div className="text-center mb-2">
                    <h1 className="font-inter font-semibold text-3xl tracking-wide text-white mb-3">Faça seu cadastro</h1>
                    <p className="text-white font-normal">Já tem conta? <a href="#" className="text-primary-color hover:text-primary-color-houver transition-colors duration-150 ease-linear">Faça Login</a></p>
                </div>

                <Input placeholder="Nome"/>
                <Input placeholder="E-mail"/>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 my-2">
                    <SmallInputPassword placeholder="Senha"/>
                    <div className="w-full hidden sm:block">
                        <SmallInputPassword placeholder="Confirmar senha"/>
                    </div>
                </div>
                <div className="w-full flex justify-center sm:justify-end">
                    <Button name="Cadastrar"/>
                </div>
            </form>
        </div>
        </>
    )
}