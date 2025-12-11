import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Resume from './pages/Resume';
import About from './pages/About';

function App() {

  const [theme, setTheme] = useState('light');
  useEffect(() => {
    const savedTheme = localStorage.theme;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
      document.documentElement.style = 'color-scheme: dark;';
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style = '';
      setTheme('light');
    }
  }, []);
  const toggleTheme = () => {
    setTheme(isLightMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    document.documentElement.style = isDark ? 'color-scheme: dark;' : '';
    localStorage.theme = isDark ? 'dark' : 'light';
  }
  const isLightMode = theme === 'light';

  return (
    <BrowserRouter basename="/portfolio-chat-react">
      <Navigation 
        isLightMode={isLightMode}
        toggleTheme={toggleTheme}
        onSetTheme={setTheme} />
      <Routes>
        <Route path="/" element={<Home isLightMode={isLightMode} />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
