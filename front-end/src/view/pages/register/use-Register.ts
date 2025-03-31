import { useRef } from "react";
import { useNavigate } from "react-router";
import { api } from "../../../api/baseRequest";

enum STATUS_CODE {
    OK = 200
}

export default function useRegister() {
    const navigate = useNavigate()
    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const confirmPasswordRef = useRef<HTMLInputElement>(null)

    async function handleRegister() {
        const name = nameRef.current?.value
        const email = emailRef.current?.value
        const password = passwordRef.current?.value
        const confirmPassword = confirmPasswordRef.current?.value

        try {

            if(password != confirmPassword ) {
                alert("A senha não é a mesma")
                return
            }
            console.log("oi1")

            const response = await api.post("user", {
                name, 
                email,
                password
            })
            
            if (response.status === STATUS_CODE.OK) {
                localStorage.setItem("token", response.data.token);
                navigate("/dashboard");
                console.log("oi2")
                return;
              }

              alert("Erro no registro. Por favor, tente novamente");
        } catch (error) {
            console.error("Erro ao tentar fazer o registro: ", error); 
        }
    }

    return {
        nameRef,
        emailRef,
        passwordRef,
        confirmPasswordRef,
        handleRegister
    }
}