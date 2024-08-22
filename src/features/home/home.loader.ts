import { getUserQueryOptions } from "@/api";
import { QueryClient } from "@tanstack/react-query";

export const homeLoader = (queryClient: QueryClient) => async () => {
  const query = getUserQueryOptions();

  return (
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchQuery(query))
  );
};
