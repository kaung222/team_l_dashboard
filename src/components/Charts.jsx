import BarChart from './BarChart'
import PieChart from './PieChart'
import Map from './Map'
import Dbarchart from './Profile/Dbarchart'

const Charts = () => {
  return (
    <div className="md:flex justify-between   ">
      <div className=" flex flex-col items-center shadow my-5 mx-5 bg-white sm:w-[67%]">
        <div className=" flex justify-between w-[100%] px-5 mt-3 ">
          <div>
            <h4 className=" text-slate-700 font-semibold ">
              Reservation Metrics
            </h4>
          </div>
          <div>
            <div className=" hidden md:flex gap-1 h-5 mx-3 ">
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
        </div>
        <div className="flex flex-wrap   lg:flex-nowrap items-center justify-center  mx-5">
          <div className="sm:hidden py-5 px-6  border-slate-100">
            <BarChart />
          </div>
          <div className="sm:block hidden py-5 px-6  border-slate-100">
            <Dbarchart />
          </div>
          <div className=" w-[250px] py-5 px-6  border-slate-100  relative">
            <PieChart />
            <div className=" absolute top-[30%] left-[32%]">
              <h4 className=" text-slate-400 text-lg">Total Rooms</h4>
              <h2 className=" text-2xl font-semibold text-center">5,871</h2>
            </div>
            <div className="flex justify-evenly mt-5">
              <div className="flex gap-1">
                <div className="rounded-full mt-1 bg-[#EEC68C] w-3 h-3 "></div>
                <div className="text-sm">Premiere</div>
              </div>
              <div className="flex gap-1">
                <div className="rounded-full mt-1 bg-[#F7F5EF] w-3 h-3 border"></div>
                <div className="text-sm">Superior</div>
              </div>
            </div>
            <div className="flex gap-1 justify-center mt-2">
              <div className="rounded-full mt-1 bg-[#daeaee] w-3 h-3 "></div>
              <div className="text-sm">Master</div>
            </div>
          </div>
        </div>
      </div>

      <div className="shadow ml-4  items-center flex  flex-col sm:w-[28%] w-[90%]  h-[400px] md:h-[440px] bg-white sm:mt-5">
        <div className="w-[100%] flex justify-between px-3 sm:mt-5 ">
          <h1 className="  font-bold text-stone-600">Countries of Visitors</h1>
          <button className=" bg-[#F5F8F9] text-[#EEC68C]  rounded-md  hover:bg-[#0C768A] text-sm hover:text-white">
            Export Report
          </button>
        </div>
        <Map />
      </div>
    </div>
  );
}

export default Charts
