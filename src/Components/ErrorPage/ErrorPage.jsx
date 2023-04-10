import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const {error,status}= useRouteError()
  return (
    <div className="w-10/12 mx-auto mt-16 shadow-xl px-6 py-8 flex flex-col gap-4">
      <div>
        <p className="text-4xl text-center text-blue-900">{status || 404}</p>
      </div>
      <div>
        <p className="text-2xl text-yellow-600 text-center">{error.message}</p>
      </div>
      <div className=" mx-auto">
        <Link to="/">
          <button className="btn-primary">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage