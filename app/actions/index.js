"use server";

import { signIn } from "@/auth";
import { base_url } from "@/utils/const";
import { revalidatePath } from "next/cache";
import EmailTemplate from "./EmailTemplat";
import { Resend } from "resend";

export async function login(formData) {
  try {
    const response = await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirect: false,
    });
    return response;
  } catch (error) {
    console.log("error: ", error);
    return { error: error.message };
    // throw new Error(error);,
  }
}

export async function getCart(email = "") {
  try {
    const res = await fetch(
      `${base_url}/cart?email=${encodeURIComponent(email)}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error: ", error);
    return { error: error.message };
  }
}

export async function getAddress(email = "") {
  try {
    const res = await fetch(
      `${base_url}/address?email=${encodeURIComponent(email)}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error: ", error);
    return { error: error.message };
  }
}

export async function addAddress(body) {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "api/address", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    revalidatePath("/en/checkout");
    return data;
  } catch (error) {
    console.log("error: ", error);
    return { error: error.message };
  }
}

export async function addOrder(body) {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    revalidatePath("/en/checkout");
    return data;
  } catch (error) {
    console.log("error: ", error);
    return { error: error.message };
  }
}

export async function sendEmail(email) {
  try {
    console.log("email", email)
    const resend = new Resend(process.env.RESEND_API_KEY);
    const fromAddress = "contact from <onbording@resend.dev>"; // Example generic address, replace with actual if provided by Resend

    const message = `Dear you have been successfully registered for the event. Please carry this email and your official id to the venue. We are excited to have you here.`;
    const sent = await resend.emails.send({
        to: ["tanmoypaul1005@gmail.com"],
        from: 'Acme <onboarding@resend.dev>',
        subject: "Successfully Registered for the event!",
        react: EmailTemplate({ message }), // Assuming EmailTemplate is defined elsewhere in your code
      });
  
    console.log("sent", sent);
  } catch (error) {
    console.log("error", error);
    throw error;
  }
}
