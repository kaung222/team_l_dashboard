/* eslint-disable no-unused-vars */
// import React from 'react'
import { RiMenu2Line } from "react-icons/ri";
import { motion } from "framer-motion";
import { BsChevronDown } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./ScrollBarStyles.css";

// eslint-disable-next-line react/prop-types, no-unused-vars
const Sidebar = ({ isSidebarOpen, setSidebarOpen }) => {
  const [user, setUser] = useState({
    id: 4,
    name: "Reporting",
    firstName: "E",
    team: "Team Reporting",
  });
  const userData = [
    {
      id: 1,
      name: "CRM",
      firstName: "C",
      team: "Designer Team",
    },
    {
      id: 2,
      name: "Application Design",
      firstName: "A",
      team: "Flutter Devs",
    },
    {
      id: 3,
      name: "Ecomerce",
      firstName: "E",
      team: "Developer Team",
    },
    {
      id: 4,
      name: "Reporting",
      firstName: "E",
      team: "Team Reporting",
    },
  ];
  const imageVatiants = {
    hidden: { x: "-100vw" },
    visible: {
      x: 0,
      transition: { duration: 1 },
    },
  };
  return (
    <motion.div
      variants={imageVatiants}
      initial="hidden"
      animate="visible"
      className=" text-black"
    >
      {/* <motion.div className=" text-black"> */}
      {/* Sidebar */}
      <div className="">
        {/* Sidebar Brand */}
        <div className=" justify-between items-center px-5 py-8 flex">
          <Link to={"/"}>
            <a href="" className="">
              <span className="">
                <img
                  src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/logo.png"
                  alt=""
                  className="w-[150px]"
                />{" "}
              </span>
            </a>
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className=" text-black text-3xl font-bold"
          >
            <RiMenu2Line />
          </button>
        </div>
        {/* Menu Section */}
        <div className="">
          <div className=" ml-6 my-5">
            <h1 className=" text-[#86BBC5 text-stone-500 font-bold">MENU</h1>
          </div>
          <div className="">
            <div className=" flex justify-between items-center px-7 mb-">
              <a href="/" className=" flex items-center mt-2">
                <span className=" text-2xl mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="1em"
                  >
                    <rect
                      width="20"
                      height="15"
                      x="2"
                      y="3"
                      rx="3"
                      className=""
                      fill="#000000"
                    ></rect>
                    <path
                      d="M16,21H8a.99992.99992,0,0,1-.832-1.55469l4-6a1.03785,1.03785,0,0,1,1.66406,0l4,6A.99992.99992,0,0,1,16,21Z"
                      fill="white"
                    ></path>
                  </svg>
                </span>
                <h1 className=" text-black text-[18px]">Dashboard</h1>
              </a>
              <span className=" badge bg-black text-white font-bold mt-3">
                3
              </span>
            </div>
            {/* App */}
            <div className="collapse mt-1">
              <input type="checkbox" />
              <div className="collapse-title ">
                <div className=" flex justify-between items-center px-3 w-[300px]">
                  <a href="/" className=" flex items-center mt-2">
                    <span className=" text-2xl mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="1em"
                      >
                        <path
                          d="M17,13H7a1,1,0,0,1,0-2H17a1,1,0,0,1,0,2Z"
                          fill="#ffffff"
                        ></path>
                        <path
                          fill="black"
                          d="M12,2A10.00082,10.00082,0,0,0,4.25684,18.3291L2.293,20.293A.99991.99991,0,0,0,3,22h9A10,10,0,0,0,12,2ZM9,7h6a1,1,0,0,1,0,2H9A1,1,0,0,1,9,7Zm6,10H9a1,1,0,0,1,0-2h6a1,1,0,0,1,0,2Zm2-4H7a1,1,0,0,1,0-2H17a1,1,0,0,1,0,2Z"
                        ></path>
                        <path
                          fill="white"
                          d="M15 17H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zM15 9H9A1 1 0 0 1 9 7h6a1 1 0 0 1 0 2z"
                        ></path>
                      </svg>
                    </span>
                    <h1 className=" text-black text-[18px]">Apps</h1>
                  </a>
                  <span className=" mt-3 text-black mr-7">
                    {" "}
                    <BsChevronDown />{" "}
                  </span>
                </div>
              </div>
              <div className="collapse-content">
                <ul className="text-[18px]">
                  <li className="collapse">
                    <input type="checkbox" />
                    <div className=" collapse-title flex justify-between">
                      <h1 className=" text-stone-600 ml-6">Email</h1>
                      <span className=" mt-1 text-stone-600 mr-10">
                        <BsChevronDown />{" "}
                      </span>
                    </div>
                    <div className="collapse-content ml-10">
                      <h1 className=" text-stone-600">Inbox</h1>
                      <h1 className=" text-stone-600 mt-2">Read Email</h1>
                    </div>
                  </li>
                  <li className=" text-stone-600 ml-10 mb-3">Calender</li>
                  <li className=" text-stone-600 ml-10 mb-3">Chat</li>
                  <li className=" text-stone-600 ml-10 mb-3">FileManager</li>
                  <li className=" text-stone-600 ml-10">Invoice</li>
                  <li className="collapse">
                    <input type="checkbox" />
                    <div className=" collapse-title flex justify-between">
                      <h1 className=" text-stone-600 ml-6">User</h1>
                      <span className=" mt-1 text-stone-600 mr-10">
                        <BsChevronDown />{" "}
                      </span>
                    </div>
                    <div className="collapse-content ml-10">
                      <h1 className=" text-stone-600">User List</h1>
                      <h1 className=" text-stone-600 mt-2">User Details</h1>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Pages */}
        <div className="">
          <div className=" ml-6 mt-1">
            <h1 className=" text-stone-500 font-bold">PAGES</h1>
          </div>
          {/* authentication */}
          <div className="collapse">
            <input type="checkbox" />
            <div className="collapse-title ">
              <div className=" flex justify-between items-center px-3 w-[300px]">
                <a href="/" className=" flex items-center">
                  <span className=" text-xl mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="1em"
                    >
                      <path
                        fill="white"
                        d="M21,12c0-.34-.02-.67-.05-1H12.5V9.5a.99991.99991,0,0,0-1.707-.707l-2.5,2.5a.99962.99962,0,0,0,0,1.41406l2.5,2.5A.99991.99991,0,0,0,12.5,14.5V13h8.45C20.98,12.67,21,12.34,21,12Z"
                      ></path>
                      <path
                        fill="#000000"
                        d="M12.5,13v1.5a.99989.99989,0,0,1-1.707.707l-2.5-2.5a.99962.99962,0,0,1,0-1.41406l2.5-2.5A.99991.99991,0,0,1,12.5,9.5V11h8.44952a10,10,0,1,0,0,2Z"
                      ></path>
                    </svg>
                  </span>
                  <h1 className=" text-black text-[18px]">Authentication</h1>
                </a>
                <span className=" mt-3 text-black mr-7">
                  {" "}
                  <BsChevronDown />{" "}
                </span>
              </div>
            </div>
            <div className="collapse-content">
              <ul className="text-[18px] text-stone-600 ml-10 flex flex-col gap-5">
                <Link to={"/login"}>
                  <li className="">
                    <h1 className="">Login</h1>
                  </li>
                </Link>
                <Link to={"/register"}>
                  <li className="">
                    <h1 className="">Register</h1>
                  </li>
                </Link>
                <li className="">
                  <h1 className="">Recover Password</h1>
                </li>
                <li className="">
                  <h1>Lock screen</h1>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Components */}
        <div className=" mb-40">
          <div className=" ml-6 mt-2">
            <h1 className=" text-stone-500 font-bold">COMPONENTS</h1>
          </div>
          <div className=" flex justify-between items-center px-7 mt-3">
            <Link to={"/form"} className=" flex items-center mt-2">
              <span className=" text-2xl mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                >
                  <path
                    fill="#000000"
                    d="M21 8H13a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2zM21 12H13a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2z"
                  ></path>
                  <rect
                    width="8"
                    height="8"
                    x="2"
                    y="4"
                    fill="white"
                    rx="1"
                  ></rect>
                  <path
                    fill="#"
                    d="M21 16H3a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2zM13 20H3a1 1 0 0 1 0-2H13a1 1 0 0 1 0 2z"
                  ></path>
                </svg>
              </span>
              <h1 className=" text-black text-[18px]">Create Form Data</h1>
            </Link>
          </div>
          <div className=" flex justify-between items-center px-7 mt-5">
            <a href="/" className=" flex items-center mt-2">
              <span className=" text-2xl mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                >
                  <path
                    fill="black"
                    d="M21,22H3a.99974.99974,0,0,1-1-1V3A.99974.99974,0,0,1,3,2H21a.99974.99974,0,0,1,1,1V21A.99974.99974,0,0,1,21,22ZM4,20H20V4H4Z"
                  ></path>
                  <path
                    fill="black"
                    d="M9 22a.99974.99974 0 0 1-1-1V3a1 1 0 0 1 2 0V21A.99974.99974 0 0 1 9 22zM15 22a.99974.99974 0 0 1-1-1V3a1 1 0 0 1 2 0V21A.99974.99974 0 0 1 15 22z"
                  ></path>
                  <path
                    fill="black"
                    d="M21 10H3A1 1 0 0 1 3 8H21a1 1 0 0 1 0 2zM21 16H3a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2z"
                  ></path>
                </svg>
              </span>
              <h1 className=" text-black text-[18px]">Tables</h1>
            </a>
          </div>
          <div className=" flex justify-between items-center px-7 mt-5">
            <a href="/" className=" flex items-center mt-2">
              <span className=" text-2xl mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                >
                  <path fill="#F2E8CC" d="M12,12V2A10,10,0,0,1,22,12Z"></path>
                  <path
                    fill="#ffffff"
                    d="M12,12l5,8.66022A10.01081,10.01081,0,0,0,22,12Z"
                  ></path>
                  <path
                    fill="black"
                    d="M17,20.66022,12,12V2a10,10,0,1,0,5.00085,18.66168l.00336-.00427Z"
                  ></path>
                </svg>
              </span>
              <h1 className=" text-black text-[18px]">Charts</h1>
            </a>
          </div>
          <div className=" flex justify-between items-center px-7 mt-5">
            <a href="/" className=" flex items-center mt-2">
              <span className=" text-2xl mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                >
                  <path
                    fill="white"
                    d="M15,11H13V9a1,1,0,0,0-2,0v2H9a1,1,0,0,0,0,2h2v2a1,1,0,0,0,2,0V13h2a1,1,0,0,0,0-2Z"
                  ></path>
                  <path
                    fill="#000000"
                    d="M12,2A10.00082,10.00082,0,0,0,4.25684,18.3291L2.293,20.293A.99991.99991,0,0,0,3,22h9A10,10,0,0,0,12,2Zm3,11H13v2a1,1,0,0,1-2,0V13H9a1,1,0,0,1,0-2h2V9a1,1,0,0,1,2,0v2h2a1,1,0,0,1,0,2Z"
                  ></path>
                </svg>
              </span>
              <h1 className=" text-black text-[18px]">Maps</h1>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Sidebar;
