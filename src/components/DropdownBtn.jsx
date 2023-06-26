import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const DropdownBtn = () => {

    const [open, setOpen] = useState(false);

    const toggleDropdown = () => {
      setOpen(!open);
    };
  return (
    <div>
      {" "}
      <button
        className=" flex items-center px-2 py-2 border border-slate-100 rounded-full"
        onClick={toggleDropdown}
      >
        <BsThreeDotsVertical />
      </button>
      {open && (
        <div className=" absolute shadow right-0">
          <a
            href="#"
            className=" block px-4 py-2 text-sm bg-white w-[200px] hover:bg-gray-100"
          >
            Yearly
          </a>
          <a
            href="#"
            className=" block px-4 py-2 text-sm bg-white w-[200px] hover:bg-gray-100"
          >
            Monthly
          </a>
          <a
            href="#"
            className=" block px-4 py-2 text-sm bg-white w-[200px] hover:bg-gray-100"
          >
            Weekly
          </a>
          <a
            href="#"
            className=" block px-4 py-2 text-sm bg-white w-[200px] hover:bg-gray-100"
          >
            Today
          </a>
        </div>
      )}
    </div>
  );
}

export default DropdownBtn