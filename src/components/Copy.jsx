import HalfDonut from "./HalfDonut";
import { AiOutlineArrowUp } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { HiArrowTrendingUp, HiMiniArrowTrendingUp} from 'react-icons/hi2';
import { HiArrowTrendingDown } from 'react-icons/hi2';
import {  BsThreeDotsVertical } from 'react-icons/bs';
import Drop from "./Drop";
import SaleDrop from "./SaleDrop";
import TopDrop from "./TopDrop";



const Copy = () => {
  return (
    <>
      
    <div className=" bg-gray-100 flex-wrap flex justify-center  sm:justify-around sm:ml-[252px] ">

{/* Source of Purcases */}
{/* title */}
<div className='block bg-white  sm:w-[290px] sm:h-[456px] sm:ml-[21px] sm:mr-[24px]  sm:mt-[19px] 
mx-4 w-[326px] justify-center'>
  <div className="mt-[17px] flex">
    <div className="className='rubik-500  font-semibold text-16 text-gray-700 ml-[17px]   w-20">
      <div className="text-[#47484a]  sm:w-[80px] w-[172px] mt-3" >Source of Purchases </div>
      
    </div>
    <div className=" mt-[12px] flex sm:w-[190px] sm:ml-7 w-[210px] ml-[90px]">
      <div className='font-semibold text-sm text-gray-700 mt-[3px] sm:ml-9'>Sort By:</div>

      {/* dropdown */}

      <div className="font-normal text-[#83838d] text-sm mt-[3px] ">Yearly</div>
      <div className="mr-[14px] mt-[4px]"><Drop /></div>


    </div>
  </div>

  {/* half donut */}
  <div className="h-[65vh] flex justify-center items-center flex-col">
    <HalfDonut />
    {/* text */}
    <div className="text-sm text-gray-700 font-normal">
      <p >Magnis dis parturient montes </p>
      <p className="ml-[6px]">nascetur ridiculus tincidunt </p>
      <p className="ml-[70px]">lobortis.</p>
    </div>

    {/* 3box */}
    <div className="flex mt-[27px] gap-[17px]">
      {/* box1 */}
      <div>
        <div className="flex">
          <div className="h-[7px] w-[57px] bg-[#0c768a] rounded-l-full"></div>
          <div className="h-[7px] w-[9px] bg-slate-100 rounded-r-full"></div>
        </div>
        <div className="font-normal text-xs mt-[18px] ">E-COMMER...</div>
        <div className="font-semibold text-xl mt-[8px] text-[#4B5563]">52,524</div>
      </div>
      {/*box2*/}
      <div>
        <div className="flex">
          <div className="h-[7px] w-[51px] bg-[#38c786] rounded-l-full"></div>
          <div className="h-[7px] w-[24px] bg-slate-100 rounded-r-full"></div>
        </div>
        <div className="font-normal text-xs mt-[18px] ">FACEBOOK</div>
        <div className="font-semibold text-xl mt-[8px] text-[#4B5563]">52,524</div>
      </div>
      {/* box3 */}
      <div>
        <div className="flex">
          <div className="h-[7px] w-[44px] bg-[#F4BA40] rounded-l-full"></div>
          <div className="h-[7px] w-[29px] bg-slate-100 rounded-r-full"></div>
        </div>
        <div className="font-normal text-xs mt-[18px] ">INSTAGRA...</div>
        <div className="font-semibold text-xl mt-[8px] text-[#4B5563]">52,524</div>
      </div>

    </div>
  </div>





</div>

{/* Sales Statistics */} 
<div className="block bg-white sm:w-[290px] sm:h-[476px] sm:mt-[19px]
 w-[329px] h-[423px] mt-[19px]  justify-center">
  <div className="    flex ">
    <div className="className='rubik-500  font-semibold text-16  text-gray-700 ml-[17px] w-[144px] mt-[18px]">Sales Statistics</div>

    <div className="font-normal text-[#83838d] text-sm sm:ml-[30px] mt-[19px] ml-16">Today</div>
    <div className="mt-[21px]">< SaleDrop /></div>
  </div>

  <div className="mt-[25px] ml-[17px] font-bold text-xl  text-[#4B5563]">725,800
  </div>

  <div className="  flex ml-[17px]">

    <div className="text-green-500 text-xs mt-[12px] bg-green-200 rounded-l "><AiOutlineArrowUp /></div>
    <div className="text-green-500 text-xs mt-[12px] bg-green-200 rounded-r ">15.72%</div>
    <div className="text-sm text-gray-700 font-normal mt-[10px] ml-2">vs.previous month</div>
  </div>

  {/* block */}
  <div className="flex ml-[17px] mt-[22px]">
    <div className="h-[14px] w-[124px] bg-[#0c768a] rounded-l-full"></div>
    <div className="h-[14px] w-[66px] bg-[#38c786]"></div>
    <div className="h-[14px] w-[68px] bg-[#daeaee] rounded-r-full"></div>
  </div>

  {/* table */}

  <div className="overflow-x-scroll w-[259px] h-[193px] mt-[12px] ml-[17px]">
    <style>
      {`
       .overflow-x-scroll::-webkit-scrollbar {
        width: 176px;
            height: 6px;
       }

     .overflow-x-scroll::-webkit-scrollbar-track {
     background: transparent;
       }

    .overflow-x-scroll::-webkit-scrollbar-thumb {
     background: #d4d4d4;
     border-radius: 4px;
     }

   .overflow-x-scroll::-webkit-scrollbar-thumb:hover {
     background: #a8a8a8;
    }

  .overflow-x-scroll::-webkit-scrollbar-corner {
     background: transparent;
    }
`}
    </style>
    <table className="min-w-full text-left text-sm font-light">
      <thead className="border-b font-medium dark:border-neutral-500">
        <tr>
          <th scope="col" className="px-6 py-4">Order Status</th>
          <th scope="col" className="px-6 py-4">Orders</th>
          <th scope="col" className="px-6 py-4">Returns</th>
          <th scope="col" className="px-6 py-4">Earnings</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b dark:border-neutral-500">
          <td className="whitespace-nowrap px-6 py-2 font-medium">Product Pending</td>
          <td className="whitespace-nowrap px-6 py-2">17,351</td>
          <td className="whitespace-nowrap px-6 py-2">2,123</td>
          <td className="whitespace-nowrap px-6 py-2">45.3%</td>
        </tr>
        <tr className="border-b dark:border-neutral-500">
          <td className="whitespace-nowrap px-6 py-2 font-medium">Product Cancelled</td>
          <td className="whitespace-nowrap px-6 py-2">67,356</td>
          <td className="whitespace-nowrap px-6 py-2">3,652</td>
          <td className="whitespace-nowrap px-6 py-2">14.6%</td>
        </tr>
        <tr className="border-b dark:border-neutral-500">
          <td className="whitespace-nowrap px-6 py-2 font-medium">Product Delivered</td>
          <td className="whitespace-nowrap px-6 py-2">67,356</td>
          <td className="whitespace-nowrap px-6 py-2">3,652</td>
          <td className="whitespace-nowrap px-6 py-2">14.6%</td>
        </tr>
      </tbody>
    </table>
  </div>


  <div className="bg-[#0C768A] w-[97px] rounded h-[30px] flex sm:mt-[22px] ml-[98px] text-sm font-normal mt-[15px]">
    <div className="text-white text-xs mt-[7px] ml-[5px]">View More</div>
    <div className="text-white mt-[8px] ml-2 "><AiOutlineArrowRight /></div>
  </div>

</div>

{/* Top Users */}
<div className="sm:block hidden bg-white w-[424px] h-[476px] mt-[19px]">
  {/* title */}
  <div className="flex mt-[18px] ml-[17px]">
    <div className="font-semibold text-16 text-gray-700">Top Users</div>
    <div className="ml-[195px] font-semibold text-sm  text-gray-700">Sort By:</div>
    <div className="font-normal text-[#83838d] text-sm">yearly</div>
    <div className="mt-[3px]"><TopDrop /></div>
  </div>




  {/* overflow */}
  <div className="overflow-scroll  h-[357px] w-[390px]  mt-[10px] ml-[17px] ">
    <style>
      {`
.overflow-scroll::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.overflow-scroll::-webkit-scrollbar-track {
  background: transparent;
}

.overflow-scroll::-webkit-scrollbar-thumb {
  background: #d4d4d4;
  border-radius: 4px;
}

.overflow-scroll::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

.overflow-scroll::-webkit-scrollbar-corner {
  background: transparent;
}

.overflow-scroll::-webkit-scrollbar-button {
  display: none;
}
`}
    </style>


    <table className="min-w-full text-left text-sm font-light">

      <tbody className="">
        {/* 1 */}
        <tr className="border-b dark:border-neutral-500">
          <td className="whitespace-nowrap  py-3  flex justify-center items-center font-medium"><img className="rounded-full mx-10 w-[45px] h-[45px]" src="https://themesdesign.in/tocly/layouts/assets/images/users/avatar-4.jpg" /></td>

          <td className="whitespace-nowrap px-2 py-3"><div>

            <div className="font-semibold text-slate-600 text-sm">Glenn Holden</div>
            <div className="font-normal text-sm text-slate-400">glennholden@tocly.com</div>
          </div></td>
          <td className="whitespace-nowrap px-2 py-2">

            <div className="flex gap-2"> <div className="mt-0 text-green-300 text-lg"><HiArrowTrendingUp /></div>
              <div className="font-medium text-sm text-slate-400">$250.00</div></div>
          </td>
          <td className="whitespace-nowrap px-6 py-2"><div className="bg-red-200 text-xs flex justify-center rounded text-red-500">Cancel</div></td>
          <td className="whitespace-nowrap px-3 py-2"><BsThreeDotsVertical /></td>
        </tr>

        {/* 2 */}
        <tr className="border-b dark:border-neutral-500">
          <td className="whitespace-nowrap  py-3  flex justify-center items-center font-medium"><img className="rounded-full mx-10 w-[45px] h-[45px]" src="https://themesdesign.in/tocly/layouts/assets/images/users/avatar-5.jpg" /></td>

          <td className="whitespace-nowrap px-2 py-3"><div>

            <div className="font-semibold text-slate-600 text-sm">Lolita Hamill</div>
            <div className="font-normal text-sm text-slate-400">lolitahamill@tocly.com</div>
          </div></td>
          <td className="whitespace-nowrap px-2 py-2">

            <div className="flex gap-2"> <div className="mt-0 text-red-300 text-lg"><HiArrowTrendingDown /></div>
              <div className="font-medium text-sm text-slate-400">$110.00</div></div>
          </td>
          <td className="whitespace-nowrap px-6 py-2"><div className="bg-green-200 text-xs flex justify-center rounded text-green-500">Success</div></td>
          <td className="whitespace-nowrap px-3 py-2"><BsThreeDotsVertical /></td>
        </tr>

        {/* 3 */}
        <tr className="border-b dark:border-neutral-500">
          <td className="whitespace-nowrap  py-3  flex justify-center items-center font-medium"><img className="rounded-full mx-10 w-[45px] h-[45px]" src="https://themesdesign.in/tocly/layouts/assets/images/users/avatar-6.jpg" /></td>

          <td className="whitespace-nowrap px-2 py-3"><div>

            <div className="font-semibold text-slate-600 text-sm">Robert Mercer</div>
            <div className="font-normal text-sm text-slate-400">robertmercer@tocly.com</div>
          </div></td>
          <td className="whitespace-nowrap px-2 py-2">

            <div className="flex gap-2"> <div className="mt-0 text-green-300 text-lg"><HiMiniArrowTrendingUp /></div>
              <div className="font-medium text-sm text-slate-400">$420.00</div></div>
          </td>
          <td className="whitespace-nowrap px-6 py-2"><div className="bg-blue-200 text-xs flex justify-center rounded text-blue-500">Active</div></td>
          <td className="whitespace-nowrap px-3 py-2"><BsThreeDotsVertical /></td>
        </tr>

        {/* 4 */}
        <tr className="border-b dark:border-neutral-500">
          <td className="whitespace-nowrap  py-3  flex justify-center items-center font-medium"><img className="rounded-full mx-10 w-[45px] h-[45px]" src="https://themesdesign.in/tocly/layouts/assets/images/users/avatar-7.jpg" /></td>

          <td className="whitespace-nowrap px-2 py-3"><div>

            <div className="font-semibold text-slate-600 text-sm">Marie Kim</div>
            <div className="font-normal text-sm text-slate-400">mariekim@tocly.com</div>
          </div></td>
          <td className="whitespace-nowrap px-2 py-2">

            <div className="flex gap-2"> <div className="mt-0 text-red-300 text-lg"><HiArrowTrendingDown /></div>
              <div className="font-medium text-sm text-slate-400">$120.00</div></div>
          </td>
          <td className="whitespace-nowrap px-6 py-2"><div className="bg-orange-200 text-xs flex justify-center rounded text-orange-500">Pending</div></td>
          <td className="whitespace-nowrap px-3 py-2"><BsThreeDotsVertical /></td>
        </tr>

        {/* 5 */}
        <tr className="border-b dark:border-neutral-500">
          <td className="whitespace-nowrap  py-3  flex justify-center items-center font-medium"><img className="rounded-full mx-10 w-[45px] h-[45px]" src="https://themesdesign.in/tocly/layouts/assets/images/users/avatar-8.jpg" /></td>

          <td className="whitespace-nowrap px-2 py-3"><div>

            <div className="font-semibold text-slate-600 text-sm">
              Sonya Henshaw</div>
            <div className="font-normal text-sm text-slate-400">sonyahenshaw@tocly.com</div>
          </div></td>
          <td className="whitespace-nowrap px-2 py-2">

            <div className="flex gap-2"> <div className="mt-0 text-green-300 text-lg"><HiMiniArrowTrendingUp /></div>
              <div className="font-medium text-sm text-slate-400">$112.00</div></div>
          </td>
          <td className="whitespace-nowrap px-6 py-2"><div className="bg-blue-200 text-xs flex justify-center rounded text-blue-500">Active</div></td>
          <td className="whitespace-nowrap px-3 py-2"><BsThreeDotsVertical /></td>
        </tr>

        {/* 6 */}
        <tr className="border-b dark:border-neutral-500">
          <td className="whitespace-nowrap  py-3  flex justify-center items-center font-medium"><img className="rounded-full mx-10 w-[45px] h-[45px]" src="https://themesdesign.in/tocly/layouts/assets/images/users/avatar-2.jpg" /></td>

          <td className="whitespace-nowrap px-2 py-3"><div>

            <div className="font-semibold text-slate-600 text-sm">Marie Kim</div>
            <div className="font-normal text-sm text-slate-400">marikim@tocly.com</div>
          </div></td>
          <td className="whitespace-nowrap px-2 py-2">

            <div className="flex gap-2"> <div className="mt-0 text-red-300 text-lg"><HiArrowTrendingDown /></div>
              <div className="font-medium text-sm text-slate-400">$120.00</div></div>
          </td>
          <td className="whitespace-nowrap px-6 py-2"><div className="bg-green-200 text-xs flex justify-center rounded text-green-500">Success</div></td>
          <td className="whitespace-nowrap px-3 py-2"><BsThreeDotsVertical /></td>
        </tr>
        {/* 7 */}
        <tr className="border-b dark:border-neutral-500">
          <td className="whitespace-nowrap  py-3  flex justify-center items-center font-medium"><img className="rounded-full mx-10 w-[45px] h-[45px]" src="https://themesdesign.in/tocly/layouts/assets/images/users/avatar-1.jpg" /></td>

          <td className="whitespace-nowrap px-2 py-3"><div>

            <div className="font-semibold text-slate-600 text-sm">
              Sonya Henshaw</div>
            <div className="font-normal text-sm text-slate-400">sonyahenshaw@tocly.com</div>
          </div></td>
          <td className="whitespace-nowrap px-2 py-2">

            <div className="flex gap-2"> <div className="mt-0 text-green-300 text-lg"><HiMiniArrowTrendingUp /></div>
              <div className="font-medium text-sm text-slate-400">$112.00</div></div>
          </td>
          <td className="whitespace-nowrap px-6 py-2"><div className="bg-red-200 text-xs flex justify-center rounded text-red-500">Cancel</div></td>
          <td className="whitespace-nowrap px-3 py-2"><BsThreeDotsVertical /></td>
        </tr>

      </tbody>
    </table>


  </div>

</div>

{/* for mobile top user */}

<div className="sm:hidden bg-white w-[331px] h-[417px] mt-[19px]">
  {/* title */}
  <div className="flex  justify-between px-3 mt-4">
    <div className="font-semibold text-16 text-gray-700 ">Top Users</div>
    <div className="flex">
      <div className="font-semibold text-sm  text-gray-700">Sort By:</div>
      <div className="font-normal text-[#83838d] text-sm">yearly</div>
      <div><TopDrop /></div>
    </div>
  </div>

  {/* overflow */}
  <div className="overflow-scroll  h-[355px] w-[296px]  mt-[10px] ml-[17px] ">
    <style>
      {`
.overflow-scroll::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.overflow-scroll::-webkit-scrollbar-track {
  background: transparent;
}

.overflow-scroll::-webkit-scrollbar-thumb {
  background: #d4d4d4;
  border-radius: 4px;
}

.overflow-scroll::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

.overflow-scroll::-webkit-scrollbar-corner {
  background: transparent;
}

.overflow-scroll::-webkit-scrollbar-button {
  display: none;
}
`}
    </style>


    <table className="min-w-full text-left text-sm font-light">

      <tbody className="">
        {/* 1 */}
        <tr className="border-b dark:border-neutral-500">
          <td className="whitespace-nowrap  py-3  flex justify-center items-center font-medium"><img className="rounded-full mx-10 w-[45px] h-[45px]" src="https://themesdesign.in/tocly/layouts/assets/images/users/avatar-4.jpg" /></td>

          <td className="whitespace-nowrap px-2 py-3"><div>

            <div className="font-semibold text-slate-600 text-sm">Glenn Holden</div>
            <div className="font-normal text-sm text-slate-400">glennholden@tocly.com</div>
          </div></td>
          <td className="whitespace-nowrap px-2 py-2">

            <div className="flex gap-2"> <div className="mt-0 text-green-300 text-lg"><HiArrowTrendingUp /></div>
              <div className="font-medium text-sm text-slate-400">$250.00</div></div>
          </td>
          <td className="whitespace-nowrap px-6 py-2"><div className="bg-red-200 text-xs flex justify-center rounded text-red-500">Cancel</div></td>
          <td className="whitespace-nowrap px-3 py-2"><BsThreeDotsVertical /></td>
        </tr>

        {/* 2 */}
        <tr className="border-b dark:border-neutral-500">
          <td className="whitespace-nowrap  py-3  flex justify-center items-center font-medium"><img className="rounded-full mx-10 w-[45px] h-[45px]" src="https://themesdesign.in/tocly/layouts/assets/images/users/avatar-5.jpg" /></td>

          <td className="whitespace-nowrap px-2 py-3"><div>

            <div className="font-semibold text-slate-600 text-sm">Lolita Hamill</div>
            <div className="font-normal text-sm text-slate-400">lolitahamill@tocly.com</div>
          </div></td>
          <td className="whitespace-nowrap px-2 py-2">

            <div className="flex gap-2"> <div className="mt-0 text-red-300 text-lg"><HiArrowTrendingDown /></div>
              <div className="font-medium text-sm text-slate-400">$110.00</div></div>
          </td>
          <td className="whitespace-nowrap px-6 py-2"><div className="bg-green-200 text-xs flex justify-center rounded text-green-500">Success</div></td>
          <td className="whitespace-nowrap px-3 py-2"><BsThreeDotsVertical /></td>
        </tr>

        {/* 3 */}
        <tr className="border-b dark:border-neutral-500">
          <td className="whitespace-nowrap  py-3  flex justify-center items-center font-medium"><img className="rounded-full mx-10 w-[45px] h-[45px]" src="https://themesdesign.in/tocly/layouts/assets/images/users/avatar-6.jpg" /></td>

          <td className="whitespace-nowrap px-2 py-3"><div>

            <div className="font-semibold text-slate-600 text-sm">Robert Mercer</div>
            <div className="font-normal text-sm text-slate-400">robertmercer@tocly.com</div>
          </div></td>
          <td className="whitespace-nowrap px-2 py-2">

            <div className="flex gap-2"> <div className="mt-0 text-green-300 text-lg"><HiMiniArrowTrendingUp /></div>
              <div className="font-medium text-sm text-slate-400">$420.00</div></div>
          </td>
          <td className="whitespace-nowrap px-6 py-2"><div className="bg-blue-200 text-xs flex justify-center rounded text-blue-500">Active</div></td>
          <td className="whitespace-nowrap px-3 py-2"><BsThreeDotsVertical /></td>
        </tr>

        {/* 4 */}
        <tr className="border-b dark:border-neutral-500">
          <td className="whitespace-nowrap  py-3  flex justify-center items-center font-medium"><img className="rounded-full mx-10 w-[45px] h-[45px]" src="https://themesdesign.in/tocly/layouts/assets/images/users/avatar-7.jpg" /></td>

          <td className="whitespace-nowrap px-2 py-3"><div>

            <div className="font-semibold text-slate-600 text-sm">Marie Kim</div>
            <div className="font-normal text-sm text-slate-400">mariekim@tocly.com</div>
          </div></td>
          <td className="whitespace-nowrap px-2 py-2">

            <div className="flex gap-2"> <div className="mt-0 text-red-300 text-lg"><HiArrowTrendingDown /></div>
              <div className="font-medium text-sm text-slate-400">$120.00</div></div>
          </td>
          <td className="whitespace-nowrap px-6 py-2"><div className="bg-orange-200 text-xs flex justify-center rounded text-orange-500">Pending</div></td>
          <td className="whitespace-nowrap px-3 py-2"><BsThreeDotsVertical /></td>
        </tr>

        {/* 5 */}
        <tr className="border-b dark:border-neutral-500">
          <td className="whitespace-nowrap  py-3  flex justify-center items-center font-medium"><img className="rounded-full mx-10 w-[45px] h-[45px]" src="https://themesdesign.in/tocly/layouts/assets/images/users/avatar-8.jpg" /></td>

          <td className="whitespace-nowrap px-2 py-3"><div>

            <div className="font-semibold text-slate-600 text-sm">
              Sonya Henshaw</div>
            <div className="font-normal text-sm text-slate-400">sonyahenshaw@tocly.com</div>
          </div></td>
          <td className="whitespace-nowrap px-2 py-2">

            <div className="flex gap-2"> <div className="mt-0 text-green-300 text-lg"><HiMiniArrowTrendingUp /></div>
              <div className="font-medium text-sm text-slate-400">$112.00</div></div>
          </td>
          <td className="whitespace-nowrap px-6 py-2"><div className="bg-blue-200 text-xs flex justify-center rounded text-blue-500">Active</div></td>
          <td className="whitespace-nowrap px-3 py-2"><BsThreeDotsVertical /></td>
        </tr>

        {/* 6 */}
        <tr className="border-b dark:border-neutral-500">
          <td className="whitespace-nowrap  py-3  flex justify-center items-center font-medium"><img className="rounded-full mx-10 w-[45px] h-[45px]" src="https://themesdesign.in/tocly/layouts/assets/images/users/avatar-2.jpg" /></td>

          <td className="whitespace-nowrap px-2 py-3"><div>

            <div className="font-semibold text-slate-600 text-sm">Marie Kim</div>
            <div className="font-normal text-sm text-slate-400">marikim@tocly.com</div>
          </div></td>
          <td className="whitespace-nowrap px-2 py-2">

            <div className="flex gap-2"> <div className="mt-0 text-red-300 text-lg"><HiArrowTrendingDown /></div>
              <div className="font-medium text-sm text-slate-400">$120.00</div></div>
          </td>
          <td className="whitespace-nowrap px-6 py-2"><div className="bg-green-200 text-xs flex justify-center rounded text-green-500">Success</div></td>
          <td className="whitespace-nowrap px-3 py-2"><BsThreeDotsVertical /></td>
        </tr>
        {/* 7 */}
        <tr className="border-b dark:border-neutral-500">
          <td className="whitespace-nowrap  py-3  flex justify-center items-center font-medium"><img className="rounded-full mx-10 w-[45px] h-[45px]" src="https://themesdesign.in/tocly/layouts/assets/images/users/avatar-1.jpg" /></td>

          <td className="whitespace-nowrap px-2 py-3"><div>

            <div className="font-semibold text-slate-600 text-sm">
              Sonya Henshaw</div>
            <div className="font-normal text-sm text-slate-400">sonyahenshaw@tocly.com</div>
          </div></td>
          <td className="whitespace-nowrap px-2 py-2">

            <div className="flex gap-2"> <div className="mt-0 text-green-300 text-lg"><HiMiniArrowTrendingUp /></div>
              <div className="font-medium text-sm text-slate-400">$112.00</div></div>
          </td>
          <td className="whitespace-nowrap px-6 py-2"><div className="bg-red-200 text-xs flex justify-center rounded text-red-500">Cancel</div></td>
          <td className="whitespace-nowrap px-3 py-2"><BsThreeDotsVertical /></td>
        </tr>

      </tbody>
    </table>


  </div>





</div>

</div>

    </>
  )
}

export default Copy
