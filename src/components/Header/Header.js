import React from 'react';

const Header = () => {

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
                <p className="mt-2 text-3xl font-semibold leading-8 tracking-tight text-indigo-700 sm:text-4xl dark:text-yellow-500">VideoMiner</p>
                <p className="mt-4 max-w-2xl text-md text-gray-500 lg:mx-auto dark:text-gray-300">Extract video transcription and video summary, and quickly navigate to keywords and related terms in the video!</p>
            </div>
        </div>
    )
};

export default Header;