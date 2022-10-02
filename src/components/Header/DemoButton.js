import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const DemoButton = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch('https://ayaka-apps.shn.hk/bytevid/result/85bbf493-58a9-40cd-8bf6-e71e28071d8f');
        const data = await res.json();

        if (data.status === -1) return alert('Uuid does not exist in database!');
        else if (data.status === 500) return alert('Process failed.');

        localStorage.setItem('server', 'cloud');

        // // navigate to page
        if (location.pathname.startsWith('/ByteVidFrontend/result/') && location.pathname !== `/ByteVidFrontend/result/85bbf493-58a9-40cd-8bf6-e71e28071d8f`) {
            navigate(`/ByteVidFrontend/result/85bbf493-58a9-40cd-8bf6-e71e28071d8f`);
            navigate(0); // refresh page to re-render
        } else navigate(`/ByteVidFrontend/result/85bbf493-58a9-40cd-8bf6-e71e28071d8f`);
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit} className="mt-2 max-w-2xl text-md text-gray-500 mx-auto dark:text-gray-300">
                View a preprocessed result of a lecture video&nbsp;
                <button type="submit" className="underline text-indigo-700 hover:text-blue-800 focus:text-blue-800 font-medium text-center dark:text-yellow-500 dark:hover:text-yellow-600 dark:focus:text-yellow-600">here</button>
            </form>
        </div>
    )
}

export default DemoButton