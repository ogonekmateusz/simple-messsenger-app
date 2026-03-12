import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../components/Form";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onchangeUserName = (e) => {
    setUsername(e.target.value);
  };

  const onchangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register:", { username, password });
  };

  return (
    <Form
      formTitle="Zarejestruj się"
      formButtonText="Zarejestruj się →"
      formFooterText="Masz już konto?"
      formFooterLinkText="Zaloguj się"
      formSubmit={handleSubmit}
      userName={username}
      password={password}
      onchangeUserName={onchangeUserName}
      onchangePassword={onchangePassword}
    ></Form>
  );
}
