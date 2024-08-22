import { useUser } from "@/api";

const Home = () => {
  const { data } = useUser();
  console.log("user", data);
  return <div>Hello {data?.username}</div>;
};

export default Home;
