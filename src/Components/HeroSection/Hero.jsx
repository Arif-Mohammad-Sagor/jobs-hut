import React from 'react'

const Hero = () => {
  return (
    <div className="bg-slate-100">
      <div className={`container flex  flex-col md:flex-row items-center justify-center lg:justify-between lg:gap-0 gap-6`}>
        <div className="lg:w-1/2 mt-0 lg:mt-10">
          <p className="text-xl lg:text-5xl font-semibold mb-2 leading-12">
            One Step <br /> Closer To Your
            <br /> <span className="text-purple-500">Dream Job </span>
          </p>
          <p className="my-4 lg:text-base text-sm text-gray-600">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <div className="mb-0 lg:mb-16 mt-0 md:mt-8">
            <button className="btn-primary">Get Started</button>
          </div>
        </div>

        <div className="">
          <img className="w-96" src={"/All Images/P3OLGJ1 copy 1.png"} />
        </div>
      </div>
    </div>
  );
}

export default Hero