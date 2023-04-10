import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { getShoppingCart } from '../../Utilities/FakeDb';
import {
  FaCreativeCommonsNc,
  FaCalendarAlt,
  FaPhoneAlt,
  FaMailBulk,
  FaMapMarkerAlt,
} from "react-icons/fa";


const AppliedJobs = () => {

  const [jobs,setJobs]=useState([])
  const loadedData = useLoaderData();

  useEffect(() => {
    const storedJobs = getShoppingCart();
    setJobs(storedJobs);
  }, []);

  let cartJobs = [];

  for (const id in jobs) {
    const addedJobs = loadedData.find(job => job.id == id);
    cartJobs.push(addedJobs);
}


  return (
    <div className="container grid grid-cols-1 mt-16">
      {cartJobs.map((jobs) => (
        <div className='flex items-center mb-4'>
          <div className='bg-gray-200 p-4 h-full flex items-center justify-center'>
            <img className="w-[120px] h-[40px]" src={jobs.companyLogo} />
          </div>
          <div className='ml-8'>
            <p className="text-lg">{jobs.jobTitle}</p>
            <p className="text-md">{jobs.companyName}</p>
            <div className="my-2">
              <a className="border text-xs md:text-base text-cyan-600 border-gray-600 mr-4 p-1 rounded">
                {jobs.jobType}
              </a>
              <a className="border text-xs md:text-base text-cyan-600 border-gray-600  p-1 rounded">
                {jobs.fullTimeOrPartTime}
              </a>
            </div>
            <div className="flex gap-4 text-sm my-3">
              <p className="flex text-xs md:text-base gap-2 items-center ">
                <FaMapMarkerAlt />
                {jobs.location}
              </p>
              <p className="flex text-xs md:text-base gap-2 text-gray-600 items-center">
                <FaCreativeCommonsNc />
                Salary :{jobs.salaryRange}
              </p>
            </div>
          </div>
          <div className='ml-auto'>
            <button className='btn-primary'> View Detail</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AppliedJobs