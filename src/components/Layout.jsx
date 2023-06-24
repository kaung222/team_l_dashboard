import { useState } from "react"
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const [isSidebarOpen,setSidebarOpen] = useState(true)

  return (
    <>
        {isSidebarOpen && (
              <div className="bg-[#0C768A] overflow-scroll min-h-screen fixed top-0 left-0 w-[310px]">
                <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
              </div>
        )  }

      <div className=" ml-[300px] h-16 bg-blue-400">
        <Navbar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
        {children}
      </div>
    </>
  );
};

export default Layout;
