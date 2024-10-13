import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import TopicPage from './pages/TopicPage';
import SearchPage from './pages/SearchPage';
import GlossaryPage from './pages/GlossaryPage';
import ResourcesPage from './pages/ResourcesPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/topic/:topicId" element={<TopicPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/glossary" element={<GlossaryPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;