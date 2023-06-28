// import React from 'react'
import {TfiComment} from 'react-icons/tfi'

const Task = () => {
  return (
    <div>
      <div className="p-10">
        {/* Active */}
        <div className=" mb-5">
          <h1 className=" text-xl font-bold text-stone-600 mb-5">Active</h1>
          <div className="overflow-x-auto">
            <table className="table">
              <tbody>
                <tr className=' text-lg'>
                <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>Ecommerse Products Details</td>
                  <td className=' flex items-center gap-3'> <TfiComment className=' mt-1' /> 3 </td>
                  <td>27 May, 2020</td>
                  <td className=" text-sm font-bold"> <span className=" bg-blue-100 px-2 rounded-md text-blue-500">Active</span></td>
                </tr>
                <tr className=' text-lg'>
                <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>Ecommerse Products </td>
                  <td className=' flex items-center gap-3'> <TfiComment className=' mt-1' /> 3 </td>
                  <td>27 May, 2020</td>
                  <td className=" text-sm font-bold"> <span className=" bg-blue-100 px-2 rounded-md text-blue-500">Active</span></td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
        {/* Upcoming */}
        <div className=" mb-5">
          <h1 className=" text-xl font-bold text-stone-600 mb-5">Upcoming</h1>
          <div className="overflow-x-auto">
            <table className="table">
              <tbody>
                <tr className=' text-lg'>
                <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>Char App page</td>
                  <td className=' flex items-center gap-3'> <TfiComment className=' mt-1' /> 3 </td>
                  <td>27 May, 2020</td>
                  <td className=" text-sm font-bold"> <span className=" bg-blue-100 px-2 rounded-md text-blue-500">Active</span></td>
                </tr>
                <tr className=' text-lg'>
                <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>Email pages</td>
                  <td className=' flex items-center gap-3'> <TfiComment className=' mt-1' /> 3 </td>
                  <td>27 May, 2020</td>
                  <td className=" text-sm font-bold"> <span className=" bg-blue-300 px-2 rounded-md text-blue-600">Approve</span></td>
                </tr>
                <tr className=' text-lg'>
                <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>Contact profile pages</td>
                  <td className=' flex items-center gap-3'> <TfiComment className=' mt-1' /> 3 </td>
                  <td>27 May, 2020</td>
                  <td className=" text-sm font-bold"> <span className=" bg-blue-300 px-2 rounded-md text-blue-600">Waiting</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* Complete */}
        <div className=" mb-5">
          <h1 className=" text-xl font-bold text-stone-600 mb-5">Complete</h1>
          <div className="overflow-x-auto">
            <table className="table">
              <tbody>
                <tr className=' text-lg'>
                <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>UI Element</td>
                  <td className=' flex items-center gap-3'> <TfiComment className=' mt-1' /> 3 </td>
                  <td>27 May, 2020</td>
                  <td className=" text-sm font-bold"> <span className=" bg-blue-100 px-2 rounded-md text-blue-500">Complete</span></td>
                </tr>
                <tr className=' text-lg'>
                <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>Authentication pages</td>
                  <td className=' flex items-center gap-3'> <TfiComment className=' mt-1' /> 3 </td>
                  <td>27 May, 2020</td>
                  <td className=" text-sm font-bold"> <span className=" bg-blue-100 px-2 rounded-md text-blue-500">Complete</span></td>
                </tr>
                <tr className=' text-lg'>
                <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>Admin layout</td>
                  <td className=' flex items-center gap-3'> <TfiComment className=' mt-1' /> 3 </td>
                  <td>27 May, 2020</td>
                  <td className=" text-sm font-bold"> <span className=" bg-blue-100 px-2 rounded-md text-blue-500">Complete</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Task
