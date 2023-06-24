// import React from 'react'
import {RiMenu2Line} from 'react-icons/ri'
import {BsChevronDown, BsChevronUp} from 'react-icons/bs'
import { useState } from 'react'

const Sidebar = ({isSidebarOpen,setSidebarOpen}) => {
  const [arrow,setArrow] = useState(true)
  console.log(arrow)
  const [user,setUser]  = useState({
    id : 4,
    name : 'Reporting',
    firstName : 'E',
    team : "Team Reporting"
  });
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
    <div className=''>
      {/* Sidebar */}
      <div className="">
        {/* Sidebar Brand */}
        <div className=" justify-between items-center px-5 py-8 hidden xl:flex">
          <a href="" className=''>
            <span className=''>
              <img className=' w-[104px]' src="https://themesdesign.in/tocly/layouts/assets/images/logo-light.png" alt="" />
            </span>
          </a>
          <button onClick={() => setSidebarOpen(false)} className=" text-white text-3xl font-bold">
           <RiMenu2Line />
          </button>
        </div>
    {/* User Dropdown */}
      <div className="">
        <button className="dropdown px-5 py-1 mt-2 w-full ">
          <div className=" bg-[#308A9B]">
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
          </div>
          <ul className=" dropdown-content z-[1] rounded bg-white w-[270px] menu">
          {userData?.map(user => (       
            <li onClick={() => setUser(user)} key={user?.id}>
              <div className="flex justify-between items-center text-white">
                <div className="flex">
                  <div className="border rounded-full bg-[#0C768A] h-10 flex items-center">
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
          <h1 className=' text-lg mb-2 text-[#0C768A]'>View More ...</h1>
          </ul>
        </button>
       </div>
      {/* Menu Section */}
      <div className="">
        <div className=" ml-6 my-5">
          <h1 className=' text-[#86BBC5] font-bold'>Menu</h1>
        </div>
        <div className="">

          <div className=" flex justify-between items-center px-7 mb-">
            <a href="/" className=' flex items-center mt-2'>
            <span className=' text-2xl mr-2' ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em"><rect width="20" height="15" x="2" y="3" rx="3" className='' fill='#86BBC5'></rect><path d="M16,21H8a.99992.99992,0,0,1-.832-1.55469l4-6a1.03785,1.03785,0,0,1,1.66406,0l4,6A.99992.99992,0,0,1,16,21Z" fill='white'></path></svg></span>
            <h1 className=' text-white text-[18px]'>Dashboard</h1>
            </a>
            <span className=' badge badge-accent text-white font-bold mt-3'>3</span>
          </div>
            {/* App */}
          <div className="collapse">
            <input type="checkbox" /> 
            <div className="collapse-title ">
                <div className=" flex justify-between items-center px-3 w-[300px]">
                <a href="/" className=' flex items-center mt-2'>
                <span className=' text-2xl mr-2' ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em"><path d="M17,13H7a1,1,0,0,1,0-2H17a1,1,0,0,1,0,2Z" fill='white'></path><path fill='#86BBC5' d="M12,2A10.00082,10.00082,0,0,0,4.25684,18.3291L2.293,20.293A.99991.99991,0,0,0,3,22h9A10,10,0,0,0,12,2ZM9,7h6a1,1,0,0,1,0,2H9A1,1,0,0,1,9,7Zm6,10H9a1,1,0,0,1,0-2h6a1,1,0,0,1,0,2Zm2-4H7a1,1,0,0,1,0-2H17a1,1,0,0,1,0,2Z"></path><path fill='white' d="M15 17H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zM15 9H9A1 1 0 0 1 9 7h6a1 1 0 0 1 0 2z"></path></svg></span>
                <h1 className=' text-stone-200 text-[18px]'>Apps</h1>
                </a>
            <span className=' mt-3 text-white mr-7'> <BsChevronDown /> </span>
              </div>
            </div>
            <div className="collapse-content"> 
              <ul className='text-[18px]'>
                <li className='collapse'>
                  <input type="checkbox" />
                  <div className=" collapse-title flex justify-between">
                    <h1 className=' text-stone-200 ml-6'>Email</h1>
                    <span className=' mt-1 text-white mr-10'><BsChevronDown /> </span>
                  </div>
                  <div className="collapse-content ml-10">
                    <h1 className=' text-stone-200'>Inbox</h1>
                    <h1 className=' text-stone-200 mt-2'>Read Email</h1>
                  </div>
                </li>
                <li className=' text-stone-200 ml-10 mb-3'>Calender</li>
                <li className=' text-stone-200 ml-10 mb-3'>Chat</li>
                <li className=' text-stone-200 ml-10 mb-3'>FileManager</li>
                <li className=' text-stone-200 ml-10'>Invoice</li>
                <li className='collapse'>
                  <input type="checkbox" />
                  <div className=" collapse-title flex justify-between">
                    <h1 className=' text-stone-200 ml-6'>User</h1>
                    <span className=' mt-1 text-white mr-10'><BsChevronDown /> </span>
                  </div>
                  <div className="collapse-content ml-10">
                    <h1 className=' text-stone-200'>User List</h1>
                    <h1 className=' text-stone-200 mt-2'>Userr Details</h1>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* layout */}
          <div className="collapse">
            <input type="checkbox" /> 
            <div className="collapse-title ">
                <div className=" flex justify-between items-center px-3 w-[300px]">
                <a href="/" className=' flex items-center'>
                <span className=' text-xl mr-2' ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em"><polygon points="22 11 10 11 10 2 8 2 8 11 8 11 8 13 8 13 8 22 10 22 10 13 22 13 22 11"></polygon><path fill='white' d="M3,2H8A0,0,0,0,1,8,2V22a0,0,0,0,1,0,0H3a1,1,0,0,1-1-1V3A1,1,0,0,1,3,2Z"></path><path fill='#86BBC5' d="M10 2H21a1 1 0 0 1 1 1v8a0 0 0 0 1 0 0H10a0 0 0 0 1 0 0V2A0 0 0 0 1 10 2zM10 13H22a0 0 0 0 1 0 0v8a1 1 0 0 1-1 1H10a0 0 0 0 1 0 0V13A0 0 0 0 1 10 13z"></path></svg></span>
                <h1 className=' text-stone-200 text-[18px]'>Layouts</h1>
                </a>
            <span className=' mt-3 text-white mr-7'> <BsChevronDown /> </span>
              </div>
            </div>
            <div className="collapse-content"> 
              <ul className='text-[18px] text-stone-200 ml-10'>
               <li className=''>
                  <h1 className=' mb-2'>Vartical</h1>
                </li>
                <li className=''>
                    <h1>Horinzontal</h1>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      </div>
    </div>
  )
}

export default Sidebar

