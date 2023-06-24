import { RiMenu2Line } from "react-icons/ri";

const Navbar = ({isSidebarOpen,setSidebarOpen}) => {
  return <div className="w-full h-full">
    {!isSidebarOpen && (
      <button onClick={() => setSidebarOpen(true)} className=" text-white text-3xl font-bold">
           <RiMenu2Line />
          </button>
            )}
  </div>;
};

export default Navbar;
