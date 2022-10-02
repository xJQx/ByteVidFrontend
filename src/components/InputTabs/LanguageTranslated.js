import React from 'react'

const LanguageTranslated = () => {
    const languagesDict = {
        'ar': 'Arabic', 'bg': 'Bulgarian', 'cs': 'Czech', 'da': 'Danish', 'de': 'German', 
        'el': 'Greek', 'en': 'English', 'es': 'Spanish', 'et': 'Estonian', 'fi': 'Finnish' ,'fr': 'French',
        'hu': 'Hungarian', 'it': 'Italian', 'ja': 'Japanese', 'ko': 'Korean', 'nl': 'Dutch', 'pl': 'Polish',
        'pt': 'Portuguese', 'ro': 'Romanian', 'ru': 'Russian', 'sl': 'Slovenian', 'sv': 'Swedish', 'th': 'Thai',
        'vi': 'Vietnamese', 'zh-Hans': 'Chinese (Simplified)', 'zh-Hant': 'Chinese (Traditional)', 'lzh': 'Classical Chinese'
    }

    return (
        <div>
            <label htmlFor="language-translated" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Translation</label>
            <select defaultValue='' id="language-translated" className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="">No translation</option>
                {Object.keys(languagesDict).map((l) => (
                    <option key={l} value={l}>{languagesDict[l]}</option>
                ))}
            </select>
        </div>
    )
}

export default LanguageTranslated