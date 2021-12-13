import React from 'react';
import CertificationSection from '../../components/CertificationSection/CertificationSection';
import ContactUs from '../../components/ContactUs/ContactUs';
import CourseAbout from '../../components/CourseAbout/CourseAbout';
import CourseHero from '../../components/CourseHero/CourseHero';
import Footer from '../../components/Footer/Footer';
import SyllabusSection from '../../components/SyllabusSection/SyllabusSection';
import Toolbar from '../../components/ToolBar/Toolbar';
import PythonLogo from '../../images/course images/Phython.png';
import PythonCerti from '../../images/pythoncerti.png';
import FloatingButton from '../../components/FloatingButton/FloatingButton';

const CourseData = {
  title: 'Python Bootcamp 101',
  description:
    'To develop proper understanding of the Python language and its features',
  courseHerodata: [
    'To develop skills of using recent machine learning software',
    'To develop skills to build machine learning based product ',
    'To gain experience of doing independent study and research.',
  ],
  hour: '45+ hours of live classes.',
  certType: 'With Microsoft Technology Associate Certification',
  date: '15th November 2021',
  mrp: '14,999',
  price: '14,999',
  courseServices: ['40+ hours', '5+', '24/7'],
  courseAbout: [
    'Python is one of the most widely learned programming languages in the world. With its application almost everywhere, it has become almost necessary to learn Python for anyone trying to make their career in technology.',
    'Designed by Industrial experts, this course will start from scratch and take you from Beginner to Industrial level within the given time. Throughout the course, you will be learning through projects or real-world examples for a holistic view of Python.',
    'This course is also suited for someone who does not have programming experience, and it is perfectly fine if you are an absolute beginner.',
  ],
  courseObjectives: [
    'Install Python and write your first program',
    'Describe the basics of the Python programming language',
    'Use variables to store, retrieve and calculate information',
  ],
  Topics: [
    'Python Programming',
    'Computer Programming',
    'Object Oriented Programming',
    'Advanced OOPs',
    'Python Application',
  ],
  prerequisite: [],
  curriculum: [
    [
      'Getting Started.',
      'History & need of Python, Application of Python, Advantages of Python, Disadvantages of Python',
      'Installing Python, Program structure, Interactive Shell.',
      'Executable or script files, User Interface or IDE.',
    ],
    [
      'Python Fundamentals',
      'Working with Interactive mode, Working with Script mode, . Python Character Set.',
      'Code a Linear Regression in Python with scikit-learn.',
      ' Python Tokens, Keywords,',
      'Identifiers, Literals, Operators.',
      'Variables and Assignments.',
      'Input and Output in Python.',
    ],
    [
      'Data Handling.',
      'Data Types, Numbers, Strings, Lists, Tuples.',
      'Dictionary, Set, Frozenset, Bool, Mutable and Immutable. ',
    ],
    [
      'String Manipulation.',
      'Introduction to Python String.',
      'Accessing Individual Elements, String Operators.',
      'String Slices, String Functions and Methods.',
    ],
    [
      'List Manipulation.',
      ' Introduction to Python List.',
      'Creating List,  Accessing List, Joining List, Replicating List, List Slicing.',
    ],
    [
      'Tuples',
      'Introduction to Tuple.',
      'Creating Tuples, Accessing Tuples, Joining Tuples, Replicating Tuples, Tuple Slicing',
    ],
    [
      'Dictionaries.',
      'Introduction to Dictionary',
      'Accessing values in dictionaries, Working with dictionaries, Properties',
    ],
    [
      'SET AND FROZENSET.',
      'Introduction to Set and Frozenset, Creating Set and Frozenset, Accessing and Joining, Replicating and Slicing',
    ],
    [
      'Operators.',
      'Arithmetic Operators, Relational Operators, Logical Operators, Membership Operators, Identity Operators, Bitwise Operators, Assignment Operators.',
      ' Operators Precedence, Evaluating Expression, Type Casting.',
    ],
    [
      'Program Control Flow.',
      'Conditional Statements, The if Statement, The if-else Statement, The if-elif Statement, Nested if Statements, Python Indentation.',
      'Looping and Iteration, The For Loop, The While Loop, Loop else Statement, Nested Loops',
      'Break and Continue, The Range Function, Introduction to range(), Types of range() function, Use of range() function',
      'Finalize your Model with pickle.',
    ],
    [
      'Introduction to Functions.',
      'Built-In Functions, Introduction to Functions, Using a Functions, Python Function Types ',
      ' Structure of Python Functions E.g. - map, zip, reduce, filter, any, chr, ord, sorted, globals, locals, all, etc. ',
      'User Defined Functions, Structure of a Python Program w.r.t. UDF Types of Functions, Invoking UDF, Flow of Execution, Arguments and Parameters, Default Arguments, Named Arguments ',
      'Scope of Variables, Lambda function, Recursion Function, Use of recursion function ',
    ],
    [
      'Modules and Packages',
      ' Built-in Modules, Importing Modules in Python Programs ',
      ' Working with Random Modules E.g. - builtins, os, time, DateTime, calendar, sys, etc. ',
      'User Defined Functions, Structure of Python Modules  ',
    ],

    [
      'Files and Operations',
      'Text and Bytes files, Opening a file, Reading and Writing Files, Other File tools ',
    ],
  ],
};

const PythonBootcamp = () => {
  return (
    <>
      <Toolbar />
      <FloatingButton />
      <CourseHero
        CourseData={CourseData}
        enrollLink="https://rzp.io/l/EN3tmQY4lt"
        image={PythonLogo}
        certi={PythonCerti}
      />
      <CourseAbout
        courseAbout={CourseData.courseAbout}
        enrollLink="https://rzp.io/l/EN3tmQY4lt"
      />
      <SyllabusSection curriculum={CourseData.curriculum} />
      <ContactUs />
      <Footer />
    </>
  );
};

export default PythonBootcamp;
