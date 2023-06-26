import { IoMdClose } from "react-icons/io";
// eslint-disable-next-line react/prop-types
const RightSidebar = ({ setShow }) => {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <p>Notifications</p>
        <button
          className="p-2 text-white rounded-full bg-slate-700 text-center"
          onClick={() => setShow(false)}
        >
          <IoMdClose />
        </button>
      </div>
    </div>
  );
};

export default RightSidebar;
