import React, { useEffect, useState } from "react";
import Hero from "../HeroSection/Hero";
import JobsCategory from "../JobsCategory/JobsCategory";
import { useLoaderData } from "react-router-dom";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {

  const [products, setProducts] = useState([])

  const categoryData = useLoaderData();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('products.json');
      const data = await res.json();
      setProducts(data.slice(0,4));
    }
    fetchData()
  }, [])

  return (
    <div className="">
      <Hero />

      {/* Jobs category  starts  here */}
      <>
        <p className="mb-2 mt-16 text-center font-semibold text-2xl">
          Job Category List
        </p>
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

      {/*Featured Jobs   starts  here */}
      <>
        <p className="mb-2 mt-16 text-center font-semibold text-2xl">
          Featured Jobs
        </p>
        <p className="text-gray-500 text-center ">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </>
      <div className="container mt-8 grid md:grid-cols-2 gap-8">
        {products.map((pd) => (
          <FeaturedJobs pd={pd} key={pd.id} />
        ))}
      </div>
      <div className="container text-center">
        <button  className="btn-primary mt-4"> Show All</button>
      </div>
    </div>
  );
};

export default Home;
