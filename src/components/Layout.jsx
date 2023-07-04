import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      {isSidebarOpen && (
        <div className="bg-[#0C768A] h-full fixed top-0 left-0 w-[250px] md:w-[320px] overflow-auto">
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
        </div>
      )}
      <div className='h-20'>
        <Navbar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>
        <div className={` overflow-hidden ${isSidebarOpen && "ml-[300px]"}`}>{children}</div>
    </>
  );
};

export default Layout;
