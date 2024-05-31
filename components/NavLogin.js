import React from 'react'
import { signIn } from "next-auth/react";
const NavLogin = () => {
    return (
        <div
        onClick={async () => {
          await signIn("google", {
            callbackUrl: process.env.NEXT_PUBLIC_BASE_URL,
          });
        }}
          className="text-gray-200 hover:text-white transition"
        >
          Login
        </div>
    )
}

export default NavLogin