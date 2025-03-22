import Link from 'next/link'
import React from 'react'

const PageBanner = ({ data }) => {
    return (
        <div className='w-full bg-secondary flex items-center flex-col p-10 py-14'>
            <h2 className='text-5xl text-white font-bold text-center my-4 '>{data}</h2>
            <nav aria-label="breadcrumb" class="w-max">
                <ol class="flex w-full flex-wrap items-center rounded-full border border-white mt-2 mb-10 p-1 px-8">
                    <li class="flex cursor-pointer items-center text-sm text-white transition-colors duration-300">
                        <Link
                            href="/"
                            class="px-3 py-1 hover:text-primary"
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
                            class="px-3 py-1 hover:text-primary"
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