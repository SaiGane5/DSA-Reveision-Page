import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Search } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 shadow-md">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
          <BookOpen className="w-8 h-8" />
          <span>DSA Revision</span>
        </Link>
        <div className="flex items-center space-x-4">
          <Link to="/search" className="flex items-center space-x-1 hover:text-gray-300">
            <Search className="w-5 h-5" />
            <span>Search</span>
          </Link>
          <Link to="/glossary" className="hover:text-gray-300">Glossary</Link>
          <Link to="/resources" className="hover:text-gray-300">Resources</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;