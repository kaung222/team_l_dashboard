// import React from 'react'

import { useState } from "react";
import { RiShieldUserLine } from "react-icons/ri";
import { TfiClipboard } from "react-icons/tfi";
import Layout from "../components/Layout";
import About from "../components/Profile/About";
import Task from "../components/Profile/Task";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("About");
  console.log(activeTab);
  return (
    <Layout>
      <div className=" p-10">
        <div className=" grid grid-cols-1 md:grid-cols-4">
          <div className="col-span-3 mr-10 bg-white">
            {/* Tabs */}
            <div className="">
              <ul className=" flex border-b-2 cursor-pointer">
                <li
                  onClick={() => setActiveTab("About")}
                  className={` ${
                    activeTab === "About" &&
                    "border-b-4 border-blue-400 bg-blue-300"
                  } text-xl flex items-center flex-col px-32 pb-5 pt-5`}
                >
                  <RiShieldUserLine className="" />
                  <h1>About</h1>
                </li>
                <li
                  onClick={() => setActiveTab("Tasks")}
                  className={` ${
                    activeTab === "Tasks" &&
                    "border-b-4 border-blue-400 bg-blue-300"
                  } text-xl flex items-center flex-col px-32 pb-5 pt-5`}
                >
                  <TfiClipboard />
                  <h1>Tasks</h1>
                </li>
              </ul>
            </div>
          <div className="">
            {activeTab === "About" && <About />}
            {activeTab === "Tasks" && <Task />}
          </div>
          </div>
          <div className=" p-10">
            {/* Skill */}
            <div className="">
              <h1 className=" text-xl font-bold mb-5">Skills</h1>
              <span className=" text-sm mr-2 font-bold">
                {" "}
                <span className=" bg-blue-200 px-2 rounded-md text-blue-700">
                  Photoshop
                </span>
              </span>
              <span className=" text-sm mr-2 font-bold">
                {" "}
                <span className=" bg-blue-200 px-2 rounded-md text-blue-700">
                  Illustructor
                </span>
              </span>
              <span className=" text-sm mr-2 font-bold">
                {" "}
                <span className=" bg-blue-200 px-2 rounded-md text-blue-700">
                  Html
                </span>
              </span>
              <span className=" text-sm mr-2 font-bold">
                {" "}
                <span className=" bg-blue-200 px-2 rounded-md text-blue-700">
                  Css
                </span>
              </span>
              <span className=" text-sm mr-2 font-bold">
                {" "}
                <span className=" bg-blue-200 px-2 rounded-md text-blue-700">
                  JavaScript
                </span>
              </span>
              <span className=" text-sm mr-2 font-bold">
                {" "}
                <span className=" bg-blue-200 px-2 rounded-md text-blue-700">
                  Php
                </span>
              </span>
              <span className=" text-sm mr-2 font-bold">
                {" "}
                <span className=" bg-blue-200 px-2 rounded-md text-blue-700">
                  Python
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
// bg-[#F5F8F9]
