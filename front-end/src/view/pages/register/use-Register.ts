import { useRef } from "react";
import { useNavigate } from "react-router";
import { api } from "../../../api/baseRequest";

enum STATUS_CODE {
  OK = 200,
  CREATED = 201,
}

export default function useRegister() {
  const navigate = useNavigate();
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  async function handleRegister(): Promise<void> {
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const confirmPassword = confirmPasswordRef.current?.value;

    if (password != confirmPassword) {
      alert("A senha não é a mesma");
      return;
    }

    try {
      const response = await api.post("user", {
        name,
        email,
        password,
      });

      if (
        response.status === STATUS_CODE.OK ||
        response.status === STATUS_CODE.CREATED
      ) {
        alert("Usuário criado com sucesso!");
        navigate("/login");
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
    handleRegister,
  };
}
