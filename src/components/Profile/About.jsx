// import React from 'react'
import {BiDotsVerticalRounded} from 'react-icons/bi'

const About = () => {
  return (
    <div>
      <div className=" p-10 w-[400px]">
        {/* experiences */}
        <div className="">
          <h1 className=" text-xl font-bold text-stone-600 mb-5">Experiences</h1>
          <div className=" ml-5">
            <p className=" text-lg text-stone-500">2020 - 2022</p>
            <p className=" text-lg font-bold text-stone-600 my-2">UI/UX Designer </p>
            <p className=" text-md font-bold text-stone-600">Abc company</p>
            <p className=" text-[18px] tracking-wide mt-5 text-stone-600">To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual</p>
          </div>
          <div className=" ml-5 mt-10">
            <p className=" text-lg text-stone-500">2019 - 2020</p>
            <p className=" text-lg font-bold text-stone-600 my-2">Graphic Designer Designer </p>
            <p className=" text-md font-bold text-stone-600">Xyz company</p>
            <p className=" text-[18px] tracking-wide mt-5 text-stone-600">To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual</p>
          </div>
        </div>
        {/* projects */}

        <div className=" my-10">
          <h1 className=" text-xl font-bold text-stone-600 mb-5">Projects</h1>
           <div className="overflow-x-auto">
  <table className="table text-lg">
    {/* head */}
    <thead>
      <tr className=' text-lg text-stone-600'>
        <th>#</th>
        <th>Project</th>
        <th>Date</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th className=' text-stone-600'>01</th>
        <td>Brand Logo Design</td>
        <td>18 Jun, 2020</td>
        <td className=" text-sm font-bold"> <span className=" bg-blue-300 px-2 rounded-md text-blue-600">Open</span></td>
        <td> <BiDotsVerticalRounded /> </td>
      </tr>
      {/* row 2 */}
      <tr>
        <th className=' text-stone-600'>02</th>
        <td>Minible Admin </td>
        <td>06 Jun, 2020</td>
        <td className=" text-sm font-bold"> <span className=" bg-blue-300 px-2 rounded-md text-blue-600">Open</span></td>
        <td> <BiDotsVerticalRounded /> </td>
      </tr>
      {/* row 3 */}
      <tr>
        <th className=' text-stone-600'>03</th>
        <td>Chat App Design</td>
        <td>28 May, 2020</td>
        <td className=" text-sm font-bold"> <span className=" bg-blue-100 px-2 rounded-md text-blue-400">Complete</span></td>
        <td> <BiDotsVerticalRounded /> </td>
      </tr>
      <tr>
        <th className=' text-stone-600'>04</th>
        <td>Minible Landing</td>
        <td>13 May, 2020</td>
        <td className=" text-sm font-bold"> <span className=" bg-blue-100 px-2 rounded-md text-blue-400">Complete</span></td>
        <td> <BiDotsVerticalRounded /> </td>
      </tr>
      <tr>
        <th className=' text-stone-600'>05</th>
        <td>Authentication page</td>
        <td>6 May, 2020</td>
        <td className=" text-sm font-bold"> <span className=" bg-blue-100 px-2 rounded-md text-blue-400">Complete</span></td>
        <td> <BiDotsVerticalRounded /> </td>
      </tr>
    </tbody>
  </table>
           </div>
        </div>
      </div>
    </div>
  )
}

export default About;
