import React, { useState } from 'react'
import DatabaseType from './DatabaseType';
import Languages from './Languages';

const UploadFileTab = () => {
    const [base64String, setBase64String] = useState("");

    const handleOnSubmit = (e) => {
        e.preventDefault();

        let uploadedFile = e.target[0].value;
        let language = e.target[1].value;
        let databaseType = e.target[2].value;
        
        console.log(base64String);
    }
    const handleFileOnChange = (event) => {
        console.log(event.target.files[0]);
        let reader = new FileReader();

        reader.onloadend = () => {
            alert('file uploaded!');
            let result = reader.result; // base64 data
            setBase64String(result);
        };

        reader.readAsDataURL(event.target.files[0]);
    }

    return (
        <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="upload-file-tab-content" role="tabpanel" aria-labelledby="upload-file-tab-header">
            <form className="space-y-6" onSubmit={handleOnSubmit}>
                <h5 className="text-xl font-medium text-gray-900 dark:text-white">Mine video with file upload</h5>
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