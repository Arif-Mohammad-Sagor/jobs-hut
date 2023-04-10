import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const JobDetail = () => {

  const [details, setDetails] = useState({})

   const loadedData = useLoaderData();
   const { jobId } = useParams()


  useEffect(() => {
    if (loadedData) {
      const selectedProduct = loadedData.find(pd => pd.id == jobId);
      setDetails(selectedProduct);
}
  }, [])

  console.log(details);

  return (
    <div className="container flex flex-col md:flex-row gap-4">
      <div>
        <p className="text-lg font-semibold">Job Description</p>
        <p>{details.jobDescription}</p>
        <p className="text-lg font-semibold">Job Responsibility</p>
        <p>{details.jobResponsibilites}</p>
        <p>{ }</p>
      </div>
      <div></div>
    </div>
  );
}

export default JobDetail