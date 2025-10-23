import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LinaChat from './components/LinaChat';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SolutionsPage from './pages/SolutionsPage';
import AdvantagesPage from './pages/AdvantagesPage';
import ContactPage from './pages/ContactPage';
import MethodPage from './pages/MethodPage';
import EstimationPage from './pages/EstimationPage';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isChatMinimized, setIsChatMinimized] = useState(true);

  const handleLinaClick = () => {
    setIsChatOpen(true);
    setIsChatMinimized(false);
  };

  const handleChatClose = () => {
    setIsChatOpen(false);
    setIsChatMinimized(true);
  };

  const handleChatMinimize = () => {
    setIsChatMinimized(!isChatMinimized);
    if (!isChatOpen) {
      setIsChatOpen(true);
    }
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Header onLinaClick={handleLinaClick} />
        <Routes>
          <Route path="/" element={<HomePage onLinaClick={handleLinaClick} />} />
          <Route path="/solutions" element={<SolutionsPage onLinaClick={handleLinaClick} />} />
          <Route path="/avantages" element={<AdvantagesPage onLinaClick={handleLinaClick} />} />
          <Route path="/methode" element={<MethodPage onLinaClick={handleLinaClick} />} />
          <Route path="/apropos" element={<AboutPage onLinaClick={handleLinaClick} />} />
          <Route path="/estimation" element={<EstimationPage />} />
          <Route path="/contact" element={<ContactPage onLinaClick={handleLinaClick} />} />
        </Routes>
        <Footer onLinaClick={handleLinaClick} />
        <LinaChat
          isOpen={isChatOpen}
          onClose={handleChatClose}
          isMinimized={isChatMinimized}
          onMinimize={handleChatMinimize}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
