import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getShoppingCart } from "../../Utilities/FakeDb";
import { FaCreativeCommonsNc, FaMapMarkerAlt } from "react-icons/fa";

const AppliedJobs = () => {
  const [allJobs, setAllJobs] = useState([]);
  const [tempAllJobs, setTempAllJobs] = useState([]);

  // fetching here all jobs
  const loadedData = useLoaderData();
console.log(loadedData)
  useEffect(() => {
    // fetching here localStorage data .
    const storedJobs = getShoppingCart();

    let cartJobs = [];
    console.log(loadedData);
    if (loadedData) {
      for (const id in storedJobs) {
        const addedJobs = loadedData?.find((job) => job.id == id);
        cartJobs.push(addedJobs);
      }

      setAllJobs([...cartJobs]);
      setTempAllJobs([...cartJobs]);
    }
  }, []);

  const handleChange = (e) => {
    const sortedData = allJobs.filter((job) => job.jobType === e.target.value);
    setTempAllJobs(sortedData);
  };

  return (
    <div>
      <div className=" relative  bg-slate-100 h-[200px] flex justify-between items-center">
        <img className=" w-44 mt-12 -ml-8" src={"/All Images/Vector.png"} />
        <p className=" text-xl font-bold -mt-16">Applied Jobs</p>
        <img
          className=" w-44 -mt-48  overflow-hidden "
          src={"/All Images/Vector-1.png"}
        />
      </div>
      <div className=" container flex justify-end">
        <select
          onChange={handleChange}
          name="Filter By"
          className="bg-gray-200 mt-8 px-3 py-2"
        >
          <option value="">Filter By</option>
          <option value="remote">remote job</option>
          <option value="onsite">onsite job</option>
        </select>
      </div>

      <div className="container grid grid-cols-1 mt-12">
        {tempAllJobs &&
          tempAllJobs?.map((jobs) => (
            <div className="flex items-center mb-4">
              <div className="bg-gray-200 p-4 h-full flex items-center justify-center">
                <img className="w-[120px] h-[40px]" src={jobs.companyLogo} />
              </div>
              <div className="ml-8">
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
              <div className="ml-auto">
                <button className="btn-primary"> View Detail</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
