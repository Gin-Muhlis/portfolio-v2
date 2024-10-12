import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl h-screen lg:py-16 lg:px-6 flex items-center justify-center">
                <div class="mx-auto max-w-screen-sm text-center">
                    <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary dark:text-primary">404</h1>
                    <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Something's missing.</p>
                    <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
                    <Link to="/" class="inline-flex text-black bg-primary focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">Back to Homepage</Link>
                </div>
            </div>
        </section>
    )
}

export default NotFound