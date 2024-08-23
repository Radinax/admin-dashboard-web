import { api } from "@/lib/api-client";
import { HttpStatusCode } from "@/types/api";
import { HTTPError } from "ky";

export async function createAccount(
  username: string,
  password: string,
  email: string
) {
  const response = await api.post("signup", {
    json: { username, password, email },
  });

  if (response.status !== (HttpStatusCode.Created as number)) {
    throw new Error("Could not create account");
  }

  return response;
}

export async function createSession(email: string, password: string) {
  try {
    const response = await api.post("signin", {
      json: { email, password },
    });

    // Check for successful response status
    if (response.status !== (HttpStatusCode.Created as number)) {
      throw new Error(`Unexpected response status: ${response.status}`);
    }
  } catch (error) {
    // Handle specific error types if necessary
    if (error instanceof HTTPError) {
      const errorMessage = await error.response.text();
      throw new Error(`HTTP error: ${errorMessage}`);
    } else {
      // Re-throw other errors
      throw new Error(`Could not create session`);
    }
  }
}

export async function deleteSession() {
  try {
    const response = await api.post("signout");

    // Check for successful response status
    if (response.status !== (HttpStatusCode.OK as number)) {
      throw new Error(`Unexpected response status: ${response.status}`);
    }
  } catch (error) {
    // Handle specific error types if necessary
    if (error instanceof HTTPError) {
      const errorMessage = await error.response.text();
      throw new Error(`HTTP error: ${errorMessage}`);
    } else {
      // Re-throw other errors
      throw new Error(`Could not create session`);
    }
  }
}
