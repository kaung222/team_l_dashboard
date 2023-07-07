import Charts from "../components/Charts";
import Copy from "../components/Copy";
import Layout from "../components/Layout";
import Status from "../components/Status";
import Table from "../components/Table";

const Dashboard = () => {
  return (
    <Layout>
      <div className="">
        <div className="p-5 bg-[#F7F5EF]">
          <Status/>
          <Charts />
          <Copy />
          <Table />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
