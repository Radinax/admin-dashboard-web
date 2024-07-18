import ky from "ky";

const request = ky.extend({
  credentials: "include",
});

export async function createAccount(username: string, password: string) {
  const response = await request.post("/api/signup", {
    json: { username, password },
  });

  if (response.status !== 201) {
    throw new Error("Could not create account");
  }
}

export async function createSession(username: string, password: string) {
  const response = await request.post("/api/signin", {
    json: { username, password },
  });

  if (response.status !== 204) {
    throw new Error("Could not create session");
  }
}
