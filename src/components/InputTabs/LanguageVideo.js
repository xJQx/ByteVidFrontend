import React from 'react'

const LanguageVideo = () => {
    const languagesList = [
        'English', 'Spanish', 'Italian', 'Portuguese', 'German', 'Japanese',
        'Russian', 'Polish', 'French', 'Catalan', 'Dutch', 'Indonesian', 'Turkish',
        'Malay', 'Ukrainian', 'Swedish', 'Vietnamese', 'Norwegian', 'Finnish', 'Thai',
        'Korean', 'Romanian', 'Slovak', 'Tagalog', 'Croatian', 'Danish', 'Czech',
        'Arabic', 'Bulgarian', 'Greek', 'Galician', 'Chinese', 'Tamil', 'Macedonian',
        'Bosnian', 'Hungarian', ' Urdu', 'Estonian', 'Hindi', 'Slovneian', 'Latvian',
        'Azerbaijani', 'Serbian', 'Hebrew', 'Lithuanian', 'Persian', 'Welsh', 'Afrikaans',
        'Icelandic', 'Marathi', 'Kazakh', 'Maori', 'Swahili', 'Nepali', 'Armenian', 'Belarusian',
        'Kannada', 'Tajik', 'Occitan', 'Lingala', 'Maltese', 'Luxembourgish', 'Hausa',
        'Javanese', 'Pashto', 'Uzbek', 'Khmer', 'Georgian', 'Telugu',
        'Malayalam', 'Lao', 'Punjabi', 'Somali', 'Gujarati', 'Bengali', 'Assamese', 'Mongolian',
        'Yoruba', 'Myanmar', 'Amharic', 'Shona', 'Sindhi'
    ];

    return (
        <div>
            <label htmlFor="language-video" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Video Language</label>
            <select defaultValue='' id="language-video" className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value=''>Auto detect</option>
                {languagesList.map((l) => (
                    <option key={l} value={l}>{l}</option>
                ))}
            </select>
        </div>
    )
}

export default LanguageVideo;