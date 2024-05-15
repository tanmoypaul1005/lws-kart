"use server"

import { signIn } from "@/auth";

export async function login(formData) {
    try {
       const response = await signIn("credentials", {
            email: formData.email,
            password: formData.password,
            redirect: false
        })
        return response;
    } catch(error) {
        console.log("error: ", error)
        return{ error: error.message}
        // throw new Error(error);
    }
}