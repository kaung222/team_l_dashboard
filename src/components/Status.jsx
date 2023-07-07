import { BsArrowDownLeft, BsArrowUpRight } from "react-icons/bs";
import DropdownBtn from "./DropdownBtn";
import { FaBed } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";
import { IoEnterSharp } from "react-icons/io5";
import { FaPersonDress } from "react-icons/fa6";

const Status = () => {
  return (
    <>
      <div className="grid md:grid-cols-1 lg:grid-cols-4 gap-6 px-4">
        <div className="flex gap-3 bg-white md:justify-around justify-center items-center px-3 py-2 shadow hover:bg-slate-50">
          <div className="w-[60px] px-1 bg-[#F0F3F1] rounded h-[50px] flex justify-center items-center">
            <FaBed className=" text-2xl text-[#EEC68C]" />
          </div>
          <div className=" h-full py-5">
            <h4 className=" text-start text-slate-500">New Booking</h4>
            <h3 className=" text-xl text-start font-semibold">3,122</h3>
            <p className=" flex w-32 gap-2 items-center mt-3 px-2 py-1 text-[12px] font-semibold leading-none bg-green-100 text-green-500 rounded">
              <BsArrowUpRight />
              <span className=" "> 2.8% Increase</span>
            </p>
          </div>
          <div className=" self-start relative">
            <DropdownBtn />
          </div>
        </div>
        <div className="flex gap-3 bg-white md:justify-around justify-center items-center px-3 py-2 shadow hover:bg-slate-50">
          <div className="w-[60px] px-1 bg-[#F0F3F1] rounded h-[50px] flex justify-center items-center">
            <IoEnterSharp className=" text-2xl text-[#EEC68C]" />
          </div>
          <div className=" h-full py-5">
            <h4 className=" text-start text-slate-500">Check In</h4>
            <h3 className=" text-xl text-start font-semibold">6,234</h3>
            <p className=" flex w-32 gap-2 items-center mt-3 px-2 py-1 text-[12px] font-semibold leading-none bg-red-100 text-red-500 rounded">
              <BsArrowDownLeft />
              <span className=" ">7.8% Loss</span>
            </p>
          </div>
          <div className=" self-start relative">
            <DropdownBtn />
          </div>
        </div>
        <div className="flex gap-3 bg-white md:justify-around justify-center items-center px-3 py-2 shadow hover:bg-slate-50">
          <div className="w-[60px] px-1 bg-[#F0F3F1] rounded h-[50px] flex justify-center items-center">
            <FaPersonDress className=" text-2xl text-[#EEC68C]" />
          </div>
          <div className=" h-full py-5">
            <h4 className=" text-start text-slate-500">Today Visitor</h4>
            <h3 className=" text-xl text-start font-semibold">9,234</h3>
            <p className=" flex w-32 gap-2 items-center mt-3 px-2 py-1 text-[12px] font-semibold leading-none bg-green-100 text-green-500 rounded">
              <BsArrowUpRight />
              <span className=" "> 4.6% Growth</span>
            </p>
          </div>
          <div className=" self-start relative">
            <DropdownBtn />
          </div>
        </div>
        <div className="flex gap-3 bg-white md:justify-around justify-center items-center px-3 py-2 shadow hover:bg-slate-50">
          <div className="w-[60px] px-1 bg-[#F0F3F1] rounded h-[50px] flex justify-center items-center">
            <IoMdExit className=" text-2xl text-[#EEC68C]" />
          </div>
          <div className=" h-full py-5">
            <h4 className=" text-start text-slate-500">Check Out</h4>
            <h3 className=" text-xl text-start font-semibold">2,482</h3>
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
    </>
  );
};

export default Status;
