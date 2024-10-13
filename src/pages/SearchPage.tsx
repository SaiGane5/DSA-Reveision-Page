import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

// Example list of topics (including the new topics)
const topics = [
  {
    id: 'arrays',
    title: 'Arrays and Strings',
    content: 'Arrays and Strings are fundamental data structures.',
  },
  {
    id: 'linked-lists',
    title: 'Linked Lists',
    content: 'Linked Lists are linear data structures with nodes.',
  },
  {
    id: 'control-flow',
    title: 'Control Flow',
    content: 'Control flow refers to the order in which instructions are executed.',
  },
  {
    id: 'sorting-searching',
    title: 'Sorting and Searching Algorithms',
    content: 'Sorting and searching are crucial in optimizing data.',
  },
  {
    id: 'hashing',
    title: 'Hashing',
    content: 'Hashing is a technique used to uniquely identify a specific object from a group of similar objects.',
  },
  {
    id: 'bit-manipulation',
    title: 'Bit Manipulation',
    content: 'Bit manipulation refers to the act of algorithmically manipulating bits or binary digits.',
  },
  {
    id: 'heap',
    title: 'Heap and Priority Queue',
    content: 'A heap is a special tree-based data structure that satisfies the heap property.',
  },
  {
    id: 'variable',
    title: 'Variables and Data Types',
    content: 'Variables are symbolic names used to store data that can be used and manipulated in programs',
  },
  {
    id: 'stacks-queues',
    title: 'Stacks and Queues',
    content: 'Stacks and queues are linear data structures used for managing data in a sequential manner',
  },
  {
    id: 'trees-graphs',
    title: 'Trees and Graphs',
    content: 'Trees and graphs are hierarchical and interconnected data structures',
  },
  {
    id: 'dynamic-programming',
    title: 'Dynamic Programming',
    content: 'Dynamic Programming (DP) is an optimization technique that breaks a problem into smaller overlapping subproblems and stores their solutions to avoid redundant computations',
  },
  {
    id: 'greedy',
    title: 'Greedy Algorithms',
    content: 'Greedy algorithms build up a solution piece by piece, always choosing the next piece that offers the most immediate benefit',
  },
  // Add more topics here if necessary
];

const SearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTopics, setFilteredTopics] = useState(topics);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple search algorithm: Filter topics based on the search term
    const searchQuery = searchTerm.toLowerCase();
    const results = topics.filter(
      (topic) =>
        topic.title.toLowerCase().includes(searchQuery) ||
        topic.content.toLowerCase().includes(searchQuery)
    );

    setFilteredTopics(results);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Search DSA Topics</h1>
      <form onSubmit={handleSearch} className="mb-8">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for topics, algorithms, or concepts..."
            className="w-full py-2 px-4 pr-10 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="absolute right-2 top-2 text-gray-400 hover:text-white"
          >
            <Search className="w-6 h-6" />
          </button>
        </div>
      </form>

      <div className="bg-gray-800 rounded-lg p-4">
        {filteredTopics.length > 0 ? (
          <ul>
            {filteredTopics.map((topic) => (
              <li key={topic.id} className="border-b border-gray-700 py-2">
                <Link
                  to={`/topic/${topic.id}`}
                  className="text-lg font-bold text-blue-400 hover:underline"
                >
                  {topic.title}
                </Link>
                <p className="text-gray-400">{topic.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400">No topics found for "{searchTerm}".</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
