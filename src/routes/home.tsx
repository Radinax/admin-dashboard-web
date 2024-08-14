/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { getUserQueryOptions, useUser } from "@/api/auth";
import { QueryClient } from "@tanstack/react-query";

// eslint-disable-next-line react-refresh/only-export-components
export const homeLoader = (queryClient: QueryClient) => async () => {
  const query = getUserQueryOptions();

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return (
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchQuery(query))
  );
};

const Home = () => {
  const { data } = useUser();
  console.log("user", data);
  return <div>Hello {data?.username}</div>;
};

export default Home;
