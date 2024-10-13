import React from 'react';

const glossaryTerms = [
  { term: 'Algorithm', definition: 'A step-by-step procedure or formula for solving a problem.' },
  { term: 'Data Structure', definition: 'A way of organizing and storing data for efficient access and modification.' },
  { term: 'Time Complexity', definition: 'A measure of the amount of time an algorithm takes to complete as a function of the input size.' },
  { term: 'Space Complexity', definition: 'A measure of the amount of memory an algorithm uses as a function of the input size.' },
  { term: 'Big O Notation', definition: 'A mathematical notation used to describe the upper bound of an algorithm\'s time or space complexity.' },
  // Add more terms here
];

const GlossaryPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">DSA Glossary</h1>
      <div className="space-y-6">
        {glossaryTerms.map((item, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">{item.term}</h2>
            <p className="text-gray-300">{item.definition}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GlossaryPage;