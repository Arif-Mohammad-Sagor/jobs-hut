import React from 'react'
import Hero from '../HeroSection/Hero'
import JobsCategory from '../JobsCategory/JobsCategory'
import { useLoaderData } from 'react-router-dom'

const Home = () => {
  const categoryData = useLoaderData();

  return (
    <div className="">
      <Hero />
      <>
        <p className="mb-2 mt-16 text-center font-semibold text-2xl">Job Category List</p>
        <p className="text-gray-500 text-center ">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </>
      <div className="container grid lg:grid-cols-4 gap-4 mt-8">
        {categoryData.map((jobs, index) => (
          <JobsCategory jobs={jobs} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Home