import React, { useEffect, useState } from "react";
import { NavLink, useLoaderData, useParams } from "react-router-dom";
import {
  FaCreativeCommonsNc,
  FaCalendarAlt,
  FaPhoneAlt,
  FaMailBulk,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { addToDb } from "../../Utilities/FakeDb";


const JobDetail = () => {
  const [details, setDetails] = useState({});

  const loadedData = useLoaderData();
  const { jobId } = useParams();

  useEffect(() => {
    if (loadedData) {
      const selectedProduct = loadedData.find((pd) => pd.id == jobId);
      setDetails(selectedProduct);
    }
  }, []);

  const handleAddtoCart = (id) => {
    addToDb(id);
  };

  return (
    <div className="container flex flex-col md:flex-row gap-4 mt-20">
      <div className="md:w-3/5">
        <p className="text-lg font-semibold">Job Description</p>
        <p>{details.jobDescription}</p>
        <p className="text-lg font-semibold mt-4">Job Responsibility</p>
        <p>{details.jobResponsibilities}</p>
        <p className="text-lg font-semibold mt-4">Educational Requirement</p>
        <p>{details.educationalRequirement}</p>
        <p className="text-lg font-semibold mt-4">Experience</p>
        <p>{details.experience}</p>
      </div>
      <div className="bg-purple-200 p-4 md:w-2/5 ">
        <p className="font-semibold text-xl text-center text-gray-500">
          Job Details
        </p>
        <div className="divider-y-8 mt-4 pl-4">
          <hr className="h-1 mt-4  bg-gray-400 mb-4" />
          <p className="flex items-center">
            <span className="text-blue-500 mr-1">
              <FaCreativeCommonsNc />
            </span>
            <span className="font-semibold mr-1">Salary:</span>
            {details.salaryRange}
          </p>
          <p className="flex items-center mt-2">
            <span className="text-blue-500 mr-1">
              <FaCalendarAlt />
            </span>
            <span className="font-semibold mr-1">JobTitle:</span>
            {details.jobTitle}
          </p>
          <p className="font-semibold mt-4 text-lg ">Contact Information</p>
          <hr className="h-1 mt-4 bg-gray-400" />
        </div>
        <div className="mt-4 pl-4 mb-6">
          <p className="flex items-center mt-2">
            <span className="text-blue-500 mr-1">
              <FaPhoneAlt />
            </span>
            <span className="font-semibold mr-1">Phone:</span>
            {details.contactInformation?.phone}
          </p>
          <p className="flex items-center mt-2">
            <span className="text-blue-500 mr-1">
              <FaMailBulk />
            </span>
            <span className="font-semibold mr-1">Mail:</span>
            {details.contactInformation?.email}
          </p>
          <p className="flex items-center mt-2">
            <span className="text-blue-500 mr-1">
              <FaMapMarkerAlt />
            </span>
            <span className="font-semibold mr-1">Address:</span>
            <span className="">Dhanmondi 32,Dhaka,BD</span>
          </p>
        </div>

        <button
          onClick={() => handleAddtoCart(jobId)}
          className="w-full btn-primary"
        >
          {" "}
          Apply Now{" "}
        </button>
      </div>
    </div>
  );
};

export default JobDetail;
