import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <>
      <div className="bg-black min-h-screen hidden sm:block fixed top-0 left-0 w-[250px]">
        <Sidebar />
      </div>
      <div className="  h-16 bg-blue-400">
        {/* <Navbar /> */}
        {children}
      </div>
    </>
  );
};

export default Layout;
