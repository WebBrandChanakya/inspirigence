import React from 'react'

const page = () => {
  return (
    <div>
         <div className="flex flex-col items-center justify-center min-h-screen bg-white p-8">
        <img
          src="/images/404.jpg"
          alt="404 illustration"
          className="w-96 mb-8"
        />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Page not found</h1>
        <p className="text-gray-600 mb-6 text-center">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <a
          href="/"
          className="px-6 py-3 bg-primary text-white rounded-lg hover:scale-95 transition"
        >
          Back to Home
        </a>
      </div>
    </div>
  )
}

export default page