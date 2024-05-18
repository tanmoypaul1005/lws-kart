"use client"
import { signIn } from "next-auth/react";
import Link from "next/link";

const SocialLogin = () => {
    return (
        <div className="flex gap-4 mt-4">
          <Link
            href="/"
            className="w-1/2 py-2 text-sm font-medium text-center text-white uppercase bg-blue-800 rounded font-roboto hover:bg-blue-700"
          >
            facebook
          </Link>
          <div
            onClick={async () => {
              await signIn("google", {
                callbackUrl: process.env.NEXT_PUBLIC_BASE_URL,
              });
            }}
            className="w-1/2 py-2 text-sm font-medium text-center text-white uppercase bg-red-600 rounded cursor-pointer font-roboto hover:bg-red-500"
          >
            google
          </div>
        </div>
    )
}

export default SocialLogin