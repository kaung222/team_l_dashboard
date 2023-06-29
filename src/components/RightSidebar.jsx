import { IoMdClose } from "react-icons/io";
// eslint-disable-next-line react/prop-types
const RightSidebar = ({ setShow }) => {
  return (
    <div className="p-4">

      <div className="flex items-center justify-between mt-5">
        <p className=" font-bold text-2xl text-stone-600">Setting</p>
        <button
          className="p-2 text-white rounded-full bg-slate-700 text-center"
          onClick={() => setShow(false)}
        >
          <IoMdClose />
        </button>
      </div>
      <h1 className=" font-bold text-lg text-stone-500 my-10 text-center">Choose Layouts</h1>

      <div className="">
        <img src="https://themesdesign.in/tocly/layouts/assets/images/layouts/layout-1.jpg" alt="" />
      </div>

    </div>
  );
};

export default RightSidebar;
