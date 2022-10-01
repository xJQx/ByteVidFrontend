import React from 'react';
import Header from './components/Header/Header';
import InputTabs from './components/InputTabs/InputTabs';
import ThemeMode from './components/ThemeMode/ThemeMode';
import ResultTabs from './components/ResultTabs/ResultTabs';

function App() {
  return (
    <div className='lg:text-center bg-stone-100 dark:bg-slate-800'>
      <ThemeMode />
      <Header />
      <ResultTabs />
      <InputTabs />
    </div>
  );
}

export default App;
