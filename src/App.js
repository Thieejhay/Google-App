import React, {useState} from 'react'
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Routes } from './components/Routes';

const App = () => {
    const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className={ darkTheme ? 'dark' : ''}>
        <div className="bg-white dark:bg-gray-900 dark:text-gray-50 min-h-screen font-sans">
        <NavBar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
        <Routes />
        <Footer />
        </div> 
    </div>
  )
}

export default App