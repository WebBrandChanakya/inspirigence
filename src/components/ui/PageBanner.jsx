import Link from 'next/link'
import React from 'react'

const PageBanner = ({ data }) => {
    return (
        <div className='w-full bg-secondary dark:bg-darkLvl2 flex items-center flex-col p-10 py-14 border-b border-gray-300'>
            <h1 className='md:text-5xl text-3xl  text-white font-bold text-center my-4 '>{data}</h1>
            <nav aria-label="breadcrumb" class="w-max">
                <ol class="flex w-full flex-wrap items-center rounded-full border border-white my-4 p-1 px-8">
                    <li class="flex cursor-pointer items-center text-sm text-white transition-colors duration-300">
                        <Link
                            href="/"
                            class="px-3 py-1 hover:text-white"
                        >
                            Home
                        </Link>
                        <span class="pointer-events-none mx-2 text-white">
                            -
                        </span>
                    </li>
                    <li class="flex cursor-pointer items-center text-sm text-white transition-colors duration-300">
                        <Link
                            href="#"
                            class="px-3 py-1 text-white hover:text-white"
                        >
                            {data}
                        </Link>

                    </li>

                </ol>
            </nav>
        </div>
    )
}

export default PageBanner