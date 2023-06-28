import { useState } from "react"
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const [isSidebarOpen,setSidebarOpen] = useState(true)
  console.log(isSidebarOpen)

  return (
    <>

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
      </div>
    </>
  );
};

export default Layout;
