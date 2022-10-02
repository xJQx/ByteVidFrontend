import React from 'react';

const Header = () => {

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <p className="mt-2 text-3xl font-semibold leading-8 tracking-tight text-indigo-700 sm:text-4xl dark:text-yellow-500">ByteVid</p>
                <p className="mt-4 max-w-2xl text-md text-gray-500 mx-auto dark:text-gray-300">
                    Say goodbye to long and boring videos! By using state-of-the-art deep learning technologies, ByteVid converts long, boring videos into fun byte-sized content. 
                    <br />It can transcribe, translate, extract key words, extract important slides from video, and summarise the content
                </p>
            </div>
        </div>
    )
};

export default Header;