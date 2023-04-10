import React from 'react'
import { FaMapMarkerAlt, FaCreativeCommonsNc } from "react-icons/fa";

const FeaturedJobs = ({ pd }) => {

    const {
      id,
      companyLogo,
      companyName,
      educationalRequirement,
      experience,
      jobDescription,
      jobResponsibilites,
      jobTitle,
      jobType,
      location,
      fullTimeOrPartTime,
      salaryRange,
      contactInformation,
    } = pd;
  return (
    <div className="p-4 shadow-lg">
      <img className="w-[120px] h-[40px]" src={companyLogo} />
      <p className="text-lg">{jobTitle}</p>
      <p className="text-md">{companyName}</p>
      <div className="my-2">
        <a className="border text-xs md:text-base text-cyan-600 border-gray-600 mr-4 p-1 rounded">
          {jobType}
        </a>
        <a className="border text-xs md:text-base text-cyan-600 border-gray-600  p-1 rounded">
          {fullTimeOrPartTime}
        </a>
      </div>
      <div className="flex gap-4 text-sm my-3">
        <p className="flex text-xs md:text-base gap-2 items-center ">
          <FaMapMarkerAlt />
          {location}
        </p>
        <p className="flex text-xs md:text-base gap-2 text-gray-600 items-center">
          <FaCreativeCommonsNc />
          Salary :{salaryRange}
        </p>
      </div>
      <button className="btn-primary">View Detail</button>
    </div>
  );
}

export default FeaturedJobs