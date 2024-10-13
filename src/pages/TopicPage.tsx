import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm'; // GitHub Flavored Markdown plugin
import 'github-markdown-css/github-markdown.css'; // GitHub markdown styles

const topics = {
  arrays: {
    title: 'Arrays and Strings',
    content: `
## Arrays and Strings

Arrays are fundamental data structures that store elements of the same type in contiguous memory locations. Strings, in many programming languages, are often implemented as arrays of characters.

### Key Concepts

1. **Static vs Dynamic Arrays**
   - Static arrays have a fixed size determined at compile-time
   - Dynamic arrays (like std::vector in C++) can resize at runtime

2. **Multi-dimensional Arrays**
   - 2D arrays (matrices) and higher dimensions
   - Row-major vs Column-major order

3. **String Manipulation**
   - String concatenation, substring, and searching
   - C-style strings vs std::string in C++

### Example: Dynamic Array (Vector) Operations

\`\`\`cpp
#include <iostream>
#include <vector>

int main() {
    std::vector<int> numbers = {1, 2, 3, 4, 5};
    
    // Adding elements
    numbers.push_back(6);  // Adds 6 to the end
    
    // Accessing elements
    std::cout << "First element: " << numbers[0] << std::endl;
    
    // Iterating through the vector
    for (int num : numbers) {
        std::cout << num << " ";
    }
    std::cout << std::endl;
    
    // Removing elements
    numbers.pop_back();  // Removes the last element
    
    // Size of the vector
    std::cout << "Size: " << numbers.size() << std::endl;
    
    return 0;
}
\`\`\`

### Common Operations and Time Complexity

| Operation | Static Array | Dynamic Array (Average Case) |
|-----------|--------------|------------------------------|
| Access    | O(1)         | O(1)                         |
| Search    | O(n)         | O(n)                         |
| Insertion | N/A          | O(1) at end, O(n) otherwise  |
| Deletion  | N/A          | O(1) at end, O(n) otherwise  |

### Practice Question

Write a function to rotate a square matrix (2D array) by 90 degrees clockwise.

### Interview Question

Given an array of integers, find the contiguous subarray with the largest sum. This is known as the "Maximum Subarray Problem" and can be solved efficiently using Kadane's algorithm.
    `,
  },
  variables: {
    title: 'Variables and Data Types',
    content: `
## Variables and Data Types

Variables are symbolic names used to store data that can be used and manipulated in programs. Data types specify the type of data that can be stored in a variable.

### Key Concepts

1. **Primitive Data Types**
   - **Integer (int)**: Whole numbers without decimals
   - **Floating Point (float, double)**: Numbers with decimals
   - **Character (char)**: Single characters, usually represented in single quotes
   - **Boolean (bool)**: Represents true or false values

2. **Derived Data Types**
   - Arrays, pointers, references, and user-defined types like structures and unions in C++

3. **Type Casting**
   - **Implicit Casting**: Automatic type conversion by the compiler
   - **Explicit Casting**: Manual type conversion by the programmer

### Example: Variable Declaration and Initialization in C++

\`\`\`cpp
#include <iostream>

int main() {
    int age = 21;           // Integer type variable
    float height = 5.9;     // Floating-point type variable
    char initial = 'A';     // Character type variable
    bool isStudent = true;  // Boolean type variable
    
    std::cout << "Age: " << age << std::endl;
    std::cout << "Height: " << height << std::endl;
    std::cout << "Initial: " << initial << std::endl;
    std::cout << "Is Student: " << isStudent << std::endl;

    return 0;
}
\`\`\`

### Common Operations

| Operation         | Example            |
|-------------------|--------------------|
| Assignment        | \`int x = 5;\`      |
| Arithmetic        | \`x + y, x * y\`    |
| Comparison        | \`x == y, x < y\`   |
| Logical Operators | \`&&, ||, !\`       |

### Practice Question

Write a C++ program to swap two variables without using a third variable.

### Interview Question

How are variables stored in memory, and how does the stack differ from the heap in terms of memory management?
    `,
  },
  'control-flow': {
    title: 'Control Flow',
    content: `
  ## Control Flow
  
  Control flow refers to the order in which the instructions or statements of a program are executed. In most programming languages, there are three main types of control flow mechanisms: conditional statements, loops, and branching.
  
  ### Key Concepts
  
  1. **Conditional Statements**
     - **if-else statements**: Execute a block of code based on a condition
     - **switch-case statements**: Select one of many code blocks to execute
  
  2. **Loops**
     - **For Loop**: Iterates over a block of code a specified number of times
     - **While Loop**: Repeats code while a condition is true
     - **Do-While Loop**: Executes code at least once before checking the condition
  
  3. **Branching**
     - **break**: Terminates the current loop
     - **continue**: Skips the current iteration of the loop
     - **return**: Exits from a function
  
  ### Example: Using Control Flow in C++
  
  \`\`\`cpp
  #include <iostream>
  
  int main() {
      int num = 10;
  
      // if-else statement
      if (num > 0) {
          std::cout << "Positive number" << std::endl;
      } else {
          std::cout << "Negative number" << std::endl;
      }
  
      // for loop
      for (int i = 0; i < 5; i++) {
          std::cout << "Iteration: " << i << std::endl;
      }
  
      return 0;
  }
  \`\`\`
  
  ### Common Control Flow Constructs and Time Complexity
  
  | Control Flow   | Time Complexity |
  |----------------|-----------------|
  | if-else        | O(1)            |
  | switch-case    | O(1)            |
  | for/while loop | O(n)            |
  
  ### Practice Question
  
  Write a program to print the Fibonacci series up to a given number using loops.
  
  ### Interview Question
  
  What is the difference between a while loop and a do-while loop in terms of execution?
    `,
  },
  'linked-lists': {
    title: 'Linked Lists',
    content: `
  ## Linked Lists
  
  Linked lists are dynamic data structures consisting of nodes that contain data and a reference (or pointer) to the next node in the sequence.
  
  ### Key Concepts
  
  1. **Singly vs Doubly Linked Lists**
     - Singly Linked List: Each node has a pointer to the next node
     - Doubly Linked List: Each node has pointers to both the next and previous nodes
  
  2. **Circular Linked Lists**
     - The last node points back to the first node, creating a circular structure.
  
  ### Example: Singly Linked List in C++
  
  \`\`\`cpp
  #include <iostream>
  
  struct Node {
      int data;
      Node* next;
  };
  
  void insertAtHead(Node*& head, int value) {
      Node* newNode = new Node();
      newNode->data = value;
      newNode->next = head;
      head = newNode;
  }
  
  void printList(Node* head) {
      Node* temp = head;
      while (temp != nullptr) {
          std::cout << temp->data << " ";
          temp = temp->next;
      }
      std::cout << std::endl;
  }
  
  int main() {
      Node* head = nullptr;
      
      insertAtHead(head, 1);
      insertAtHead(head, 2);
      insertAtHead(head, 3);
      
      printList(head);
      
      return 0;
  }
  \`\`\`
  
  ### Common Operations and Time Complexity
  
  | Operation  | Singly Linked List | Doubly Linked List |
  |------------|--------------------|--------------------|
  | Access     | O(n)               | O(n)               |
  | Insertion  | O(1) at head       | O(1) at head       |
  | Deletion   | O(1) at head       | O(1) at head       |
  
  ### Practice Question
  
  Reverse a singly linked list.
  
  ### Interview Question
  
  Find the middle node of a singly linked list in one pass.
    `,
  },
  'stacks-queues': {
    title: 'Stacks and Queues',
    content: `
  ## Stacks and Queues
  
  Stacks and queues are linear data structures used for managing data in a sequential manner.
  
  ### Key Concepts
  
  1. **Stack**
     - Follows the Last In First Out (LIFO) principle.
     - Primary operations: **push**, **pop**, and **peek**.
  
  2. **Queue**
     - Follows the First In First Out (FIFO) principle.
     - Primary operations: **enqueue** and **dequeue**.
  
  3. **Applications**
     - Stacks: Function call management (recursion), expression evaluation (infix to postfix).
     - Queues: Scheduling, breadth-first search (BFS).
  
  ### Example: Stack Operations in C++
  
  \`\`\`cpp
  #include <iostream>
  #include <stack>
  
  int main() {
      std::stack<int> s;
      
      s.push(10);
      s.push(20);
      s.push(30);
      
      std::cout << "Top of stack: " << s.top() << std::endl;
      
      s.pop();
      std::cout << "After pop, top: " << s.top() << std::endl;
      
      return 0;
  }
  \`\`\`
  
  ### Example: Queue Operations in C++
  
  \`\`\`cpp
  #include <iostream>
  #include <queue>
  
  int main() {
      std::queue<int> q;
      
      q.push(10);
      q.push(20);
      q.push(30);
      
      std::cout << "Front of queue: " << q.front() << std::endl;
      std::cout << "Back of queue: " << q.back() << std::endl;
      
      q.pop();
      std::cout << "After dequeue, front: " << q.front() << std::endl;
      
      return 0;
  }
  \`\`\`
  
  ### Time Complexity
  
  | Operation  | Stack | Queue |
  |------------|-------|-------|
  | Push       | O(1)  | O(1)  |
  | Pop        | O(1)  | O(1)  |
  | Peek/Front | O(1)  | O(1)  |
  
  ### Practice Question
  
  Implement a queue using two stacks.
  
  ### Interview Question
  
  Explain the difference between a stack and a queue, and when you would use each in an algorithm.
    `,
  },
  'trees-graphs': {
    title: 'Trees and Graphs',
    content: `
  ## Trees and Graphs
  
  Trees and graphs are hierarchical and interconnected data structures.
  
  ### Key Concepts
  
  1. **Trees**
     - A tree is a hierarchical structure consisting of nodes.
     - **Binary Trees**: Each node has at most two children.
     - **Binary Search Trees** (BST): A binary tree where the left child is smaller, and the right child is larger.
  
  2. **Graphs**
     - A graph is a collection of nodes (vertices) connected by edges.
     - Graphs can be **directed** or **undirected**, **weighted** or **unweighted**.
  
  3. **Tree Traversals**
     - **In-order**, **Pre-order**, **Post-order**, and **Level-order**.
  
  4. **Graph Traversals**
     - **Depth-First Search** (DFS) and **Breadth-First Search** (BFS).
  
  ### Example: In-order Traversal of a Binary Tree in C++
  
  \`\`\`cpp
  #include <iostream>
  
  struct Node {
      int data;
      Node* left;
      Node* right;
  };
  
  void inOrderTraversal(Node* root) {
      if (root == nullptr) return;
      
      inOrderTraversal(root->left);
      std::cout << root->data << " ";
      inOrderTraversal(root->right);
  }
  
  int main() {
      Node* root = new Node{10, nullptr, nullptr};
      root->left = new Node{5, nullptr, nullptr};
      root->right = new Node{20, nullptr, nullptr};
      
      inOrderTraversal(root);
      
      return 0;
  }
  \`\`\`
  
  ### Example: BFS in a Graph in C++
  
  \`\`\`cpp
  #include <iostream>
  #include <vector>
  #include <queue>
  
  void bfs(int start, const std::vector<std::vector<int>>& adjList) {
      std::vector<bool> visited(adjList.size(), false);
      std::queue<int> q;
      
      visited[start] = true;
      q.push(start);
      
      while (!q.empty()) {
          int node = q.front();
          q.pop();
          
          std::cout << node << " ";
          
          for (int neighbor : adjList[node]) {
              if (!visited[neighbor]) {
                  visited[neighbor] = true;
                  q.push(neighbor);
              }
          }
      }
  }
  
  int main() {
      std::vector<std::vector<int>> adjList = {{1, 2}, {0, 3, 4}, {0, 5}, {1}, {1}, {2}};
      bfs(0, adjList);
      
      return 0;
  }
  \`\`\`
  
  ### Time Complexity
  
  | Operation        | Binary Tree  | Graph (DFS/BFS) |
  |------------------|--------------|-----------------|
  | Insertion        | O(log n)     | O(V + E)        |
  | Search/Traversal | O(log n)     | O(V + E)        |
  | Deletion         | O(log n)     | O(V + E)        |
  
  ### Practice Question
  
  Find the height of a binary tree.
  
  ### Interview Question
  
  Explain the difference between DFS and BFS. When would you use each traversal?
    `,
  },
  'sorting-searching': {
    title: 'Sorting and Searching Algorithms',
    content: `
  ## Sorting and Searching Algorithms
  
  Sorting and searching are fundamental operations on data that help in organizing and retrieving information efficiently.
  
  ### Key Concepts
  
  1. **Sorting Algorithms**
     - **Bubble Sort**: Repeatedly swaps adjacent elements if they are in the wrong order.
     - **Selection Sort**: Selects the smallest element from the unsorted part and swaps it with the first element.
     - **Merge Sort**: A divide-and-conquer algorithm that divides the array into halves, sorts them, and merges them.
     - **Quick Sort**: A divide-and-conquer algorithm that selects a pivot and partitions the array around the pivot.
     - **Insertion Sort**: Builds the sorted array one element at a time by comparing each element with the sorted part.
  
  2. **Searching Algorithms**
     - **Linear Search**: Sequentially checks each element of the list until a match is found or the list is exhausted.
     - **Binary Search**: Searches in a sorted array by repeatedly dividing the search interval in half.
  
  ### Example: Merge Sort in C++
  
  \`\`\`cpp
  #include <iostream>
  #include <vector>
  
  void merge(std::vector<int>& arr, int left, int mid, int right) {
      int n1 = mid - left + 1;
      int n2 = right - mid;
      std::vector<int> L(n1), R(n2);
      
      for (int i = 0; i < n1; i++) L[i] = arr[left + i];
      for (int i = 0; i < n2; i++) R[i] = arr[mid + 1 + i];
      
      int i = 0, j = 0, k = left;
      while (i < n1 && j < n2) {
          if (L[i] <= R[j]) arr[k++] = L[i++];
          else arr[k++] = R[j++];
      }
      
      while (i < n1) arr[k++] = L[i++];
      while (j < n2) arr[k++] = R[j++];
  }
  
  void mergeSort(std::vector<int>& arr, int left, int right) {
      if (left >= right) return;
      int mid = left + (right - left) / 2;
      mergeSort(arr, left, mid);
      mergeSort(arr, mid + 1, right);
      merge(arr, left, mid, right);
  }
  
  int main() {
      std::vector<int> arr = {12, 11, 13, 5, 6, 7};
      mergeSort(arr, 0, arr.size() - 1);
      
      for (int num : arr) std::cout << num << " ";
      std::cout << std::endl;
      return 0;
  }
  \`\`\`
  
  ### Example: Binary Search in C++
  
  \`\`\`cpp
  #include <iostream>
  #include <vector>
  
  int binarySearch(const std::vector<int>& arr, int target) {
      int left = 0, right = arr.size() - 1;
      
      while (left <= right) {
          int mid = left + (right - left) / 2;
          if (arr[mid] == target) return mid;
          else if (arr[mid] < target) left = mid + 1;
          else right = mid - 1;
      }
      return -1;
  }
  
  int main() {
      std::vector<int> arr = {2, 3, 4, 10, 40};
      int target = 10;
      int result = binarySearch(arr, target);
      
      if (result != -1) std::cout << "Element found at index: " << result << std::endl;
      else std::cout << "Element not found" << std::endl;
      
      return 0;
  }
  \`\`\`
  
  ### Time Complexity
  
  | Algorithm       | Best      | Average   | Worst     |
  |-----------------|-----------|-----------|-----------|
  | Bubble Sort     | O(n)      | O(n^2)    | O(n^2)    |
  | Selection Sort  | O(n^2)    | O(n^2)    | O(n^2)    |
  | Merge Sort      | O(n log n)| O(n log n)| O(n log n)|
  | Quick Sort      | O(n log n)| O(n log n)| O(n^2)    |
  | Linear Search   | O(1)      | O(n)      | O(n)      |
  | Binary Search   | O(1)      | O(log n)  | O(log n)  |
  
  ### Practice Question
  
  Write a function to perform quicksort on an array of integers.
  
  ### Interview Question
  
  How does the time complexity of merge sort compare to quicksort in the worst case? Why is quicksort preferred in practice?
    `,
  },
  'dynamic-programming': {
    title: 'Dynamic Programming',
    content: `
  ## Dynamic Programming
  
  Dynamic Programming (DP) is an optimization technique that breaks a problem into smaller overlapping subproblems and stores their solutions to avoid redundant computations.
  
  ### Key Concepts
  
  1. **Memoization vs Tabulation**
     - **Memoization**: Top-down approach that stores the result of expensive function calls and returns the cached result when the same inputs occur again.
     - **Tabulation**: Bottom-up approach where solutions to subproblems are filled in a table.
  
  2. **Common DP Problems**
     - **Fibonacci Sequence**
     - **Knapsack Problem**
     - **Longest Common Subsequence (LCS)**
     - **Coin Change Problem**
  
  3. **Optimal Substructure**
     - If a problem can be broken down into subproblems which can be optimally solved, DP is a viable solution.
  
  ### Example: Fibonacci Sequence (Memoization) in C++
  
  \`\`\`cpp
  #include <iostream>
  #include <vector>
  
  int fibonacci(int n, std::vector<int>& memo) {
      if (n <= 1) return n;
      if (memo[n] != -1) return memo[n];
      return memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  }
  
  int main() {
      int n = 10;
      std::vector<int> memo(n + 1, -1);
      std::cout << "Fibonacci of " << n << " is: " << fibonacci(n, memo) << std::endl;
      return 0;
  }
  \`\`\`
  
  ### Example: Knapsack Problem in C++
  
  \`\`\`cpp
  #include <iostream>
  #include <vector>
  
  int knapsack(int W, const std::vector<int>& wt, const std::vector<int>& val, int n) {
      std::vector<std::vector<int>> dp(n + 1, std::vector<int>(W + 1, 0));
      
      for (int i = 1; i <= n; i++) {
          for (int w = 1; w <= W; w++) {
              if (wt[i - 1] <= w) {
                  dp[i][w] = std::max(dp[i - 1][w], dp[i - 1][w - wt[i - 1]] + val[i - 1]);
              } else {
                  dp[i][w] = dp[i - 1][w];
              }
          }
      }
      
      return dp[n][W];
  }
  
  int main() {
      std::vector<int> wt = {1, 2, 3};
      std::vector<int> val = {60, 100, 120};
      int W = 5;
      std::cout << "Maximum value in Knapsack = " << knapsack(W, wt, val, wt.size()) << std::endl;
      return 0;
  }
  \`\`\`
  
  ### Time Complexity
  
  | Problem               | Time Complexity |
  |-----------------------|-----------------|
  | Fibonacci (Memoization)| O(n)            |
  | Knapsack Problem       | O(n * W)        |
  | Longest Common Subsequence | O(n * m)    |
  
  ### Practice Question
  
  Solve the 0/1 knapsack problem using dynamic programming.
  
  ### Interview Question
  
  What is the difference between memoization and tabulation in dynamic programming? When would you prefer one over the other?
    `,
  },
  greedy: {
    title: 'Greedy Algorithms',
    content: `
  ## Greedy Algorithms
  
  Greedy algorithms build up a solution piece by piece, always choosing the next piece that offers the most immediate benefit.
  
  ### Key Concepts
  
  1. **Greedy Choice Property**
     - A local optimum at each stage leads to a global optimum for the problem.
  
  2. **Common Greedy Problems**
     - **Activity Selection Problem**: Selecting the maximum number of activities that don't overlap.
     - **Fractional Knapsack Problem**: Maximizing the total value by taking fractions of items.
  
  3. **Limitations**
     - Greedy algorithms don't always guarantee an optimal solution, unlike dynamic programming.
  
  ### Example: Activity Selection Problem in C++
  
  \`\`\`cpp
  #include <iostream>
  #include <vector>
  #include <algorithm>
  
  struct Activity {
      int start, end;
  };
  
  bool compare(Activity a, Activity b) {
      return a.end < b.end;
  }
  
  void activitySelection(std::vector<Activity>& activities) {
      std::sort(activities.begin(), activities.end(), compare);
      
      int lastEndTime = -1;
      for (const auto& activity : activities) {
          if (activity.start >= lastEndTime) {
              std::cout << "Selected activity: [" << activity.start << ", " << activity.end << "]\n";
              lastEndTime = activity.end;
          }
      }
  }
  
  int main() {
      std::vector<Activity> activities = {{1, 3}, {2, 5}, {4, 6}, {6, 7}, {5, 9}};
      activitySelection(activities);
      return 0;
  }
  \`\`\`
  
  ### Example: Fractional Knapsack Problem in C++
  
  \`\`\`cpp
  #include <iostream>
  #include <vector>
  #include <algorithm>
  
  struct Item {
      int value, weight;
      double ratio;
  };
  
  bool compare(Item a, Item b) {
      return a.ratio > b.ratio;
  }
  
  double fractionalKnapsack(int W, std::vector<Item>& items) {
      std::sort(items.begin(), items.end(), compare);
      double totalValue = 0.0;
      
      for (const auto& item : items) {
          if (W >= item.weight) {
              W -= item.weight;
              totalValue += item.value;
          } else {
              totalValue += item.value * ((double)W / item.weight);
              break;
          }
      }
      
      return totalValue;
  }
  
  int main() {
      std::vector<Item> items = {{60, 10}, {100, 20}, {120, 30}};
      int W = 50;
      std::cout << "Maximum value in Knapsack = " << fractionalKnapsack(W, items) << std::endl;
      return 0;
  }
  \`\`\`
  
  ### Time Complexity
  
  | Problem                     | Time Complexity |
  |-----------------------------|-----------------|
  | Activity Selection Problem   | O(n log n)      |
  | Fractional Knapsack Problem  | O(n log n)      |
  
  ### Practice Question
  
  Solve the job sequencing problem with deadlines.
  
  ### Interview Question
  
  When is it appropriate to use a greedy algorithm, and when should you use dynamic programming instead?
    `,
  },
  'hashing': {
  title: 'Hashing',
  content: `
## Hashing

Hashing is a technique used to uniquely identify a specific object from a group of similar objects. It uses a hash function to convert input data into a fixed-size string of characters, which is typically a hash code.

### Key Concepts

1. **Hash Functions**
   - A hash function takes input (or 'message') and returns a fixed-size string of bytes.
   - It is common for hash functions to be fast and to produce different outputs for different inputs.

2. **Collision Resolution**
   - When two different inputs produce the same hash output, it is called a collision.
   - Common strategies for collision resolution include:
     - **Chaining:** Each hash table entry is a linked list of all elements that hash to the same index.
     - **Open Addressing:** When a collision occurs, the algorithm finds another open slot using a probing sequence.

### Example: Simple Hash Table Implementation in C++

\`\`\`cpp
#include <iostream>
#include <list>
#include <vector>

class HashTable {
private:
    static const int hashSize = 10;
    std::list<std::pair<int, std::string>> table[hashSize]; // Array of linked lists

public:
    void insert(int key, const std::string& value) {
        int index = key % hashSize;
        table[index].emplace_back(key, value); // Insert at the end
    }

    std::string search(int key) {
        int index = key % hashSize;
        for (const auto& pair : table[index]) {
            if (pair.first == key) {
                return pair.second; // Return the value if key is found
            }
        }
        return "Not found"; // If key is not found
    }
};

int main() {
    HashTable ht;
    ht.insert(1, "Data Structures");
    ht.insert(2, "Algorithms");
    
    std::cout << ht.search(1) << std::endl; // Output: Data Structures
    std::cout << ht.search(3) << std::endl; // Output: Not found
    
    return 0;
}
\`\`\`

### Common Applications

- Implementing associative arrays or dictionaries.
- Database indexing.
- Caching.

### Practice Question

Design a hash map from scratch and implement the insert and get methods.

### Interview Question

Explain how you would handle collisions in a hash table.
`
},
'bit-manipulation': {
  title: 'Bit Manipulation',
  content: `
## Bit Manipulation

Bit manipulation refers to the act of algorithmically manipulating bits or binary digits. It is a powerful tool in programming that can optimize algorithms and improve performance.

### Key Concepts

1. **Bitwise Operators**
   - **AND (&):** Compares each bit of two numbers. The result is 1 if both bits are 1.
   - **OR (|):** Compares each bit of two numbers. The result is 1 if at least one of the bits is 1.
   - **XOR (^):** Compares each bit of two numbers. The result is 1 if the bits are different.
   - **NOT (~):** Inverts the bits of a number.

2. **Common Techniques**
   - **Swapping numbers without a temporary variable:**
     \`\`\`cpp
     a = a ^ b;
     b = a ^ b; // b becomes original a
     a = a ^ b; // a becomes original b
     \`\`\`
   - **Checking if a number is odd or even:**
     - Use `n & 1` to check if the least significant bit is 1 (odd) or 0 (even).

### Example: Counting Set Bits in an Integer

\`\`\`cpp
#include <iostream>

int countSetBits(int n) {
    int count = 0;
    while (n) {
        count += n & 1; // Increment count if last bit is set
        n >>= 1; // Right shift n by 1
    }
    return count;
}

int main() {
    int number = 29; // Binary: 11101
    std::cout << "Number of set bits: " << countSetBits(number) << std::endl; // Output: 4
    return 0;
}
\`\`\`

### Common Applications

- Optimizing algorithms (e.g., finding the unique number in an array).
- Cryptography.
- Graphics programming.

### Practice Question

Write a function to determine if two integers have opposite signs.

### Interview Question

How can you swap two numbers using bit manipulation?
`
}
'heap': {
  title: 'Heap and Priority Queue',
  content: `
## Heap and Priority Queue

A heap is a special tree-based data structure that satisfies the heap property. A priority queue is an abstract data type that operates similar to a regular queue but prioritizes elements based on their priority.

### Key Concepts

1. **Heap Types**
   - **Max Heap:** The value of each node is greater than or equal to the values of its children.
   - **Min Heap:** The value of each node is less than or equal to the values of its children.

2. **Operations**
   - **Insert:** Add an element to the heap and maintain the heap property.
   - **Remove:** Remove the highest (or lowest) priority element and re-heapify.

### Example: Min Heap Implementation in C++

\`\`\`cpp
#include <iostream>
#include <vector>
#include <algorithm>

class MinHeap {
private:
    std::vector<int> heap;

    void heapifyUp(int index) {
        while (index > 0 && heap[index] < heap[(index - 1) / 2]) {
            std::swap(heap[index], heap[(index - 1) / 2]);
            index = (index - 1) / 2;
        }
    }

public:
    void insert(int val) {
        heap.push_back(val);
        heapifyUp(heap.size() - 1);
    }

    int removeMin() {
        if (heap.empty()) return -1; // Heap is empty
        int minVal = heap[0];
        heap[0] = heap.back();
        heap.pop_back();
        // Implement heapify down (omitted for brevity)
        return minVal;
    }

    bool isEmpty() {
        return heap.empty();
    }
};

int main() {
    MinHeap minHeap;
    minHeap.insert(3);
    minHeap.insert(1);
    minHeap.insert(5);
    
    std::cout << "Min value: " << minHeap.removeMin() << std::endl; // Output: 1
    return 0;
}
\`\`\`

### Common Applications

- Implementing priority queues.
- Scheduling algorithms.
- Graph algorithms like Dijkstra’s.

### Practice Question

Implement a priority queue using a heap.

### Interview Question

Explain the difference between a min heap and a max heap.
`
}

};

const TopicPage: React.FC = () => {
  const { topicId } = useParams();

  const topic = topics[topicId as keyof typeof topics];

  if (!topic) {
    return <div>Topic not found</div>;
  }

  return (
    <div className="markdown-body">
      {' '}
      {/* Apply GitHub markdown styling */}
      <h1 className="text-3xl font-bold mb-6">{topic.title}</h1>
      <ReactMarkdown
        children={topic.content}
        remarkPlugins={[remarkGfm]} // Enable GFM (tables, etc.)
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                style={vscDarkPlus}
                language={match[1]}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      />
    </div>
  );
};

export default TopicPage;
