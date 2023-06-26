import { BiSolidBriefcaseAlt2, BiSolidLayer } from "react-icons/bi";
import { BsArrowDownLeft, BsArrowUpRight } from "react-icons/bs";
import { HiMiniPhoto } from "react-icons/hi2";
import { HiDesktopComputer } from "react-icons/hi";
import DropdownBtn from "./DropdownBtn";

const Status = () => {

  return (
    <div className=" grid md:grid-cols-1 lg:grid-cols-4 gap-5">
      <div className="flex gap-3 md:justify-around justify-center items-center px-3 py-2 shadow hover:bg-slate-50">
        <div className="w-[60px] bg-[#0c758a2f] rounded h-[50px] flex justify-center items-center">
          <BiSolidBriefcaseAlt2 className=" text-2xl text-[#0c768a]" />
        </div>
        <div className=" h-full py-5">
          <h4 className=" text-start text-slate-500">Total Earnings</h4>
          <h3 className=" text-xl text-start font-semibold">
            34,123.20{" "}
            <span className=" flex text-sm text-slate-500 font-semibold">
              USD
            </span>
          </h3>
          <p className=" flex w-32 gap-2 items-center mt-3 px-2 py-1 text-[12px] font-semibold leading-none bg-green-100 text-green-500 rounded">
            <BsArrowUpRight />
            <span className=" "> 2.8% Increase</span>
          </p>
        </div>
        <div className=" self-start relative">
          <DropdownBtn />
        </div>
      </div>
      <div className="flex gap-3 md:justify-around justify-center items-center px-3 py-2 shadow hover:bg-slate-50">
        <div className="w-[60px] bg-[#0c758a2f] rounded h-[50px] flex justify-center items-center">
          <BiSolidLayer className=" text-2xl text-[#0c768a]" />
        </div>
        <div className=" h-full py-5">
          <h4 className=" text-start text-slate-500">Total Orders</h4>
          <h3 className=" text-xl text-start font-semibold">
            63,234
            <span className=" flex text-sm text-slate-500 font-semibold">
              NOU
            </span>
          </h3>
          <p className=" flex w-32 gap-2 items-center mt-3 px-2 py-1 text-[12px] font-semibold leading-none bg-red-100 text-red-500 rounded">
            <BsArrowDownLeft />
            <span className=" ">7.8% Loss</span>
          </p>
        </div>
        <div className=" self-start relative">
          <DropdownBtn />
        </div>
      </div>
      <div className="flex gap-3 md:justify-around justify-center items-center px-3 py-2 shadow hover:bg-slate-50">
        <div className="w-[60px] bg-[#0c758a2f] rounded h-[50px] flex justify-center items-center">
          <HiMiniPhoto className=" text-2xl text-[#0c768a]" />
        </div>
        <div className=" h-full py-5">
          <h4 className=" text-start text-slate-500">Today Visitor</h4>
          <h3 className=" text-xl text-start font-semibold">
            425,34
            <span className=" flex text-sm text-slate-500 font-semibold">
              NOU
            </span>
          </h3>
          <p className=" flex w-32 gap-2 items-center mt-3 px-2 py-1 text-[12px] font-semibold leading-none bg-green-100 text-green-500 rounded">
            <BsArrowUpRight />
            <span className=" "> 4.6% Growth</span>
          </p>
        </div>
        <div className=" self-start relative">
          <DropdownBtn />
        </div>
      </div>
      <div className="flex gap-3 md:justify-around justify-center items-center px-3 py-2 shadow hover:bg-slate-50">
        <div className="w-[60px] bg-[#0c758a2f] rounded h-[50px] flex justify-center items-center">
          <HiDesktopComputer className=" text-2xl text-[#0c768a]" />
        </div>
        <div className=" h-full py-5">
          <h4 className=" text-start text-slate-500">Total Earnings</h4>
          <h3 className=" text-xl text-start font-semibold">
            26,482.46
            <span className=" flex text-sm text-slate-500 font-semibold">
              USD
            </span>
          </h3>
          <p className=" flex w-32 gap-2 items-center mt-3 px-2 py-1 text-[12px] font-semibold leading-none bg-green-100 text-green-500 rounded">
            <BsArrowUpRight />
            <span className=" ">23% Increase</span>
          </p>
        </div>
        <div className=" self-start relative">
          <DropdownBtn />
        </div>
      </div>
    </div>
  );

  return <div className="flex items-start justify-between"></div>;

};

export default Status;
