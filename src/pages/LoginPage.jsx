import React from 'react'
import { useState } from 'react'
import Form from '../components/Form';

export default function LoginPage() {
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
        console.log("Login:", { username, password });
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
    />
  );
}
