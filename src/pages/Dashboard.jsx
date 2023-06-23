import Layout from "../components/Layout";
import Status from "../components/Status";

const Dashboard = () => {
  return (
    <Layout>
      <div className="p-5">
        <Status />
      </div>
    </Layout>
  );
};

export default Dashboard;
