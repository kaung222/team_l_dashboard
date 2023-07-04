import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import Fade from "@mui/material/Fade";
import {RiCheckboxCircleLine} from 'react-icons/ri'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {PiShoppingCart} from 'react-icons/pi'
import { BsBell } from "react-icons/bs";

export default function Notifications() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="h-full relative mr-20">
        <p className=" w-2 rounded-full h-2 top-6 left-9 bg-red-500 absolute"></p>
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="h-full"
      >
        <BsBell className=" text-2xl text-slate-600 font-bold" />
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        // className=" mr-20"
      >
        <div className=" w-[400px] h-[350px] p-4 cursor-pointer">
          <div className="flex w-full items-center justify-between">
            <p className=" text-[#555658] font-bold">Notifications</p>
            <p className=" text-blue-600 text-sm">View All</p>
          </div>
          <div className=" flex mt-8">
            <div className=" text-xl">
              <div className=" bg-gray-500 rounded-full p-3 text-white">
              <PiShoppingCart />
              </div>
            </div>
            <div className=" ml-5">
                <h1 className=" text-[#555658] font-bold">Your Order is Placed </h1>
              <div className="">
              <p className="mb-1">If several languages coalesce the grammar</p>
                <p className=" flex items-center gap-2"> <AiOutlineClockCircle /> 3 min ago </p>
              </div>
            </div>
          </div>

          <div className=" flex mt-8">
            <div className=" text-xl">
              <div className=" bg-green-500 rounded-full p-3 text-white">
              <RiCheckboxCircleLine />
              </div>
            </div>
            <div className=" ml-5">
                <h1 className=" text-[#555658] font-bold">Your Item is Shipped </h1>
              <div className="">
              <p className="mb-1">If several languages coalesce the grammar</p>
                <p className=" flex items-center gap-2"> <AiOutlineClockCircle /> 3 min ago </p>
              </div>
            </div>
          </div>

          <div className=" flex mt-8">
            <div className=" text-xl">
              <div className=" rounded-full text-white">
              <img width={'40px'} className=" rounded-full" src="https://themesdesign.in/tocly/layouts/assets/images/users/avatar-3.jpg" alt="" />
              </div>
            </div>
            <div className=" ml-5">
                <h1 className=" text-[#555658] font-bold">James Lemere </h1>
              <div className="">
              <p className="mb-1">If several languages coalesce the grammar</p>
                <p className=" flex items-center gap-2"> <AiOutlineClockCircle /> 1 hour ago </p>
              </div>
            </div>
          </div>

          <div className=" flex mt-8">
            <div className=" text-xl">
              <div className=" rounded-full text-white">
              <img width={'40px'} className=" rounded-full" src="https://themesdesign.in/tocly/layouts/assets/images/users/avatar-4.jpg" alt="" />
              </div>
            </div>
            <div className=" ml-5">
                <h1 className=" text-[#555658] font-bold">James Lemere </h1>
              <div className="">
              <p className="mb-1">If several languages coalesce the grammar</p>
                <p className=" flex items-center gap-2"> <AiOutlineClockCircle /> 1 hour ago </p>
              </div>
            </div>
          </div>
            <p className=" mt-6 pb-6 text-center text-stone-600 text-lg">View More ..</p>
        </div>
      </Menu>
    </div>
  );
}
