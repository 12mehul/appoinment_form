import { useState } from "react";
import { BiCalendarPlus } from "react-icons/bi";
function AddAppointment() {
    let [toggleForm, setToggleForm] = useState(false);
  return (
    <div>
        <button 
            onClick={ () => { setToggleForm (!toggleForm); } } 
            className={`bg-blue-400 text-white px-2 py-3 w-full text-left rounded-t-md
            ${ toggleForm ? "rounded-t-md bg-blue-400" : "rounded-md bg-red-400"}` }  >
            <div className=" font-medium">
                <BiCalendarPlus className="inline-block align-text-top" />Add Appointment
            </div>
        </button>
        {toggleForm && (
            <div className="border-r-2 border-b-2 border-l-2 border-light-blue-500 rounded-b-md pl-4 pr-4 pb-4">
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label htmlFor="ownerName" className="block font-medium text-black sm:mt-px sm:pt-2">
                    Owner Name
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <input className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs font-medium border-gray-300 rounded-md" type="text"></input>
                </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label htmlFor="petName" className="block font-medium text-black sm:mt-px sm:pt-2">
                    Pet Name
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <input className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs font-medium border-gray-300 rounded-md" type="text"></input>
                </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label htmlFor="aptTime" className="block font-medium text-black sm:mt-px sm:pt-2">
                    Appointment Time
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <input className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs font-medium border-gray-300 rounded-md" type="time"></input>
                </div>
            </div>   

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label htmlFor="aptDate" className="block font-medium text-black sm:mt-px sm:pt-2">
                    Appointment Date
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <input className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs font-medium border-gray-300 rounded-md" type="date"></input>
                </div>
            </div>  

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label htmlFor="message" className="block font-medium text-black sm:mt-px sm:pt-2">
                 Message   
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <textarea rows="3" className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs font-medium border-gray-300 rounded-md" type="text"></textarea>
                </div>
            </div> 

            <div className="pt-5">
                <div>
                    <button type="submit" className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-700">
                        Submit
                    </button>
                </div>
            </div>

        </div>
        )}
   </div>
  );
}

export default AddAppointment