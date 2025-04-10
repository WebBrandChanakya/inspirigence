import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
         <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-darkLvl1 ">
        <Image
          width={500}
          height={500}
          src="/images/404.jpg"
          alt="404 illustration"
          className="w-96 mb-8 rounded"
        />
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Page not found</h1>
        <p className="text-gray-600 dark:text-gray-200 mb-6 text-center">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-primary text-white rounded-lg hover:scale-95 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default page