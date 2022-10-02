import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Alert from '../Alert/Alert';
import { isValidUuid } from '../InputTabs/UuidTab';
import Spinner from '../Spinner/Spinner';

const STATUS_DONE = 200;

const Result = () => {
  const { uuid } = useParams();
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState('');
  const handleErrorMessage = (message) => {
      setErrorMessage(message);
  }

  let [resultData, setResultData] = useState({status: 0});
  useEffect(() => {
    // invalid uuid -> navigate back to homepage
    if (!isValidUuid(uuid)) {
      alert('Invalid uuid!');
      navigate('/');
    }

    // get results (every sec)
    const getReqTimeout = setTimeout(() => {
      fetch(`http://127.0.0.1:5000/result/${uuid}`, {
        method: 'GET'
      })
        .then(res => res.json())
        .then(data => {
          // Error from server
          if (data.status === -2) {
            clearTimeout(getReqTimeout);
            return setErrorMessage(data.error_message);
          }

          // setResultData
          setResultData(resultData => ({...resultData, ...data}));
        });
    }, 1000);

    // if done, stop making GET requests
    if (resultData?.status === STATUS_DONE) clearTimeout(getReqTimeout);
    
  }, [uuid, navigate, resultData]);
  
  // ------------------------------------------------------------------------------------------------------------------ //

  const [tab, setTab] = useState('transcription');

  return (
    <>
      <div className='flex justify-center mt-10'>
        {resultData.status < 2 ? 
          <div className='scale-150 p-10'>
            <Spinner completionStatusId={2} curStatusId={resultData.status} text='We are working hard on your video... 🏃🏻‍♀️🏃🏻‍♂️' />
          </div>
          : (
          <div className='max-w-2xl w-full bg-white rounded-t-lg border shadow-md dark:bg-gray-800 dark:border-gray-700 overflow-hidden'>
            <TabContainer currTab={tab} setTab={setTab} />
            <ContentContainer tab={tab} resultData={resultData} />
          </div>
        )}
      </div>
      <div className="flex justify-center mt-10">
        <Alert color='rose' message={errorMessage} handleErrorMessage={handleErrorMessage} />
      </div>
    </>
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

const ContentContainer = ({ tab, resultData }) => {
  return (
    <div className='border-t border-gray-200 dark:border-gray-600 p-4'>
      <div className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left'>
        {tab === 'transcription' && (
          resultData.status < 2 ? <Spinner completionStatusId={2} curStatusId={resultData.status} text='Transcribing... ✍🏻' /> : <TranscriptionContent content={resultData.transcript} />
        )}

        {tab === 'translation' && (
          resultData.status < 6 ? <Spinner completionStatusId={6} curStatusId={resultData.status} text='Translating... 📖' /> : <TranscriptionContent content={resultData.translated} />
        )}
        {tab === 'keywords' && (
          resultData.status < 4 ? <Spinner completionStatusId={4} curStatusId={resultData.status} text='Generating keywords...' /> : <Keywords keywords={resultData.keywords} />
          )}
        {tab === 'summary' && (
          resultData.status < 7 ? <Spinner completionStatusId={7} curStatusId={resultData.status} text='Summarising... 🧾' /> : <Summary summaries={resultData.summaries} />
          )}
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

const Summary = ({ summaries }) => {
  const { uuid } = useParams();

  return (summaries.map((s, index) => {
    return (
      <div key={index}>
        {s?.image ? <img src={`http://127.0.0.1:5000/static/${uuid}/${s.image}`} alt={s.text}></img> : <></>}
        <div>{s.text}</div>
        <br/>
      </div>
    )
  }));
};


export default Result;
