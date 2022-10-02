import React from 'react'

const DatabaseType = () => {
  const onChangeHandler = (e) => {
    localStorage.setItem('server', e.target.value);
  }
  return (
    <div>
        <label htmlFor="database" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Database</label>
        <select onChange={(e) => onChangeHandler(e)} defaultValue='cloud' id="database" className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="cloud">Cloud (max size: 100MB)</option>
            <option value="local">Local</option>
        </select>
    </div>
  )
}

export default DatabaseType