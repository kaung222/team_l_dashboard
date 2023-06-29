import { useState } from "react"
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const [isSidebarOpen,setSidebarOpen] = useState(true)

  return (
    <>
<<<<<<< HEAD
      <div className="bg-black min-h-screen hidden sm:block fixed top-0 left-0 w-[250px]">
        <Sidebar />
      </div>
      <div className="  h-16 bg-blue-400">
        {/* <Navbar /> */}
        {children}
=======

        {isSidebarOpen && (
      <div className="bg-[#0C768A] h-screen fixed top-0 left-0 w-[320px] overflow-auto">
        <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>
        )}

      <div className={`h-20 ${isSidebarOpen && 'ml-[300px]'}`}>
        <Navbar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
          <div className="">
            {children}
          </div>
>>>>>>> 152c247d0b0d6a7e35c8badad46f8b47378fdec6
      </div>
    </>
  );
};

export default Layout;
