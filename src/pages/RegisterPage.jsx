import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../components/Form";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [inviteCode, setInviteCode] = useState("");
  const onchangeInviteCode = (e) => {
    setInviteCode(e.target.value);
  };
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
      inviteCode={inviteCode}
      onchangeInviteCode={onchangeInviteCode}
    >
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1.5">
          Kod zaproszenia
        </label>
        <input
          type="text"
          placeholder="np. ABCD-1234"
          value={inviteCode}
          onChange={onchangeInviteCode}
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder-gray-300 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all"
        />
      </div>
    </Form>
  );
}
