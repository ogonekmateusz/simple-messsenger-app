import React from "react";
import { Link } from "react-router-dom";
export default function Form({
  children,
  formTitle,
  formButtonText,
  formFooterText,
  formFooterLinkText,
  formSubmit,
  userName,
  password,
  inviteCode,
  onchangeUserName,
  onchangePassword,
  onchangeInviteCode,

}) {
  return (
    <div className="w-full max-w-sm bg-white rounded-2xl border border-gray-100 shadow-sm px-8 mx-3 md:mx-0 py-10">
      <h2 className="text-2xl font-semibold text-gray-900 mb-1">{formTitle}</h2>
      <p className="text-sm text-gray-400 mb-7">Wypełnij dane, aby zacząć</p>

      <form className="space-y-4" onSubmit={formSubmit}>
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1.5">
            Nazwa użytkownika
          </label>
          <input
            type="text"
            placeholder="np. jan_kowalski"
            required
            value={userName}
            autoComplete="username"
            onChange={onchangeUserName}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder-gray-300 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1.5">
            Hasło
          </label>
          <input
            type="password"
            placeholder="Minimum 8 znaków"
            required
            value={password}
            autoComplete="new-password"
            onChange={onchangePassword}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder-gray-300 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all"
          />
        </div>

        {children}

        <button
          type="submit"
          className="w-full py-2.5 mt-1 rounded-lg bg-blue-500 hover:bg-blue-600 active:scale-95 text-white font-semibold text-sm transition-all cursor-pointer"
        >
          {formButtonText}
        </button>
      </form>

      <div className="flex items-center gap-3 my-5">
        <div className="flex-1 h-px bg-gray-100" />
        <span className="text-xs text-gray-300">lub</span>
        <div className="flex-1 h-px bg-gray-100" />
      </div>

      <p className="text-center text-xs text-gray-400">
        {formFooterText}{" "}
        <Link
          to={formFooterLinkText === 'Zarejestruj się' ? '/register' : '/login'}
          className="text-blue-500 hover:text-blue-600 font-medium"
        >
          {formFooterLinkText}
        </Link>
      </p>
    </div>
  );
}
