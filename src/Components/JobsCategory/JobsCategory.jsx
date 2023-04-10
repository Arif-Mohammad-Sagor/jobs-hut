import React from 'react'

const JobsCategory = ({jobs}) => {
    console.log(jobs.category)
    const { category,logo,availableJobs } = jobs;
    // const { logo, category, availableJobs } = jobs.props;
    return <div className='bg-slate-200 p-4 text-center '>
        <img src={logo} className='mx-auto mb-4'/>
        <p className='font-semibold text-lg'>{category}</p>
        <p className='text-gray-600 mt-1'>{availableJobs} jobs available</p>

  </div>;
};

export default JobsCategory