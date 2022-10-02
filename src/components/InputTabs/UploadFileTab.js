import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import DatabaseType from './DatabaseType';
import LanguageVideo from './LanguageVideo';
import LanguageTranslated from './LanguageTranslated';
import Spinner from '../Spinner/Spinner'

const UploadFileTab = ({ handleErrorMessage }) => {
    const navigate = useNavigate();
    let sendFormData = new FormData();
    let [submitedBool, setSubmitedBool] = useState(false);

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        let videoLanguage = e.target[1].value;
        let translateLanguage = e.target[2].value;
        let server = e.target[3].value;
        
        
        sendFormData.append('type', 'upload');
        sendFormData.append('videoLanguage', videoLanguage);
        sendFormData.append('translateLanguage', translateLanguage);
        sendFormData.append('server', server);
        
        let file = sendFormData.get('file');
        
        if (!file) return handleErrorMessage('Please upload valid video file!');
        else if (server === 'cloud' && file.size >= 1000000) return handleErrorMessage('Maximum file size is 100MB!');

        setSubmitedBool(true);

        // ----- POST ----- //
        let fetchUrl = (server === 'cloud') ? 'https://ayaka-apps.shn.hk/bytevid/video' : 'http://127.0.0.1:5000/video';
        const res = await fetch(fetchUrl, {
            method: 'POST',
            body: sendFormData,
        }); 
        const uuid = await res.text();

        navigate(`result/${uuid}`);
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
                <LanguageVideo />

                {/* Translation */}
                <LanguageTranslated />

                {/* database */}
                <DatabaseType />
                {submitedBool ?
                    <>
                        <button disabled type="submit" className="w-full text-white bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-600 dark:focus:ring-yellow-700">Uploading...</button>
                        <Spinner completionStatusId={1} curStatusId={0} text='We are working hard on your video... 🏃🏻‍♀️🏃🏻‍♂️' />
                    </>
                    : <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:focus:ring-yellow-700">Upload</button>
                }
            </form>
        </div>
    )
}

export default UploadFileTab;