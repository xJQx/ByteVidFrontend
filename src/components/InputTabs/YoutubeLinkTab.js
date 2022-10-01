import React from 'react'
import DatabaseType from './DatabaseType';
import Languages from './Languages';

const YoutubeLinkTab = () => {
    const handleOnSubmit = (e) => {
        e.preventDefault();

        let youtubeLink = e.target[0].value;
        let language = e.target[1].value;
        let databaseType = e.target[2].value;
    }

    return (
        <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="youtube-link-tab-content" role="tabpanel" aria-labelledby="youtube-link-tab-header">
            <form className="space-y-6" onSubmit={handleOnSubmit}>
                <h5 className="text-xl font-medium text-gray-900 dark:text-white">Mine video with YouTube link</h5>
                {/* YouTube Link */}
                <div>
                    <label htmlFor="youtube-link-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">YouTube Link</label>
                    <input id="youtube-link-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="https://www.youtube.com/watch?v=....."/>
                </div>
                
                {/* language */}
                <Languages />

                {/* database */}
                <DatabaseType />

                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:focus:ring-yellow-700">Extract</button>
            </form>
        </div>
    )
}

export default YoutubeLinkTab;