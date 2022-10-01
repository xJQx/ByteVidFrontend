import React, { useEffect } from 'react'
import { displayInputTab } from './helper'

const InputTabs = () => {
    useEffect(() => {
        displayInputTab("youtube-link");

        document.querySelector('#youtube-link-tab-header').addEventListener('click', () => {
            displayInputTab('youtube-link');
        });
        document.querySelector('#upload-file-tab-header').addEventListener('click', () => {
            displayInputTab('upload-file');
        });
        document.querySelector('#use-uuid-tab-header').addEventListener('click', () => {
            displayInputTab('use-uuid');
        });
    }, []);

    return (
        <div className="flex justify-center mt-10">
            <div className="max-w-2xl w-full bg-white rounded-lg border shadow-md dark:bg-gray-800 dark:border-gray-700">
                {/* htmlFor when screen size is small */}
                <div className="sm:hidden">
                    <label htmlFor="tabs" className="sr-only">Select tab</label>
                    <select id="tabs" className="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 sm:text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option>YouTube Link</option>
                        <option>Upload file</option>
                        <option>UUID</option>
                    </select>
                </div>
                
                {/* Tab Headers */}
                <ul className="hidden text-sm font-medium text-center text-gray-500 rounded-lg divide-x divide-gray-200 sm:flex dark:divide-gray-600 dark:text-gray-400" id="fullWidthTab" data-tabs-toggle="#fullWidthTabContent" role="tablist">
                    <li className="w-full">
                        <button id="youtube-link-tab-header" data-tabs-target="#youtube-link-tab-content" type="button" role="tab" aria-controls="youtube-link-tab-content" aria-selected="true" className="inline-block p-4 w-full bg-gray-50 rounded-tl-lg hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 hover:text-blue-600 dark:hover:text-yellow-500">YouTube Link</button>
                    </li>
                    <li className="w-full">
                        <button id="upload-file-tab-header" data-tabs-target="#upload-file-tab-content" type="button" role="tab" aria-controls="upload-file-tab-content" aria-selected="false" className="inline-block p-4 w-full bg-gray-50 rounded-tl-lg hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 hover:text-blue-600 dark:hover:text-yellow-500">Upload file</button>
                    </li>
                    <li className="w-full">
                        <button id="use-uuid-tab-header" data-tabs-target="#use-uuid-tab-content" type="button" role="tab" aria-controls="use-uuid-tab-content" aria-selected="false" className="inline-block p-4 w-full bg-gray-50 rounded-tl-lg hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 hover:text-blue-600 dark:hover:text-yellow-500">UUID</button>
                    </li>
                </ul>
                
                {/* Tab Content */}
                <div id="fullWidthTabContent" className="border-t border-gray-200 dark:border-gray-600">
                    {/* YouTube Link */}
                    <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="youtube-link-tab-content" role="tabpanel" aria-labelledby="youtube-link-tab-header">
                        <form className="space-y-6" action="#">
                            <h5 className="text-xl font-medium text-gray-900 dark:text-white">Mine video with YouTube link</h5>
                            {/* YouTube Link */}
                            <div>
                                <label htmlFor="youtube-link-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">YouTube Link</label>
                                <input id="youtube-link-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="https://www.youtube.com/watch?v=....."/>
                            </div>
                            
                            {/* language */}
                            <div>
                                <label htmlFor="language" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Language</label>
                                <select defaultValue='auto' id="language" className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="auto">Auto detect</option>
                                    <option value="english">English</option>
                                    <option value="spanish">Spanish</option>
                                    <option value="italian">Italian</option>
                                    <option value="portuguese">Portuguese</option>
                                    <option value="german">German</option>
                                    <option value="japanese">Japanese</option>
                                </select>
                            </div>
                            {/* database */}
                            <div>
                                <label htmlFor="database" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Database</label>
                                <select defaultValue='server' id="database" className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="server">Server</option>
                                    <option value="local">Local</option>
                                </select>
                            </div>
                            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:focus:ring-yellow-700">Extract</button>
                        </form>
                    </div>
                    {/* Upload File */}
                    <div className="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="upload-file-tab-content" role="tabpanel" aria-labelledby="upload-file-tab-header">
                        <form className="space-y-6" action="#">
                            <h5 className="text-xl font-medium text-gray-900 dark:text-white">Mine video with file upload</h5>
                            {/* Upload File */}
                            <div id="upload-file-div">
                                <label htmlFor="upload-file-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">File</label>
                                <input id="upload-file-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="accepted format: mp3, mp4, or wav" />
                            </div>
        
                            
                            {/* language */}
                            <div>
                                <label htmlFor="language" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Language</label>
                                <select defaultValue='auto' id="language" className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="auto">Auto detect</option>
                                    <option value="english">English</option>
                                    <option value="spanish">Spanish</option>
                                    <option value="italian">Italian</option>
                                    <option value="portuguese">Portuguese</option>
                                    <option value="german">German</option>
                                    <option value="japanese">Japanese</option>
                                </select>
                            </div>
                            {/* database */}
                            <div>
                                <label htmlFor="database" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Database</label>
                                <select defaultValue='server' id="database" className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="server">Server</option>
                                    <option value="local">Local</option>
                                </select>
                            </div>
                            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:focus:ring-yellow-700">Extract</button>
                        </form>
                    </div>
                    {/* UUID */}
                    <div className="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="use-uuid-tab-content" role="tabpanel" aria-labelledby="use-uuid-tab-header">
                        <form className="space-y-6" action="#">
                            <h5 className="text-xl font-medium text-gray-900 dark:text-white">Mine video with UUID</h5>
                            {/* UUID */}
                            <div id="use-uuid-div">
                                <label htmlFor="use-uuid-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">UUID</label>
                                <input id="use-uuid-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="123e4567-e89b-12d3-a456-426614174000" />
                            </div>
        
                            
                            {/* language */}
                            <div>
                                <label htmlFor="language" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Language</label>
                                <select defaultValue='auto' id="language" className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="auto">Auto detect</option>
                                    <option value="english">English</option>
                                    <option value="spanish">Spanish</option>
                                    <option value="italian">Italian</option>
                                    <option value="portuguese">Portuguese</option>
                                    <option value="german">German</option>
                                    <option value="japanese">Japanese</option>
                                </select>
                            </div>
                            {/* database */}
                            <div>
                                <label htmlFor="database" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Database</label>
                                <select defaultValue='server' id="database" className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="server">Server</option>
                                    <option value="local">Local</option>
                                </select>
                            </div>
                            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:focus:ring-yellow-700">Extract</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
    
};

export default InputTabs;