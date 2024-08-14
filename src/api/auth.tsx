/* eslint-disable @typescript-eslint/no-unsafe-return */
import { api } from "@/lib/api-client";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { z } from "zod";

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

const userSchema = z.object({
  username: z.string(),
  sessionId: z.string(),
});

export type User = z.infer<typeof userSchema>;

/**
 * GET USER
 */
async function fetchData<T>(endpoint: string): Promise<T> {
  const response = await api.get(endpoint);
  return await response.json<T>();
}

export const getUser = (): Promise<User> => {
  return fetchData("/me");
};

export function getUserQueryOptions() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  return queryOptions({
    queryKey: ["get-user"],
    queryFn: () => getUser(),
  });
}

export type QueryConfig<T extends (...args: unknown[]) => unknown> = Omit<
  ReturnType<T>,
  "queryKey" | "queryFn"
>;

export interface GetUserOptions {
  queryConfig?: QueryConfig<typeof getUserQueryOptions>;
}

export const useUser = ({ queryConfig }: GetUserOptions = {}) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  return useQuery({
    ...getUserQueryOptions(),
    ...queryConfig,
  });
};
