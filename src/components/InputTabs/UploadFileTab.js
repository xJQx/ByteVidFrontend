import React from 'react'
import DatabaseType from './DatabaseType';
import Languages from './Languages';

const UploadFileTab = () => {
    let sendFormData = new FormData();

    const handleOnSubmit = (e) => {
        e.preventDefault();
        
        sendFormData.append('language', e.target[1].value);
        sendFormData.append('database-type', e.target[2].value);
    }
    const handleFileOnChange = (event) => {
        sendFormData = new FormData();
        sendFormData.append('file', event.target.files[0]);
    }

    return (
        <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="upload-file-tab-content" role="tabpanel" aria-labelledby="upload-file-tab-header">
            <form className="space-y-6" onSubmit={handleOnSubmit}>
                <h5 className="text-xl font-medium text-gray-900 dark:text-white">Extract with file upload</h5>
                {/* Upload File */}
                <div id="upload-file-div">
                    <label htmlFor="upload-file-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">File</label>
                    <input id="upload-file-input" type="file" accept="video/*" onChange={handleFileOnChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="accepted format: mp3, mp4, or wav" />
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

export default UploadFileTab;