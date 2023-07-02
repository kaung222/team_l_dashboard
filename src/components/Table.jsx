import React from 'react'
import { BiSquareRounded } from 'react-icons/bi';
import { FaCcMastercard } from 'react-icons/fa';
import { BiSolidPencil } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import { FaCcVisa } from 'react-icons/fa';
import { FaCcPaypal } from 'react-icons/fa';
const Table = () => {
    return (
        <div className='flex-col sm:w-[1006px] h-[450px] bg-white w-[320px] mx-2'>
            <div>
                <div className='   ml-3  flex justify-between px-4 mt-3'>
                    <div className="font-semibold text-16 text-gray-700 mt-3 h-4">Latest Transaction</div>
                    <div className='flex h-4'>
                        <div className=" font-semibold text-sm  text-gray-700 mt-3 h-4">Sort By:</div>
                        <div className="font-normal text-[#83838d] text-sm mt-3 h-4">yearly</div>
                    </div>

                </div>
            </div>
            <div className='mt-3 '>
                <div className="overflow-x-scroll w-[328px] sm:w-[1006px] ">
                    <table className="min-w-full text-left text-sm font-light mx-3">
                        <thead className="border-b font-medium dark:border-neutral-500">
                            <tr>
                                <th scope="col" className="px-2 py-2 text-gray-700 "><BiSquareRounded className="w-[33px]   stroke-slate-100  h-[19px] " /></th>
                                <th scope="col" className="px-2 py-2 text-gray-700">Order ID</th>
                                <th scope="col" className="px-2 py-2 text-gray-700">Billing Name</th>
                                <th scope="col" className="px-2 py-2 text-gray-700">IP Address</th>
                                <th scope="col" className="px-2 py-2">Order Date</th>
                                <th scope="col" className="px-2 py-2 text-gray-700">Total</th>
                                <th scope="col" className="px-2 py-2 text-gray-700">Payment Method</th>
                                <th scope="col" className="px-2 py-2 text-gray-700">Payment Status</th>
                                <th scope="col" className="px-2 py-2 text-gray-700">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* 1 */}
                            <tr className="border-b dark:border-neutral-500 font-medium text-gray-700">
                                <td className=" px-2 py-2 font-medium"><BiSquareRounded className="w-[33px]   stroke-slate-100  h-[19px] " /></td>
                                <td className=" px-2 py-2">#MB2540</td>
                                <td className=" px-2 py-2 flex">
                                    <div className='w-9'><img className='rounded-full  w-[34px] h-[34px]' src='https://themesdesign.in/tocly/layouts/assets/images/users/avatar-2.jpg' /></div>
                                    <div className='ml-2 mt-1'> Neal Matthews</div>
                                </td>

                                <td className="px-2 py-2">cs562xf452dd</td>
                                <td className=" px-2 py-2">07 Oct, 2022</td>
                                <td className=" px-2 py-2">$400</td>
                                <td className=" px-2 py-1 flex">
                                    <div className=''><FaCcMastercard className='mt-[4px]' /></div>
                                    <div className=' ml-2 mb-2'> Mastercard</div>
                                </td>
                                <td className=" px-2 py-2"><div className="bg-green-200 text-xs flex justify-center rounded text-green-500 w-[78px] ml-2">Completed</div></td>
                                <td >
                                    <div className=" px-2 py-2  h-7 flex gap-2 mt-[-11px]" >
                                        <div className='bg-green-400 w-[25px] rounded flex justify-center items-center  h-[23px] '><BiSolidPencil className='text-white' /></div>
                                        <div className='bg-red-400 w-[25px] rounded  flex justify-center items-center h-[25px] '><MdDelete className='text-white' /></div>
                                    </div>
                                </td>
                            </tr>
                            {/* 2 */}
                            <tr className="border-b dark:border-neutral-500 font-medium text-gray-700">
                                <td className=" px-2 py-2 font-medium"><BiSquareRounded className="w-[33px]   stroke-slate-100  h-[19px] " /></td>
                                <td className=" px-2 py-2">	#MB2541</td>
                                <td className=" px-2 py-2 flex">
                                    <div className='w-9'><img className='rounded-full  w-[34px] h-[34px]' src='https://themesdesign.in/tocly/layouts/assets/images/users/avatar-3.jpg' /></div>
                                    <div className='ml-2 mt-1'> Jamal Burnett</div>
                                </td>

                                <td className="px-2 py-2">ar252xf658dd</td>
                                <td className=" px-2 py-2">07 Oct, 2022</td>
                                <td className=" px-2 py-2">$380</td>
                                <td className=" px-2 py-1 flex">
                                    <div className=''><FaCcVisa className='mt-[4px]' /></div>
                                    <div className=' ml-2 mb-2'> Visa</div>
                                </td>
                                <td className=" px-2 py-2"><div className="bg-red-200 text-xs flex justify-center rounded text-red-500 w-[58px] ml-2">Cancel</div></td>
                                <td >
                                    <div className=" px-2 py-2  h-7 flex gap-2 mt-[-11px]" >
                                        <div className='bg-green-400 w-[25px] rounded flex justify-center items-center  h-[23px] '><BiSolidPencil className='text-white' /></div>
                                        <div className='bg-red-400 w-[25px] rounded  flex justify-center items-center h-[25px] '><MdDelete className='text-white' /></div>
                                    </div>
                                </td>
                            </tr>
                            {/* 3 */}
                            <tr className="border-b dark:border-neutral-500 font-medium text-gray-700">
                                <td className=" px-2 py-2 font-medium"><BiSquareRounded className="w-[33px]   stroke-slate-100  h-[19px] " /></td>
                                <td className=" px-2 py-2">	#MB2542</td>
                                <td className=" px-2 py-2 flex">
                                    <div className='w-9'><img className='rounded-full  w-[34px] h-[34px]' src='https://themesdesign.in/tocly/layouts/assets/images/users/avatar-4.jpg' /></div>
                                    <div className='ml-2 mt-1'> Juan Mitchell</div>
                                </td>

                                <td className="px-2 py-2">
                                    op632xf223dd</td>
                                <td className=" px-2 py-2">06 Oct, 2022</td>
                                <td className=" px-2 py-2">$384</td>
                                <td className=" px-2 py-1 flex">
                                    <div className=''><FaCcPaypal className='mt-[4px]' /></div>
                                    <div className=' ml-2 mb-2'>Paypal</div>
                                </td>
                                <td className=" px-2 py-2"><div className="bg-green-200 text-xs flex justify-center rounded text-green-500 w-[78px] ml-2">Completed</div></td>
                                <td >
                                    <div className=" px-2 py-2  h-7 flex gap-2 mt-[-11px]" >
                                        <div className='bg-green-400 w-[25px] rounded flex justify-center items-center  h-[23px] '><BiSolidPencil className='text-white' /></div>
                                        <div className='bg-red-400 w-[25px] rounded  flex justify-center items-center h-[25px] '><MdDelete className='text-white' /></div>
                                    </div>
                                </td>
                            </tr>
                            {/* 4 */}
                            <tr className="border-b dark:border-neutral-500 font-medium text-gray-700">
                                <td className=" px-2 py-2 font-medium"><BiSquareRounded className="w-[33px]   stroke-slate-100  h-[19px] " /></td>
                                <td className=" px-2 py-2">#MB2543</td>
                                <td className=" px-2 py-2 flex">
                                    <div className='w-9'><img className='rounded-full  w-[34px] h-[34px]' src='https://themesdesign.in/tocly/layouts/assets/images/users/avatar-5.jpg' /></div>
                                    <div className='ml-2 mt-1'>  Barry Dick</div>
                                </td>

                                <td className="px-2 py-2">ty756xf985dd</td>
                                <td className=" px-2 py-2">05 Oct, 2022</td>
                                <td className=" px-2 py-2">$412</td>
                                <td className=" px-2 py-1 flex">
                                    <div className=''><FaCcMastercard className='mt-[4px]' /></div>
                                    <div className=' ml-2 mb-2'> Mastercard</div>
                                </td>
                                <td className=" px-2 py-2"><div className="bg-green-200 text-xs flex justify-center rounded text-green-500 w-[78px] ml-2">Completed</div></td>
                                <td >
                                    <div className=" px-2 py-2  h-7 flex gap-2 mt-[-11px]" >
                                        <div className='bg-green-400 w-[25px] rounded flex justify-center items-center  h-[23px] '><BiSolidPencil className='text-white' /></div>
                                        <div className='bg-red-400 w-[25px] rounded  flex justify-center items-center h-[25px] '><MdDelete className='text-white' /></div>
                                    </div>
                                </td>
                            </tr>
                            {/* 5 */}
                            <tr className="border-b dark:border-neutral-500 font-medium text-gray-700">
                                <td className=" px-2 py-2 font-medium"><BiSquareRounded className="w-[33px]   stroke-slate-100  h-[19px] " /></td>
                                <td className=" px-2 py-2">	#MB2544</td>
                                <td className=" px-2 py-2 flex">
                                    <div className='w-9'><img className='rounded-full  w-[34px] h-[34px]' src='https://themesdesign.in/tocly/layouts/assets/images/users/avatar-6.jpg' /></div>
                                    <div className='ml-2 mt-1'> Ronald Taylor</div>
                                </td>

                                <td className="px-2 py-2">jf754xf431dd</td>
                                <td className=" px-2 py-2">04 Oct, 2022</td>
                                <td className=" px-2 py-2">$380</td>
                                <td className=" px-2 py-1 flex">
                                    <div className=''><FaCcVisa className='mt-[4px]' /></div>
                                    <div className=' ml-2 mb-2'> Visa</div>
                                </td>
                                <td className=" px-2 py-2"><div className="bg-orange-200 text-xs flex justify-center rounded text-yellow-500 w-[58px] ml-2">Shipping</div></td>
                                <td >
                                    <div className=" px-2 py-2  h-7 flex gap-2 mt-[-11px]" >
                                        <div className='bg-green-400 w-[25px] rounded flex justify-center items-center  h-[23px] '><BiSolidPencil className='text-white' /></div>
                                        <div className='bg-red-400 w-[25px] rounded  flex justify-center items-center h-[25px] '><MdDelete className='text-white' /></div>
                                    </div>
                                </td>
                            </tr>
                            {/* 6 */}
                            <tr className="border-b dark:border-neutral-500 font-medium text-gray-700">
                                <td className=" px-2 py-2 font-medium"><BiSquareRounded className="w-[33px]   stroke-slate-100  h-[19px] " /></td>
                                <td className=" px-2 py-2">	#MB2545</td>
                                <td className=" px-2 py-2 flex">
                                    <div className='w-9'><img className='rounded-full  w-[34px] h-[34px]' src='https://themesdesign.in/tocly/layouts/assets/images/users/avatar-7.jpg' /></div>
                                    <div className='ml-2 mt-1'>  Jacob Hunter</div>
                                </td>

                                <td className="px-2 py-2">
                                    fd964xf467dd</td>
                                <td className=" px-2 py-2">04 Oct, 2022</td>
                                <td className=" px-2 py-2">	$392</td>
                                <td className=" px-2 py-1 flex">
                                    <div className=''><FaCcPaypal className='mt-[4px]' /></div>
                                    <div className=' ml-2 mb-2'>Paypal</div>
                                </td>
                                <td className=" px-2 py-2"><div className="bg-green-200 text-xs flex justify-center rounded text-green-500 w-[78px] ml-2">Completed</div></td>
                                <td >
                                    <div className=" px-2 py-2  h-7 flex gap-2 mt-[-11px]" >
                                        <div className='bg-green-400 w-[25px] rounded flex justify-center items-center  h-[23px] '><BiSolidPencil className='text-white' /></div>
                                        <div className='bg-red-400 w-[25px] rounded  flex justify-center items-center h-[25px] '><MdDelete className='text-white' /></div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
            )
}

            export default Table