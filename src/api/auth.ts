import { api } from "@/lib/api-client";

export async function createAccount(
  username: string,
  password: string,
  email: string
) {
  const response = await api.post("/api/signup", {
    json: { username, password, email },
  });

  if (response.status !== 201) {
    throw new Error("Could not create account");
  }

  return response;
}

export async function createSession(email: string, password: string) {
  const response = await api.post("/api/signin", {
    json: { email, password },
  });

  if (response.status !== 204) {
    throw new Error("Could not create session");
  }
}
