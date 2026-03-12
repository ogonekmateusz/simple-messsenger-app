import React from "react";
import { Outlet } from "react-router-dom";

export default function FormLayout() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-linear-to-tr from-blue-500/70 to-blue-600">
      <Outlet />
    </div>
  );
}
