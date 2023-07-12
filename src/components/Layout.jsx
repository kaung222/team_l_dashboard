import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  let x = window.matchMedia("(max-width: 700px)")

  useEffect(() => {
    if (x.matches) {
      console.log(x.matches)
      setSidebarOpen(false)
    } else {
     console.log(x.matches)
     setSidebarOpen(true)
    }
  },[])

  const imageVatiants = {
    hidden:{x:'-100vw'},
    visible:{
      x:0,
      transition:{duration:0.5}
    }
   }

  return (
    <>
      {isSidebarOpen && (
        <motion.div
        variants={imageVatiants}
        initial='hidden'
        animate='visible'
        className="bg-[#EEC68C] h-full fixed top-0 left-0 w-[250px] md:w-[320px]">
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
        </motion.div>
      )}


      <div className='h-20'>
        <Navbar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>
        <div className={` overflow-hidden ${isSidebarOpen && "ml-[300px]"}`}>{children}</div>
    </>
  );
};

export default Layout;
