import { DashboardLayout } from "@/components/layouts/dashboard.layout";

interface Home {
  username?: string;
}

const Home = ({ username }: Home) => {
  return <DashboardLayout>Welcome {username}</DashboardLayout>;
};

export default Home;
