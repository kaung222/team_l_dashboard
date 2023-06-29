import Charts from "../components/Charts"
import Copy from "../components/Copy"
import Layout from "../components/Layout";
import Status from "../components/Status";

const Dashboard = () => {
  
  return (
    <Layout>
      <div className="">
      <div className="p-5 bg-[#F5F8F9]">
        <Status />
        <Charts />
        <Copy/>
      </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
