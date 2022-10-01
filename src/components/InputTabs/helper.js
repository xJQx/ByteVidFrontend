const displayInputTab = (type) => {
    // update tab color & display the correct tab info
    updateTabHeaderClassList(type);
    updateTabContentDisplay(type);
};
const updateTabHeaderClassList = (type) => {
    // tab header
    var youtubeLinkTabHeader = document.querySelector('#youtube-link-tab-header');
    var uploadFileTabHeader = document.querySelector('#upload-file-tab-header');
    var useUuidTabHeader = document.querySelector('#use-uuid-tab-header');

    // selected tab class list
    var selectedTabHeaderClassList = ['text-blue-600', 'dark:text-yellow-500', 'border-blue-600', 'dark:border-yellow-500', 'bg-gray-100', 'dark:bg-gray-600'];
    var selectedTabHeaderDeselectClassList = ['bg-gray-50', 'dark:bg-gray-700'];

    // update tab header class list
    (type === 'youtube-link') ? youtubeLinkTabHeader.classList.add(...selectedTabHeaderClassList) : youtubeLinkTabHeader.classList.remove(...selectedTabHeaderClassList);
    (type === 'youtube-link') ? youtubeLinkTabHeader.classList.remove(...selectedTabHeaderDeselectClassList) : youtubeLinkTabHeader.classList.add(...selectedTabHeaderDeselectClassList);
    
    (type === 'upload-file') ? uploadFileTabHeader.classList.add(...selectedTabHeaderClassList) : uploadFileTabHeader.classList.remove(...selectedTabHeaderClassList);
    (type === 'upload-file') ? uploadFileTabHeader.classList.remove(...selectedTabHeaderDeselectClassList) : uploadFileTabHeader.classList.add(...selectedTabHeaderDeselectClassList);

    (type === 'use-uuid') ? useUuidTabHeader.classList.add(...selectedTabHeaderClassList) : useUuidTabHeader.classList.remove(...selectedTabHeaderClassList);
    (type === 'use-uuid') ? useUuidTabHeader.classList.remove(...selectedTabHeaderDeselectClassList) : useUuidTabHeader.classList.add(...selectedTabHeaderDeselectClassList);
};
const updateTabContentDisplay = (type) => {
    // tab content
    var youtubeLinkTabContent = document.querySelector('#youtube-link-tab-content');
    var uploadFileTabContent = document.querySelector('#upload-file-tab-content');
    var useUuidTabContent = document.querySelector('#use-uuid-tab-content');

    // update tab header class list
    (type === 'youtube-link') ? youtubeLinkTabContent.classList.remove('hidden') : youtubeLinkTabContent.classList.add('hidden');
    (type === 'upload-file') ? uploadFileTabContent.classList.remove('hidden') : uploadFileTabContent.classList.add('hidden');
    (type === 'use-uuid') ? useUuidTabContent.classList.remove('hidden') : useUuidTabContent.classList.add('hidden');
};

export { displayInputTab, updateTabHeaderClassList, updateTabContentDisplay };