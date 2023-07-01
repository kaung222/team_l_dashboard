
// import { RiMenu2Line } from "react-icons/ri";
import Flags from "./Flags";
import FullScreen from "./FullScreen";
import Links from "./Links";
import Notifications from "./Notifications";
import Search from "./Search";
import Setting from "./Setting";
import { RiMenu2Line } from "react-icons/ri";



const Navbar = ({isSidebarOpen,setSidebarOpen}) => {
  return (

    <div className="w-full h-full px-3 bg-[#F5F8F9] flex items-center justify-between">
      {!isSidebarOpen && (
        <button onClick={() => setSidebarOpen(true)} className=" mx-5 text-black text-3xl font-bold">
           <RiMenu2Line />
         </button>
           )}
      <p className="text-2xl font-bold text-stone-600 p-10 hidden md:block">Dashboard</p>
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
