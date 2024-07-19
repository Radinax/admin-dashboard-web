import { getUser } from "@/api/auth";
import useSWR from "swr";

const Home = () => {
  const { data } = useSWR(["get-user"], getUser, { suspense: true });
  console.log("user", data);
  return <div>Hello {data.username}</div>;
};

export default Home;
