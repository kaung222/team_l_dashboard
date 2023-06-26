import { useState } from "react"
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const [isSidebarOpen,setSidebarOpen] = useState(true)

  return (
    <>

        {isSidebarOpen && (
              <div className="bg-[#0C768A] h-screen fixed top-0 left-0 w-[320px] overflow-auto">
                <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
              </div>
        )}

      <div className=" ml-[300px] h-16 bg-blue-400">
        <Navbar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="bg-slate-200 min-h-screen fixed top-0 left-0 w-[300px]">
        <Sidebar />
      </div>

      <div className=" md:ml-[300px] h-16 bg-blue-400">

      <div className=" ml-[300px] h-[60px] bg-blue-400">

        <Navbar />

        {children}
      </div>
    </>
  );
};

export default Layout;
