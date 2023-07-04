import BarChart from './BarChart'
import PieChart from './PieChart'
import Map from './Map'

const Charts = () => {
  return (
    <div className="md:flex justify-between gap-
     ">
    <div className=" shadow w-full my-5 mx-7 bg-white">
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
      <div className="flex items-center justify-center g-24 gap-36">
        <div className=" w-[400px] py-5 px-6 border-e border-slate-100">
          <BarChart />
        </div>
        <div className=" w-[250px] py-5 px-6 border-e border-slate-100  relative">
          <PieChart />
          <div className=" absolute top-[35%] left-[28%]">
            <h4 className=" text-slate-400 font-semibold">Total value</h4>
            <h2 className=" text-2xl font-semibold">$75871</h2>
          </div>
        </div>

      </div>
    </div>

    <div className="shadow-md  h-[400px] md:h-[470px] w-full mt-5 mr-20 bg-white">
      <div className=" flex gap-7 p-3">
        <h1 className=" text-xl font-bold text-stone-600">Live User By Country</h1>
        <button className=" bg-[#F5F8F9] text-[#0C7691] px-3 rounded-md py-1 hover:bg-[#0C768A] text-sm hover:text-white">Export Report</button>
      </div>
      <Map />
    </div>

  </div>
  )
}

export default Charts
