"use client"
import { signIn } from "next-auth/react";

const SocialLogin = () => {
    return (
        <div className="flex gap-4 mt-4">
          <a
            href="#"
            className="w-1/2 py-2 text-sm font-medium text-center text-white uppercase bg-blue-800 rounded font-roboto hover:bg-blue-700"
          >
            facebook
          </a>
          <div
            onClick={async () => {
                console.log("google")
              await signIn("google", {
                callbackUrl: "http://localhost:3000/en/product/1",
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