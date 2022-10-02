import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import InputTabs from './components/InputTabs/InputTabs';
import ThemeMode from './components/ThemeMode/ThemeMode';
import Result from './components/Result/Result';

function App() {
  return (
    <div className='lg:text-center bg-stone-100 dark:bg-slate-800'>
      <ThemeMode />
      <Header />
      <Routes>
        <Route path='/ByteVidFrontend/' element={<InputTabs />} />
        <Route path='/ByteVidFrontend/result/:uuid' element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
