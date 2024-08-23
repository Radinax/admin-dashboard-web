import { queryOptions, useQuery } from "@tanstack/react-query";
import { z } from "zod";
import { fetchData, QueryOptions } from "./utils";

const userSchema = z.object({
  username: z.string(),
  sessionId: z.string(),
});

export type User = z.infer<typeof userSchema>;

/**
 * GET USER
 */
export const getUser = (): Promise<User> => {
  return fetchData("me");
};

export function getUserQueryOptions() {
  return queryOptions({
    queryKey: ["get-user"],
    queryFn: getUser,
  });
}

export interface GetUserOptions {
  queryConfig?: QueryOptions<typeof getUserQueryOptions>;
}

export const useUser = ({ queryConfig }: GetUserOptions = {}) => {
  return useQuery({
    ...getUserQueryOptions(),
    ...queryConfig,
  });
};
