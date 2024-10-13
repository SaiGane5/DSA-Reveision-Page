import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, BookOpen, Code, PenTool, Binary, GitBranch, Database, Cpu, Hash, Layers, Zap } from 'lucide-react';

const topics = [
  { id: 'arrays', title: 'Arrays and Strings', icon: Code },
  { id: 'variables', title: 'Variables and Data Types', icon: BookOpen },
  { id: 'control-flow', title: 'Control Flow', icon: PenTool },
  { id: 'linked-lists', title: 'Linked Lists', icon: GitBranch },
  { id: 'stacks-queues', title: 'Stacks and Queues', icon: Layers },
  { id: 'trees-graphs', title: 'Trees and Graphs', icon: GitBranch },
  { id: 'sorting-searching', title: 'Sorting and Searching Algorithms', icon: Binary },
  { id: 'dynamic-programming', title: 'Dynamic Programming', icon: Cpu },
  { id: 'greedy', title: 'Greedy Algorithms', icon: Zap },
  { id: 'hashing', title: 'Hashing', icon: Hash },
  { id: 'heap', title: 'Heap and Priority Queue', icon: Database },
  { id: 'bit-manipulation', title: 'Bit Manipulation', icon: Binary },
];

const HomePage: React.FC = () => {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to DSA Revision</h1>
        <p className="text-xl text-gray-300 mb-8">Master Data Structures and Algorithms in C++</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {topics.map((topic) => (
            <Link
              key={topic.id}
              to={`/topic/${topic.id}`}
              className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <topic.icon className="w-6 h-6" />
                  <span>{topic.title}</span>
                </div>
                <ChevronRight className="w-5 h-5" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Why DSA Revision?</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Comprehensive coverage of DSA topics</li>
          <li>Clear explanations with practical examples</li>
          <li>Interactive code editor for hands-on practice</li>
          <li>Curated interview questions from top companies</li>
          <li>Progress tracking to monitor your learning</li>
        </ul>
      </section>
    </div>
  );
};

export default HomePage;