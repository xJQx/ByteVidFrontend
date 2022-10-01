import React from 'react';
import Header from './components/Header/Header' 
import InputTabs from './components/InputTabs/InputTabs';
import ThemeMode from './components/ThemeMode/ThemeMode';

function App() {
  return (
    <div className="lg:text-center bg-stone-100 dark:bg-slate-800">
      <ThemeMode />
      <Header />
      <InputTabs />
    </div>
  );
}

export default App;
