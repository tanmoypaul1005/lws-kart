"use client";
import { signOut } from "next-auth/react";
import React from "react";

const Logout = () => {
  return (
    <div className="cursor-pointer" onClick={ () => {
        signOut({callbackUrl: process.env.NEXT_PUBLIC_BASE_URL+ "en/login"})
    }}>
      <div className="text-gray-200">Logout</div>
    </div>
  );
};

export default Logout;
