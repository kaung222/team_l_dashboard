// import React from 'react'
import {RiMenu2Line} from 'react-icons/ri'
import {BsChevronDown} from 'react-icons/bs'
import { useState } from 'react'

const Sidebar = () => {
  const [user,setUser]  = useState({
    id : 4,
    name : 'Reporting',
    firstName : 'E',
    team : "Team Reporting"
  });
  console.log(user)
  const userData = [
    {
      id : 1,
      name : 'CRM',
      firstName : 'C',
      team : "Designer Team"
    },
    {
      id : 2,
      name : 'Application Design',
      firstName : 'A',
      team : "Flutter Devs"
    },
    {
      id : 3,
      name : 'Ecomerce',
      firstName : 'E',
      team : "Developer Team"
    },
    {
      id : 4,
      name : 'Reporting',
      firstName : 'E',
      team : "Team Reporting"
    }
  ]
  return (
    <div>
      {/* Sidebar */}
      <div className="">
        {/* Sidebar Brand */}
        <div className=" justify-between items-center px-5 py-8 hidden xl:flex">
          <a href="" className=''>
            <span className=''>
              <img className=' w-[104px]' src="https://themesdesign.in/tocly/layouts/assets/images/logo-light.png" alt="" />
            </span>
          </a>
          <button className=" text-white text-3xl font-bold">
           <RiMenu2Line />
          </button>
        </div>
    {/* User Dropdown */}
      <div className="">
        <button className="dropdown px-5 py-1 w-full ">
          <summary className=" bg-[#308A9B]">
            <div className=" flex justify-between items-center  text-white p-3">
              <div className=" flex">
                <div className="border rounded-full bg-[#F2F6F7] h-10 flex items-center mt-2">
                    <div className=' p-4 text-xl font-bold text-[#0C768A]'>{user?.firstName}</div>
                </div>
                <div className=" ml-2 text-left justify-center">
                  <div className=' font-bold text-lg'>{user?.name}</div>
                  <div className=' text-[#C1DCE1]'>{user?.team}</div>
                </div>
              </div>
              <div className="">
                <BsChevronDown />
              </div>
            </div>
          </summary>
          <ul className=" dropdown-content z-[1] rounded bg-white w-[270px]">
          {userData?.map(user => (       
            <li onClick={() => setUser(user)} key={user?.id}>
              <div className="flex justify-between items-center text-white p-3">
                <div className="flex">
                  <div className="border rounded-full bg-[#0C768A] h-10 flex items-center mt-2">
                    <div className="p-4 text-xl font-bold text-[#F2F6F7]">{user?.firstName}</div>
                  </div>
                  <div className="ml-2 text-left justify-center">
                    <div className="font-bold text-lg text-[#0C768A]">{user?.name}</div>
                    <div className="text-[#A8A8AF]">{user?.team}</div>
                  </div>
                </div>
              </div>
            </li>
          ))}
          </ul>
        </button>
       </div>



      </div>
    </div>
  )
}

export default Sidebar

