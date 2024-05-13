import React from "react";
import Navigation from "../../components/Main Components/Navigation";
import Footer from "../../components/Main Components/Footer";
import Sidebar from "../../components/Sidebar";
import { PageTemplate } from "../../components/Main Components/PageTemplate";

const OrderHistory = () => {
  return (
    <>
      <Navigation />
      <PageTemplate >
      <div className="grid grid-cols-3 gap-1">
      <div> <Sidebar /> </div>
      <div>
        <div className="flex justify-between items-center mb-4">
            <div className="text-lg font-montserrat text-green-50">Order History</div>
        </div>
        <div className=' container mt-9 mb-40'>
                <table className=' table-auto w-full'>
                    <thead>
                        <tr className=' bg-gray-100'>
                            <th className='px-4 py-6 text-center font-[montserrat]'> Status </th>
                            <th className='px-40 py-6 text-center font-[montserrat]'>Item Name </th>
                            <th className='px-4 py-6 text-center font-[montserrat]'> Quantity  </th>
                            <th className='px-10 py-6 text-center font-[montserrat]'> Date </th>
                            <th className='px-4 py-6 text-center font-[montserrat]'> Order ID </th>
                            <th className='px-4 py-6 text-center font-[montserrat]'> Price </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='px-4 py-6 text-center font-[montserrat]'>  </td>
                            <td className='px-20 py-6 text-center font-[montserrat]'> 
                                <div className="overflow-x-visible">
                                    My Year of Rest and Relaxation
                                </div>
                            </td>
                            <td className='px-4 py-6 text-center font-[montserrat]'> 01 </td>
                            <td className='px-10 py-6 text-center font-[montserrat]'> Date Placeholder </td>
                            <td className='px-4 py-6 text-center font-[montserrat]'> 567 </td>
                            <td className='px-4 py-6 text-center font-[montserrat]'> P555.0 </td>
                        </tr>
                        <tr>
                            <td className='px-4 py-6 text-center font-[montserrat]'>  </td>
                            <td className='px-20 py-6 text-center font-[montserrat]'> 
                                <div className="overflow-x-visible">
                                    My Year of Rest and Relaxation
                                </div>
                            </td>
                            <td className='px-4 py-6 text-center font-[montserrat]'> 01 </td>
                            <td className='px-10 py-6 text-center font-[montserrat]'> Date Placeholder </td>
                            <td className='px-4 py-6 text-center font-[montserrat]'> 567 </td>
                            <td className='px-4 py-6 text-center font-[montserrat]'> P555.0 </td>
                        </tr>
                    </tbody>

                </table>
            </div>
          </div>
      </div>
      </PageTemplate>
        <Footer />
  
    </>
  )
}

export default OrderHistory