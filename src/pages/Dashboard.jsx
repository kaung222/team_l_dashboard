import Chart from "../components/Chart";
import Layout from "../components/Layout";
import Pie from "../components/Pie";
import Status from "../components/Status";

const Dashboard = () => {
  return (
    <Layout>
      <div className="p-5">
        <Status />
        <div className=" flex">
          <div className=" shadow w-full my-5">
            <div className=" flex justify-between items-center">
              <h4 className=" text-slate-700 font-semibold p-5">
                Audiences Metrics
              </h4>
              <div className=" hidden md:flex gap-1 h-5 mx-3 items-center">
                <button className=" px-2 py-1 bg-slate-100 text-sm text-slate-500 rounded">
                  ALL
                </button>
                <button className=" px-2 py-1 bg-slate-100 text-sm text-slate-500 rounded">
                  1M
                </button>
                <button className=" px-2 py-1 bg-slate-100 text-sm text-slate-500 rounded">
                  6M
                </button>
                <button className=" px-2 py-1 bg-slate-100 text-sm text-slate-500 rounded">
                  1Y
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className=" w-[400px] py-5 px-6 border-e border-slate-100">
                <Chart />
              </div>
              <div className=" w-[350px] py-5 px-3 border-e border-slate-100">
                <Pie />
              </div>
            </div>
          </div>
          <div className="shadow w-full my-5 bg-black h-5"></div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
