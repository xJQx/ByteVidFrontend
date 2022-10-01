import React from 'react';
import Header from './components/Header/Header';
import InputTabs from './components/InputTabs/InputTabs';
import ThemeMode from './components/ThemeMode/ThemeMode';
import Result from './components/Result/Result';

function App() {
  return (
    <div className='lg:text-center bg-stone-100 dark:bg-slate-800'>
      <ThemeMode />
      <Header />
      <InputTabs />
      <Result />
    </div>
  );
}

export default App;
