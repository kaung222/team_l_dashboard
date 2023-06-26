
import { RiMenu2Line } from "react-icons/ri";

const Navbar = ({isSidebarOpen,setSidebarOpen}) => {
  return <div className="w-full h-full">
    {!isSidebarOpen && (
      <button onClick={() => setSidebarOpen(true)} className=" text-white text-3xl font-bold">
           <RiMenu2Line />
          </button>
            )}
  </div>;

import Flags from "./Flags";
import FullScreen from "./FullScreen";
import Links from "./Links";
import Notifications from "./Notifications";
import Search from "./Search";
import Setting from "./Setting";

const Navbar = () => {
  return (
    <div className="w-full h-full px-3 bg-slate-100 flex items-center justify-between">
      <p className="text-xl">Dashboard</p>
      <div className="flex items-center h-full justify-center gap-2">
        <Search />
        <Flags />
        <Links />
        <FullScreen />
        <Notifications />
        <Setting />
      </div>
    </div>
  );

};

export default Navbar;
