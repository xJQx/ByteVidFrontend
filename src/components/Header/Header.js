import React from 'react';

import './Header.css';

const Header = () => {

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div id="header-content" className="text-center">
                <p className="text-3xl font-semibold leading-8 tracking-tight text-indigo-700 sm:text-4xl dark:text-yellow-500">ByteVid</p>
                <p className="mt-4 mb-4 max-w-2xl text-lg text-gray-500 mx-auto dark:text-gray-300">Say goodbye to long and boring videos! 👋</p>
                <p className="mt-2 max-w-2xl text-md text-gray-500 mx-auto dark:text-gray-300">By using <mark className="px-2 bg-indigo-700 dark:bg-yellow-500 text-white dark:text-black">state-of-the-art</mark> deep learning technologies, ByteVid converts long, boring videos into fun byte-sized content. </p>
                <p className="mt-2 max-w-2xl text-md text-gray-500 mx-auto dark:text-gray-300">It can <mark className="px-2 bg-indigo-700 dark:bg-yellow-500 text-white dark:text-black">transcribe</mark>, <mark className="px-2 bg-indigo-700 dark:bg-yellow-500 text-white dark:text-black">translate</mark>, extract <mark className="px-2 bg-indigo-700 dark:bg-yellow-500 text-white dark:text-black">key words</mark>, extract <mark className="px-2 bg-indigo-700 dark:bg-yellow-500 text-white dark:text-black">important slides</mark> from video, and <mark className="px-2 bg-indigo-700 dark:bg-yellow-500 text-white dark:text-black">summarise</mark> the content</p>
            </div>
        </div>
    )
};

export default Header;