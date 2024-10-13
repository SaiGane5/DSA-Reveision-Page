import React from 'react';
import { ExternalLink } from 'lucide-react';

const resources = [
  {
    title: 'Introduction to Algorithms',
    author: 'Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, and Clifford Stein',
    type: 'Book',
    link: 'https://mitpress.mit.edu/books/introduction-algorithms-third-edition',
  },
  {
    title: 'GeeksforGeeks',
    author: 'GeeksforGeeks',
    type: 'Website',
    link: 'https://www.geeksforgeeks.org/',
  },
  {
    title: 'LeetCode',
    author: 'LeetCode',
    type: 'Coding Platform',
    link: 'https://leetcode.com/',
  },
  // Add more resources here
];

const ResourcesPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Additional Resources</h1>
      <div className="space-y-6">
        {resources.map((resource, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">{resource.title}</h2>
            <p className="text-gray-300 mb-2">by {resource.author}</p>
            <p className="text-gray-400 mb-2">Type: {resource.type}</p>
            <a
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 flex items-center"
            >
              Visit Resource <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourcesPage;