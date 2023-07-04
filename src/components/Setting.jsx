import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BsGear } from "react-icons/bs";
import RightSidebar from "./RightSidebar";

const Setting = () => {
  const [show, setShow] = useState(false);
  const handleDropDown = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  document.addEventListener("click", function () {
    setShow(false);
  });
  return (
    <div className="h-full">
      <button
        className="h-full px-3 hidden md:block"
        onClick={(e) => {
          setShow(!show);
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <BsGear className="text-2xl" />
      </button>
      <AnimatePresence>
        {show && (
          <motion.div
            className={`absolute top-0 right-0 w-[350px] bg-white shadow-md shadow-slate-200 h-screen z-50`}
            initial={{ x: 300 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ x: 300 }}
            onClick={handleDropDown}
          >
            <RightSidebar setShow={setShow} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Setting;
