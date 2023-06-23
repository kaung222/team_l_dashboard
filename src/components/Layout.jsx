import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <>
      <div className="bg-slate-200 min-h-screen fixed top-0 left-0 w-[300px]">
        <Sidebar />
      </div>
      <div className=" ml-[300px] h-16 bg-blue-400">
        <Navbar />
        {children}
      </div>
    </>
  );
};

export default Layout;
