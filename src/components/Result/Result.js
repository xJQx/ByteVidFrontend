import React, { useState } from 'react';

const Result = () => {
  const [tab, setTab] = useState('transcription');

  return (
    <div className='flex justify-center mt-10'>
      <div className='max-w-2xl w-full bg-white rounded-t-lg border shadow-md dark:bg-gray-800 dark:border-gray-700 overflow-hidden'>
        <TabContainer currTab={tab} setTab={setTab} />
        <ContentContainer tab={tab} />
      </div>
    </div>
  );
};

const TabContainer = ({ currTab, setTab }) => {
  const tabs = ['Transcription', 'Translation', 'Keywords', 'Summary'];
  const selectedTabStyles = [
    'text-blue-600',
    'dark:text-yellow-500',
    'border-blue-600',
    'dark:border-yellow-500',
    'bg-gray-100',
    'dark:bg-gray-600',
  ];
  const deselectedTabStyles = ['bg-gray-50', 'dark:bg-gray-700'];

  const NormalTab = () => {
    return (
      <div className='hidden text-sm font-medium text-center text-gray-500 rounded-lg divide-x divide-gray-200 sm:flex dark:divide-gray-600 dark:text-gray-400'>
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`w-full inline-block p-4 w-full hover:bg-gray-100 focus:outline-none dark:hover:bg-gray-600 hover:text-blue-600 dark:hover:text-yellow-500 
                ${
                  currTab === tab.toLowerCase()
                    ? selectedTabStyles.join(' ')
                    : deselectedTabStyles.join(' ')
                }`}
            onClick={() => setTab(tab.toLowerCase())}
          >
            {tab}
          </button>
        ))}
      </div>
    );
  };

  const SmallTab = () => {
    console.log(currTab);
    return (
      <div className='sm:hidden'>
        <label htmlFor='tabs' className='sr-only'>
          Select tab
        </label>
        <select
          id='tabs'
          className='bg-gray-50 border-0 border-b border-gray-200 text-gray-900 sm:text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 cursor-pointer'
        >
          {tabs.map((tab) => {
            return currTab === tab ? (
              <option key={tab} selected />
            ) : (
              <option key={tab} onClick={() => setTab(tab.toLowerCase())}>
                {tab}
              </option>
            );
          })}
        </select>
      </div>
    );
  };

  return (
    <>
      <NormalTab />
      <SmallTab />
    </>
  );
};

const ContentContainer = ({ tab }) => {
  const result = {
    transcript: `[0100-0200] Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n
    [0200-0300] Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n
    [0300-0400] It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n
    [0400-0500] It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    translation: `[0100-0200] 甲法乍成瓜學因它東燈找旁花彩右品。\n
      [0200-0300] 三木問花聽燈行抄爸住開久結言點幼十「幸不象」把我巾立；像交夕再樹重風止。\n
      [0300-0400] 生泉去聽畫「結耍知麻兒借過送」您位一且結雪包你放澡黑至耍干拍園朱姐問動，鳥澡布黑鳥一邊坡造媽星穴黑沒，黃洋尾愛！\n
      [0400-0500] 記乍珠母音家。人蝶時知抱種言「品老村登月秋東雪」愛苦但蝶天姐前立「他坡現正干自拍助河」交只服黃們主住。第言兄父乙昔故`,
    summary: {
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      image: '',
    },
    keywords: ['Lorem', 'Ipsum', 'dummy', 'typesetting'],
  };

  return (
    <div className='border-t border-gray-200 dark:border-gray-600 p-4'>
      <div className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left'>
        {tab === 'transcription' && (
          <TranscriptionContent content={result.transcript} />
        )}
        {tab === 'translation' && (
          <TranscriptionContent content={result.translation} />
        )}
        {tab === 'keywords' && <Keywords keywords={result.keywords} />}
        {tab === 'summary' && <Summary summary={result.summary} />}
      </div>
    </div>
  );
};

const TranscriptionDisplay = () => {};

const TranscriptionContent = ({ content }) => {
  return content.split('\n').map((text) => (
    <div key={Math.random()} className='mb-2'>
      {text}
    </div>
  ));
};

const Keywords = ({ keywords }) => {
  return (
    <div className='md:text-3xl text-xl text-center'>
      {keywords.map((keyword) => (
        <div key={keyword} className='mb-3'>
          {keyword}
        </div>
      ))}
    </div>
  );
};

const Summary = ({ summary }) => {
  return <div>{summary.text}</div>;
};

export default Result;
