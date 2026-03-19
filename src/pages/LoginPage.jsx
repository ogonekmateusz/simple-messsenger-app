import React from "react";
import { useState } from "react";
import Form from "../components/Form";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onchangeUserName = (e) => {
    setUsername(e.target.value);
  };

  const onchangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://chat-api-zz4o.onrender.com/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        },
      );
      if (!response.ok) {
        const errorData = await response.json();
        setError(
          errorData.message || "Nieprawidłowa nazwa użytkownika lub hasło",
        );
        return;
      }

      const data = await response.json();
      console.log("Login response:", data);
      localStorage.setItem("token", data.token);
      window.location.href = "/chat";
    } catch (error) {
      console.error("Błąd podczas logowania:", error);
      setError("Błąd podczas logowania. Spróbuj ponownie.");
    }
  };

  return (
    <Form
      formTitle="Zaloguj się"
      formButtonText="Zaloguj się →"
      formFooterText="Nie masz jeszcze konta?"
      formFooterLinkText="Zarejestruj się"
      formSubmit={handleSubmit}
      userName={username}
      password={password}
      onchangeUserName={onchangeUserName}
      onchangePassword={onchangePassword}
      errorMessage={error}
    />
  );
}
