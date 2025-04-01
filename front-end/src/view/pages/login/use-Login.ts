import { useRef } from "react";
import { useNavigate } from "react-router";
import { api } from "../../../api/baseRequest";
import useAuth from "../../../hooks/useAuth";

enum STATUS_CODE {
  OK = 200,
}

export default function useLogin() {
  const { handleSetLoggedUserInfo } = useAuth();
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  async function handleLogin(): Promise<void> {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    try {
      const response = await api.post("sign-in", {
        email,
        password,
      });
      if (response.status === STATUS_CODE.OK) {
        const { id, name, email } = response.data.data.user;
        handleSetLoggedUserInfo({ id, name, email });

        localStorage.setItem("token", response.data.data.token);
        navigate("/dashboard");
        return;
      }

      alert("Erro no login. Por favor, tente novamente");
    } catch (error) {
      console.error("Erro ao tentar fazer o login: ", error);
    }
  }

  return {
    emailRef,
    passwordRef,
    handleLogin,
  };
}
