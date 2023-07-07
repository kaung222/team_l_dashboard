// import React from 'react'
import {RiMenu2Line} from 'react-icons/ri'
import { motion } from 'framer-motion'
import {BsChevronDown } from 'react-icons/bs'
import {AiFillLock} from 'react-icons/ai'
import {RiWallet3Fill} from 'react-icons/ri'
import {BiDotsVerticalRounded,BiMessageDetail} from 'react-icons/bi'
import {MdAccountCircle} from 'react-icons/md'
import {FiLifeBuoy,FiSettings} from 'react-icons/fi'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './ScrollBarStyles.css';

// eslint-disable-next-line react/prop-types, no-unused-vars
const Sidebar = ({isSidebarOpen,setSidebarOpen}) => {
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
    <motion.div
    className=' text-black'>
      {/* Sidebar */}
      <div className="">
        {/* Sidebar Brand */}
        <div className=" justify-between items-center px-5 py-8 flex">
        <Link to={'/'}>
          <a href="" className=''>
            <span className=''>
              <img className=' w-[104px]' src="https://themesdesign.in/tocly/layouts/assets/images/logo-light.png" alt="" />
            </span>
          </a>
        </Link>
          <button onClick={() => setSidebarOpen(false)} className=" text-white text-3xl font-bold">
           <RiMenu2Line />
          </button>
        </div>
    {/* User Dropdown */}
      <div className=" hidden md:block">
        <button className="dropdown px-5 py-1 mt-2 w-full ">
          <div className=" bg-[#F7F5EF] rounded-md">
            <div className=" flex justify-between items-center  text-black p-3">
              <div className=" flex">
                <div className="border rounded-full bg-[#F7F5EF] h-10 flex items-center mt-2">
                    <div className=' p-4 text-xl font-bold text-[#0C768A]'>{user?.firstName}</div>
                </div>
                <div className=" ml-2 text-left justify-center">
                  <div className=' font-bold text-md'>{user?.name}</div>
                  <div className=' text-[#C1DCE1]'>{user?.team}</div>
                </div>
              </div>
              <div className="">
                <BsChevronDown />
              </div>
            </div>
          </div>
          <ul className=" dropdown-content z-[1] rounded bg-white w-[260px] menu">
          {userData?.map(user => (       
            <li onClick={() => setUser(user)} key={user?.id}>
              <div className="flex justify-between items-center text-white">
                <div className="flex">
                  <div className="border rounded-full bg-[#0C768A] h-10 flex items-center">
                    <div className="p-3 text-xl font-bold text-[#F2F6F7]">{user?.firstName}</div>
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
          <h1 className=' text-[#86BBC5] font-bold'>MENU</h1>
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
          <div className="collapse mt-1">
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

       {/* Pages */}
       <div className="">
        <div className=" ml-6 mt-1">
          <h1 className=' text-[#86BBC5] font-bold'>PAGES</h1>
        </div>
        {/* authentication */}
        <div className="collapse">
            <input type="checkbox" /> 
            <div className="collapse-title ">
                <div className=" flex justify-between items-center px-3 w-[300px]">
                <a href="/" className=' flex items-center'>
                <span className=' text-xl mr-2' ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em"><path fill='white' d="M21,12c0-.34-.02-.67-.05-1H12.5V9.5a.99991.99991,0,0,0-1.707-.707l-2.5,2.5a.99962.99962,0,0,0,0,1.41406l2.5,2.5A.99991.99991,0,0,0,12.5,14.5V13h8.45C20.98,12.67,21,12.34,21,12Z"></path><path fill='#86BBC5' d="M12.5,13v1.5a.99989.99989,0,0,1-1.707.707l-2.5-2.5a.99962.99962,0,0,1,0-1.41406l2.5-2.5A.99991.99991,0,0,1,12.5,9.5V11h8.44952a10,10,0,1,0,0,2Z"></path></svg></span>
                <h1 className=' text-stone-200 text-[18px]'>Authentication</h1>
                </a>
            <span className=' mt-3 text-white mr-7'> <BsChevronDown /> </span>
              </div>
            </div>
            <div className="collapse-content"> 
              <ul className='text-[18px] text-stone-200 ml-10 flex flex-col gap-5'>
                <Link to={'/login'}>
                <li className=''>
                    <h1 className=''>Login</h1>
                  </li>
                </Link>
                <Link to={'/register'}>
                  <li className=''>
                    <h1 className=''>Register</h1>
                  </li>
                </Link>
                <li className=''>
                  <h1 className=''>Recover Password</h1>
                </li>
                <li className=''>
                    <h1>Lock screen</h1>
                </li>
              </ul>
            </div>
          </div>
          {/* ExtraPages */}
          <div className="collapse">
            <input type="checkbox" /> 
            <div className="collapse-title ">
                <div className=" flex justify-between items-center px-3 w-[300px]">
                <a href="/" className=' flex items-center'>
                <span className=' text-xl mr-2' ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em"><path fill='white' d="M21,12c0-.34-.02-.67-.05-1H12.5V9.5a.99991.99991,0,0,0-1.707-.707l-2.5,2.5a.99962.99962,0,0,0,0,1.41406l2.5,2.5A.99991.99991,0,0,0,12.5,14.5V13h8.45C20.98,12.67,21,12.34,21,12Z"></path><path fill='#86BBC5' d="M12.5,13v1.5a.99989.99989,0,0,1-1.707.707l-2.5-2.5a.99962.99962,0,0,1,0-1.41406l2.5-2.5A.99991.99991,0,0,1,12.5,9.5V11h8.44952a10,10,0,1,0,0,2Z"></path></svg></span>
                <h1 className=' text-stone-200 text-[18px]'>Extra Pages</h1>
                </a>
            <span className=' mt-3 text-white mr-7'> <BsChevronDown /> </span>
              </div>
            </div>
            <div className="collapse-content"> 
              <ul className='text-[18px] text-stone-200 ml-10 flex flex-col gap-5'>
                <li className=''>
                  <h1 className=''>Stater Page</h1>
                </li>
                <li className=''>
                    <h1>Coming Soon</h1>
                </li>
                <li className=''>
                  <h1 className=''>Maintainance</h1>
                </li>
                <li className=''>
                    <h1>Error 404</h1>
                </li>
                <li className=''>
                  <h1 className=''>[Help Center] FAQ</h1>
                </li>
                <Link to={'/profile'}>
                <li className=''>
                    <h1>Profile</h1>
                </li>
                </Link>
                <li className=''>
                  <h1 className=''>Pricing</h1>
                </li>
                <li className=''>
                    <h1>Terms and Conditions</h1>
                </li>
              </ul>
            </div>
          </div>
       </div>

      {/* Components */}
      <div className=" mb-40">
      <div className=" ml-6 mt-2">
          <h1 className=' text-[#86BBC5] font-bold'>COMPONENTS</h1>
      </div>
      <div className=" flex justify-between items-center px-7 mt-3">
            <a href="/" className=' flex items-center mt-2'>
            <span className=' text-2xl mr-2' ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em"><path  fill='#86BBC5' d="M12,14.19531a1.00211,1.00211,0,0,1-.5-.13379l-9-5.19726a1.00032,1.00032,0,0,1,0-1.73242l9-5.19336a1.00435,1.00435,0,0,1,1,0l9,5.19336a1.00032,1.00032,0,0,1,0,1.73242l-9,5.19726A1.00211,1.00211,0,0,1,12,14.19531Z"></path><path fill='#86BBC5' d="M21.5,11.13184,19.53589,9.99847,12.5,14.06152a1.0012,1.0012,0,0,1-1,0L4.46411,9.99847,2.5,11.13184a1.00032,1.00032,0,0,0,0,1.73242l9,5.19726a1.0012,1.0012,0,0,0,1,0l9-5.19726a1.00032,1.00032,0,0,0,0-1.73242Z"></path><path fill='white' d="M21.5,15.13184l-1.96411-1.13337L12.5,18.06152a1.0012,1.0012,0,0,1-1,0L4.46411,13.99847,2.5,15.13184a1.00032,1.00032,0,0,0,0,1.73242l9,5.19726a1.0012,1.0012,0,0,0,1,0l9-5.19726a1.00032,1.00032,0,0,0,0-1.73242Z"></path></svg></span>
            <h1 className=' text-white text-[18px]'>UI Elements</h1>
            </a>
      </div>
      <div className=" flex justify-between items-center px-7 mt-3">
            <a href="/" className=' flex items-center mt-2'>
            <span className=' text-2xl mr-2' ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em"><path  fill='#86BBC5' d="M21 8H13a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2zM21 12H13a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2z"></path><rect width="8" height="8" x="2" y="4"  fill='white' rx="1"></rect><path  fill='#86BBC5' d="M21 16H3a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2zM13 20H3a1 1 0 0 1 0-2H13a1 1 0 0 1 0 2z"></path></svg></span>
            <h1 className=' text-white text-[18px]'>Forms</h1>
            </a>
            <span className=' badge badge-error text-white font-bold mt-5'>3</span>
      </div>
      <div className=" flex justify-between items-center px-7 mt-5">
            <a href="/" className=' flex items-center mt-2'>
            <span className=' text-2xl mr-2' ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em"><path fill='white' d="M21,22H3a.99974.99974,0,0,1-1-1V3A.99974.99974,0,0,1,3,2H21a.99974.99974,0,0,1,1,1V21A.99974.99974,0,0,1,21,22ZM4,20H20V4H4Z"></path><path fill='white' d="M9 22a.99974.99974 0 0 1-1-1V3a1 1 0 0 1 2 0V21A.99974.99974 0 0 1 9 22zM15 22a.99974.99974 0 0 1-1-1V3a1 1 0 0 1 2 0V21A.99974.99974 0 0 1 15 22z"></path><path fill='white' d="M21 10H3A1 1 0 0 1 3 8H21a1 1 0 0 1 0 2zM21 16H3a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2z"></path></svg></span>
            <h1 className=' text-white text-[18px]'>Tables</h1>
            </a>
            
      </div>
      <div className=" flex justify-between items-center px-7 mt-5">
            <a href="/" className=' flex items-center mt-2'>
            <span className=' text-2xl mr-2' ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em"><path fill='#86BBC5' d="M12,12V2A10,10,0,0,1,22,12Z"></path><path fill='#86BBC5' d="M12,12l5,8.66022A10.01081,10.01081,0,0,0,22,12Z"></path><path fill='white' d="M17,20.66022,12,12V2a10,10,0,1,0,5.00085,18.66168l.00336-.00427Z"></path></svg></span>
            <h1 className=' text-white text-[18px]'>Charts</h1>
            </a>
            
      </div>
      <div className=" flex justify-between items-center px-7 mt-5">
            <a href="/" className=' flex items-center mt-2'>
            <span className=' text-2xl mr-2' ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em"><rect width="20" height="15" x="2" y="3" rx="3" className='' fill='#86BBC5'></rect><path d="M16,21H8a.99992.99992,0,0,1-.832-1.55469l4-6a1.03785,1.03785,0,0,1,1.66406,0l4,6A.99992.99992,0,0,1,16,21Z" fill='white'></path></svg></span>
            <h1 className=' text-white text-[18px]'>Icons</h1>
            </a>
            
      </div>
      <div className=" flex justify-between items-center px-7 mt-5">
            <a href="/" className=' flex items-center mt-2'>
            <span className=' text-2xl mr-2' ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em"><path fill='white' d="M15,11H13V9a1,1,0,0,0-2,0v2H9a1,1,0,0,0,0,2h2v2a1,1,0,0,0,2,0V13h2a1,1,0,0,0,0-2Z"></path><path fill='#86BBC5' d="M12,2A10.00082,10.00082,0,0,0,4.25684,18.3291L2.293,20.293A.99991.99991,0,0,0,3,22h9A10,10,0,0,0,12,2Zm3,11H13v2a1,1,0,0,1-2,0V13H9a1,1,0,0,1,0-2h2V9a1,1,0,0,1,2,0v2h2a1,1,0,0,1,0,2Z"></path></svg></span>
            <h1 className=' text-white text-[18px]'>Maps</h1>
            </a>
            
      </div>
      
      </div>
        
        {/* Steven Deese */}
      <div className=" fixed bottom-0 ">
      <button className="dropdown dropdown-top dropdown-end w-[250px] md:w-[290px] h-20 bg-[#0C768A]">
        <div  className=" ml-5 mt-5 mb-2">
            <div className=" flex items-center justify-between">
              <img width={'50px'} height={'42px'} className=' rounded-full border-white border-4 pointer-events-none' src="https://themesdesign.in/tocly/layouts/assets/images/users/avatar-2.jpg" alt="" />
              <h1 className=' text-white text-xl mr-10'>Steven Deese</h1>
              <BiDotsVerticalRounded className=' text-xl text-white' />
            </div>
        </div>
        <ul  className="dropdown-content z-[1] menu p-3 shadow bg-base-100 rounded-md w-[250px]">
          <Link to={'/profile'}>
          <li>
            <div className=" text-lg text-stone-500">
              <MdAccountCircle className=' text-xl' />
              <h1>Profile</h1>
            </div>
          </li>
          </Link>
          <li>
            <div className=" text-lg text-stone-500">
              <BiMessageDetail className=' text-xl' />
              <h1>Messages</h1>
            </div>
          </li>
          <li>
            <div className=" text-lg text-stone-500 mb-4">
              <FiLifeBuoy className=' text-xl' />
              <h1>Helps</h1>
            </div>
          </li>
          <li>
            <div className=" text-lg text-stone-500">
              <RiWallet3Fill className=' text-xl' />
              <h1>Balance :</h1>
              <span className=' mr-3 text-black text-[17px] font-bold'>$5971.67</span>
            </div>
          </li>
          <li>
            <div className=" text-lg text-stone-500">
              <FiSettings className=' text-xl' />
              <h1>Setting :</h1>
              <span className='bg-stone-500 text-sm rounded-lg px-2 text-white'>New</span>
            </div>
          </li>
          <li>
            <div className=" text-lg text-stone-500">
              <AiFillLock className=' text-xl' />
              <h1>Lock Screen</h1>
            </div>
          </li>
        </ul>
      </button>
      </div>

      </div>
    </motion.div>
  )
}

export default Sidebar

