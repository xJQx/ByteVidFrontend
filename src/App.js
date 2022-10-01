import React from 'react';
import './App.css';
import Header from './components/Header/Header' 
import InputTabs from './components/InputTabs/InputTabs';
import ThemeMode from './components/ThemeMode/ThemeMode';

function App() {
  return (
    <div className="App">
      <ThemeMode />
      <Header />
      <InputTabs />
    </div>
  );
}

export default App;
