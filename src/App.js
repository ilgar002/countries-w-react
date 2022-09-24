import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Detail from './components/Main/Detail/Detail'

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || "dark")
  return (
    <div className={theme === 'dark' ? "container" : "container light-mode"}>
      <Header
        theme={theme}
        setTheme={setTheme}
      />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/detailed/:id' element={<Detail />} />
      </Routes >
      {/* <Main /> */}
      {/* <Detail /> */}
    </div>
  )
}

export default App