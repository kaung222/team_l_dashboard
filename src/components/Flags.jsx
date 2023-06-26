import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const data = [
  {
    image:
      "https://themesdesign.in/tocly/layouts/assets/images/flags/spain.jpg",
    name: "Spanish",
  },
  {
    image:
      "https://themesdesign.in/tocly/layouts/assets/images/flags/germany.jpg",
    name: "German",
  },
  {
    image:
      "https://themesdesign.in/tocly/layouts/assets/images/flags/italy.jpg",
    name: "Italian",
  },
  {
    image:
      "https://themesdesign.in/tocly/layouts/assets/images/flags/russia.jpg",
    name: "Russian",
  },
];
const Flags = () => {
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
        className="h-full px-3"
        onClick={(e) => {
          setShow(!show);
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <img
          src="https://themesdesign.in/tocly/layouts/assets/images/flags/us.jpg"
          alt=""
          className="w-[30px]"
        />
      </button>
      <AnimatePresence>
        {show && (
          <motion.div
            className={`absolute w-[150px] bg-white shadow-md py-5 shadow-slate-200 top-[60px] -translate-x-[100%]`}
            initial={{ y: 10, opacity: 0.6 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ y: 10, opacity: 0.6 }}
            onClick={handleDropDown}
          >
            {data.map((item, index) => {
              return (
                <div
                  className="flex py-1 items-center justify-start gap-3 px-3"
                  key={index}
                >
                  <img src={item.image} alt="" className="w-[30px]" />
                  <p>{item.name}</p>
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Flags;
