import React from 'react';
import CertificationSection from '../../components/CertificationSection/CertificationSection';
import ContactUs from '../../components/ContactUs/ContactUs';
import CourseAbout from '../../components/CourseAbout/CourseAbout';
import CourseHero from '../../components/CourseHero/CourseHero';
import Footer from '../../components/Footer/Footer';
import SyllabusSection from '../../components/SyllabusSection/SyllabusSection';
import Toolbar from '../../components/ToolBar/Toolbar';
import DSALogo from '../../images/course images/C++.png';
import MidhaLogo from '../../images/course images/Backend.png';
import FloatingButton from '../../components/FloatingButton/FloatingButton';

const CourseData = {
  title: 'C++ & Data Structures',
  description:
    'Get hands on problem solving skills and accelerate your programming skills.',
  courseHerodata: [
    'Understanding about object oriented programming.',
    'Application and implementation of data structures.',
    'Learning standard template library.',
  ],
  hour: '45+ hours of live classes.',
  date: '21st November 2021',
  mrp: '11,999',
  price: '11,999',
  courseServices: ['45+ hours', '5+', '24/7'],
  certType: 'With MIDHA Certification',
  courseAbout: [
    'A comprehensive knowledge of data structures in combination with algorithms is the core foundation of writing good code.Data structures and algorithms are significant for developers as it enhances the problem solving skill.When one gets exposure to a wide range of problem solving techniques it becomes really easy to take up real  world programming challenges easily.',
    'During this course we will learn about data structures and its implementation.',
    'We will solve a lot of problems for better understanding of various algorithms and grasp the application of various data structures.',
  ],
  courseObjectives: [
    'Install Python and write your first program',
    'Describe the basics of the Python programming language',
    'Use variables to store, retrieve and calculate information',
  ],
  Topics: [
    'C++ Programming',
    'Computer Programming',
    'Object Oriented Programming',
    'Advanced OOPs',
    'Problem Solving',
    'Data Structures',
    'Algorithms',
  ],
  prerequisite: [],
  curriculum: [
    [
      'Language',
      'Overview ',
      'Language fractures',
      'Language fundamentals',
      'File handling',
      'OOPs',
      'Pointers',
      'Exception handling',
      'Dynamic memories',
      'Namespaces',
      'Templates',
      'Multithreading',
      'STL',
    ],
    [
      'Arrays',
      'Abstract Data Types and the C++ Class, An Introduction to C++ Class',
      'Data Abstraction and Encapsulation in C++',
      'Declaring Class Objects and Invoking Member Functions- Special Class Operations- Miscellaneous Topics- ADTs and C++ Classes',
      'The Array as an Abstract Data Type, The Polynomial Abstract Data type',
      'Polynomial Representation- Polynomial Addition. Spares Matrices, Introduction- Sparse Matrix Representation',
      'Transposing a Matrix- Matrix Multiplication, Representation of Arrays.',
    ],
    [
      'Strings',
      'String Class in C++,String functions, Atoi function , strstr function, palindrome , KMP pattern matching algorithm ',
    ],
    [
      'Stack and Queue',
      'Templates in C++, Template Functions- Using Templates to Represent Container Classes, The Stack Abstract Data Type',
      'The Queue Abstract Data Type, Subtyping and Inheritance in C++',
      'Evaluation of Expressions, Expression- Postfix Notation- Infix to Postfix.',
    ],
    [
      'Linked List',
      'Single Linked List and Chains, Representing Chains in C++, Defining a Node in C++- Designing a Chain Class in C++',
      'Pointer manipulation in C++- Chain Manipulation Operations, The Template Class Chain, Implementing Chains with Templates- Chain Iterators- Chain Operations- Reusing a Class, Circular Lists',
      'Available Space Lists, Linked Stacks and Queues, Polynomials, Polynomial Representation- Adding Polynomials',
      'Circular List Representation of Polynomials, Equivalence Classes, Sparse Matrices, Sparse Matrix Representation',
      'Sparse Matrix Input Deleting a Sparse Matrix, Doubly Linked Lists, Generalized Lists, Representation of Generalized Lists',
      'Recursive Algorithms for Lists- Reference Counts, Shared and Recursive Lists',
    ],
    [
      'Tree',
      'Introduction, Terminology, Representation of Trees, Binary Trees, The Abstract Data Type, Properties of Binary Trees',
      'Binary Tree Representations, Binary Tree Traversal and Tree Iterators, Introduction, Inorder Traversal Preorder Traversal, Postorder Traversal',
      'Thread Binary Trees, Threads, Inorder Traversal of a Threaded Binary Tree, Inserting a Node into a Threaded Binary Tree, Heaps, Priority Queues, Definition of a Max Heap',
      'Insertion into a Max Heap, Deletion from a Max Heap, Binary Search Trees, Definition, Searching a Binary Search Tree',
      'Insertion into a Binary Search Tree, Deletion from a Binary Search Tree, Height of Binary',
    ],
    [
      'Graph',
      'The Graph Abstract Data Type, Introduction, Definition, Graph Representation, Elementary Graph Operation, Depth First Search, Breadth First Search,  Connected Components, Spanning',
      'Trees, Biconnected Components, Minimum Cost Spanning Trees, Kruskal S Algorithm, Prim s Algorithm Sollin’ s Algorithm, Shortest Paths and Transitive Closure',
      'Single Source/All Destination: Nonnegative Edge Cost, Single Source/All Destination: General Weights, All-Pairs Shortest Path, Transitive Closure.',
    ],
  ],
};

const CplusplusandDataStructures = () => {
  return (
    <>
      <Toolbar />
      <FloatingButton />
      <CourseHero
        CourseData={CourseData}
        enrollLink="https://rzp.io/l/0J7YN7R0"
        image={DSALogo}
        certi={MidhaLogo}
      />
      <CourseAbout
        courseAbout={CourseData.courseAbout}
        enrollLink="https://rzp.io/l/0J7YN7R0"
      />
      <SyllabusSection curriculum={CourseData.curriculum} />
      <ContactUs />
      <Footer />
    </>
  );
};

export default CplusplusandDataStructures;
