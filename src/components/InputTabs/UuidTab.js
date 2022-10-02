import React from 'react'
import { useNavigate } from 'react-router-dom';
import DatabaseType from './DatabaseType';

const isValidUuid = (s) => {
    return s.match("^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$");
}

const UuidTab = ({ handleErrorMessage }) => {
    const navigate = useNavigate();

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        let uuid = e.target[0].value;
        let server = e.target[1].value;

        if (!isValidUuid(uuid)) return handleErrorMessage('Invalid uuid!');

        let sendFormData = new FormData();
        sendFormData.append('uuid', uuid);
        sendFormData.append('server', server);

        localStorage.setItem('server', server);

        // check if uuid exist in database
        let fetchUrl = (server === 'cloud') ? `https://ayaka-apps.shn.hk/bytevid/result/${uuid}` : `http://127.0.0.1:5000/result/${uuid}`;
        const res = await fetch(fetchUrl);
        const data = await res.json();

        if (data.status === -1) return handleErrorMessage('Uuid does not exist in database!');
        else if (data.status === 500) return handleErrorMessage('Process failed.');

        // navigate to page
        navigate(`/ByteVidFrontend/result/${uuid}`);
    }

    return (
        <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="use-uuid-tab-content" role="tabpanel" aria-labelledby="use-uuid-tab-header">
            <form className="space-y-6" onSubmit={handleOnSubmit}>
                <h5 className="text-xl font-medium text-gray-900 dark:text-white">Extract with UUID</h5>
                {/* UUID */}
                <div id="use-uuid-div">
                    <label htmlFor="use-uuid-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">UUID</label>
                    <input id="use-uuid-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="123e4567-e89b-12d3-a456-426614174000" />
                </div>

                {/* Server */}
                <DatabaseType />
                
                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:focus:ring-yellow-700">Extract</button>
            </form>
        </div>
    )
}

export default UuidTab;
export { isValidUuid };