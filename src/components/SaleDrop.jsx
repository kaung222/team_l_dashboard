import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const SaleDrop = () => {
    const [open, setOpen] = useState(false);

    const toggleDropdown = () => {
        setOpen(!open);
    };

    return (
        <div>
            <button
                className="border border-slate-100"
                onClick={toggleDropdown}
            >
                <RiArrowDropDownLine />
            </button>

            {open && (
                <div className="absolute  ml-[-62px] shadow z-50">
                    <ul className="list-none ">
                        <li className="px-4 py-2 text-sm bg-white text-[#83838d] hover:bg-gray-100">
                            <a href="#">Yearly</a>
                        </li>
                        <li className="px-4 py-2 text-sm bg-white text-[#83838d] hover:bg-gray-100">
                            <a href="#">Monthly</a>
                        </li>
                        <li className="px-4 py-2 text-sm bg-white text-[#83838d] hover:bg-gray-100">
                            <a href="#">Weekly</a>
                        </li>
                        <li className="px-4 py-2 text-sm bg-white text-[#83838d] hover:bg-gray-100">
                            <a href="#">Today</a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default SaleDrop;
