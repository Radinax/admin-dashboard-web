import { getJSON } from "@/lib/get-json";
import ky from "ky";
import { z } from "zod";

export const request = ky.extend({
  credentials: "include",
});

export async function createAccount(username: string, password: string) {
  const response = await request.post("/api/signup", {
    json: { username, password },
  });

  if (response.status !== 201) {
    throw new Error("Could not create account");
  }

  return response;
}

export async function createSession(username: string, password: string) {
  const response = await request.post("/api/signin", {
    json: { username, password },
  });

  if (response.status !== 204) {
    throw new Error("Could not create session");
  }
}

const userSchema = z.object({
  username: z.string(),
  sessionId: z.string(),
});

export async function getUser() {
  return getJSON("/api/me", userSchema);
}
