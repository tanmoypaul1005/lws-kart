"use server"

import { signIn } from "@/auth";
import { base_url } from "@/utils/const";

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
        // throw new Error(error);,
    }
}



export async function getCart(email = "") {
    try {
        const res = await fetch(`${base_url}/cart?email=${encodeURIComponent(email)}`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log("error: ", error);
        return { error: error.message };
    }
}