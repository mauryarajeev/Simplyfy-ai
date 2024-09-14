import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    // Container to center content both vertically and horizontally
    <div className="grid h-screen place-content-center bg-white px-4">
      <div className="text-center">
        {/* Display large '404' to indicate page not found */}
        <h1 className="text-9xl font-black text-gray-200">404</h1>

        {/* Main message in bold, large text */}
        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </p>

        {/* Additional message explaining the error */}
        <p className="mt-4 text-gray-500">
          We can't find that page.
        </p>

        {/* Link to redirect users back to the homepage */}
        <Link
          to="/"
          className="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
