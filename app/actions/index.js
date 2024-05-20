"use server"

import { signIn } from "@/auth";
import { base_url } from "@/utils/const";
import { revalidatePath } from 'next/cache'

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

export async function getAddress(email = "") {
    try {
        const res = await fetch(`${base_url}/address?email=${encodeURIComponent(email)}`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log("error: ", error);
        return { error: error.message };
    }
}

export async function addAddress(body) {
    try {
        const res = await fetch(
            process.env.NEXT_PUBLIC_BASE_URL + "api/address",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(body),
            }
          );
        const data = await res.json();
        revalidatePath('/en/checkout')
        return data;
    } catch (error) {
        console.log("error: ", error);
        return { error: error.message };
    }
}

export async function addOrder(body) {
    try {
        const res = await fetch(
            process.env.NEXT_PUBLIC_BASE_URL + "api/order",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(body),
            }
          );
        const data = await res.json();
        revalidatePath('/en/checkout')
        return data;
    } catch (error) {
        console.log("error: ", error);
        return { error: error.message };
    }
}