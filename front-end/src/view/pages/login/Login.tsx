import Button from "../../components/Button";
import Input from "../../components/Input";

export default function Login() {
    return (
        <>
            <div className="min-h-screen flex items-center justify-center p-4">
                <form className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md xl:max-w-md 2xl:max-w-md mx-auto flex flex-col items-center justify-center gap-3 p-4">
                    <div className="text-center mb-2">
                        <h1 className="text-white tracking-wide text-3xl font-inter font-semibold mb-3">Acesse sua conta</h1>
                        <p className="text-color-font font-normal">Não tem conta? <a href="#" className="text-primary-color hover:text-primary-color-hover transition-colors duration-150 ease-linear">Cadastre-se</a></p>
                    </div>
                    <Input placeholder="E-mail" type="e-mail"/>
                    <Input placeholder="Senha" type="password"/>
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5 items-center">
                        <a href="#" className="text-color-font hover:text-primary-color transition-colors duration-150 ease-linear ">Esqueceu sua senha?</a>
                        <Button name="Entrar" icon="login"/>
                    </div>
                </form>
            </div>
        </>
    )
}