import { BsSearch } from "react-icons/bs";

const Search = () => {
  return (
    <div className=" bg-white flex shadow-md shadow-slate-200 items-center justify-center p-2 px-4 rounded-full">
      <BsSearch className=" text-slate-500" />
      <input
        type="text"
        className="border-none outline-none ml-2"
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
