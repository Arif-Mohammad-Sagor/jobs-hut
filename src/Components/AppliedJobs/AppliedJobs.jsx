import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { getShoppingCart } from '../../Utilities/FakeDb';

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
 console.log(cartJobs)


  return (
    <div className='container mt-8'>
      {cartJobs.map(jobs => <p>{jobs.companyName}</p>)}
    </div>
  )
}

export default AppliedJobs