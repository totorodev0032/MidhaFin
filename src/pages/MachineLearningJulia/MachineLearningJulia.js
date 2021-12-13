import React from 'react';
import CertificationSection from '../../components/CertificationSection/CertificationSection';
import ContactUs from '../../components/ContactUs/ContactUs';
import CourseAbout from '../../components/CourseAbout/CourseAbout';
import CourseHero from '../../components/CourseHero/CourseHero';
import Footer from '../../components/Footer/Footer';
import SyllabusSection from '../../components/SyllabusSection/SyllabusSection';
import Toolbar from '../../components/ToolBar/Toolbar';
import DataLogo from '../../images/dataanalytics.png';
import JuliaLogo from '../../images/course images/ Julia.png';
import MidhaLogo from '../../images/course images/Security.png';
import FloatingButton from '../../components/FloatingButton/FloatingButton';

const CourseData = {
  title: 'Machine Learning with Julia',
  description:
    'Get hands on machine learning skills and accelerate your Julia skills.',
  courseHerodata: [
    'Introduction to various machine learning and artificial intelligence concepts.',
    'Provide training so that students can start writing applications in AI.',
    'Provide the ability to run real machine learning production examples',
  ],
  hour: '45+ hours of live classes.',
  certType: 'With MIDHA Certification',
  date: '23rd November 2021',
  mrp: '14,999',
  price: '14,999',
  courseServices: ['40+ hours', '5+', '24/7'],
  courseAbout: [
    'With the application of Data Science growing in almost everyone, Machine Learning has become one of the hottest topics to learn. Machine Learning has its application everywhere, and all the multi-national companies are using ML to enhance their growth and automate many of their tasks.',
    'While Python is still the most widely used programming language for ML, but recently Julia has started to receive a lot of significance and adoption from the industry.',
    'Julia is a high-level, high-performance, dynamic programming language. While it is a general-purpose language that may be used to develop any program, it has several characteristics that are ideally suited to numerical analysis and computational science.',
    'We will start this course from absolute basics, and you will be learning the nits and grits of Julia Programming and then using it to learn Machine Learning.',
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
      'Introduction to Julia',
      'What niche is filled by Julia',
      'How can Julia help you with data analysis',
      'Getting started with Julia’s REPL',
      'Alternative environments for Julia development: Juno, IJulia and Sublime-IJulia',
      'The Julia ecosystem: documentation and package search',
      'Getting more help: Julia forums and Julia community',
    ],
    [
      'String',
      'Introduction to Julia REPL and batch execution via “Hello World”',
      'Julia String Types',
    ],
    [
      'Scalar Types',
      'What is a variable? Why do we use a name and a type for it?',
      'Integers',
      'Floating point numbers',
      'Complex numbers',
      'Rational numbers',
    ],
    [
      'Arrays',
      'Vectors, Matrices, Multi-dimensional arrays, Heterogeneous arrays (cell arrays), Comprehensions',
    ],
    ['Elementary Type', 'Tuples, Ranges, Dictionaries, Symbols.'],
    [
      'Building Your own Types.',
      'Abstract types',
      'Abstract types, Parametric composite types.',
    ],
    [
      'Functions',
      'How to define a function in Julia',
      'Julia functions as methods operating on types',
      'Multiple dispatch',
      'How multiple dispatch differs from traditional object-oriented programming',
      'Parametric functions',
      'Functions changing their input',
      'Anonymous functions',
      'Optional function arguments',
      'Required function arguments',
    ],
    ['Constructors', 'Inner constructors, Outer constructors'],
    [
      'Control Flow',
      'Compound expressions and scoping, Compound expressions and scoping',
      'Loops, Exception Handling, Tasks, Modules, Packages.',
    ],
    [
      'Reading and Writing Data',
      'Filesystem, Data I/O, Lower Level Data I/O, Dataframes, Distribution and Statistics.',
    ],
    [
      'Defining distributions',
      'Interface for evaluating and sampling from distributions.',
      'Mean, variance and co variance.',
      'Generalized linear models: a linear regression example.',
    ],
    [
      'Plotting',
      'Plotting packages: Gadfly, Winston, Gaston, PyPlot, Plotly, Vega',
      'Introduction to Gadfly',
      'Interact and Gadfly',
    ],

    [
      'Basics of Julia for Data Analysis',
      'Julia Data Structures',
      'Loops, Conditionals in Julia',
    ],
    ['Data Munging in Julia'],

    [
      'Building a predictive ML model',
      'Logistic Regression',
      'Decision Tree',
      'Random Forest',
    ],

    [
      'Calling R and Python libraries in Julia',
      'Using pandas with Julia',
      'Using ggplot2 in Julia',
      'Machine learning with knet',
    ],
    ['Projects'],
  ],
};

const MachineLearningJulia = () => {
  return (
    <>
      <Toolbar />
      <FloatingButton />
      <CourseHero
        CourseData={CourseData}
        enrollLink="https://rzp.io/l/GgNGWS1"
        image={JuliaLogo}
        certi={MidhaLogo}
      />
      <CourseAbout
        courseAbout={CourseData.courseAbout}
        enrollLink="https://rzp.io/l/GgNGWS1"
      />
      <SyllabusSection curriculum={CourseData.curriculum} />
      <ContactUs />
      <Footer />
    </>
  );
};

export default MachineLearningJulia;
