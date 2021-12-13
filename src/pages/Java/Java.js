import React from 'react';
import CertificationSection from '../../components/CertificationSection/CertificationSection';
import ContactUs from '../../components/ContactUs/ContactUs';
import CourseAbout from '../../components/CourseAbout/CourseAbout';
import CourseHero from '../../components/CourseHero/CourseHero';
import Footer from '../../components/Footer/Footer';
import SyllabusSection from '../../components/SyllabusSection/SyllabusSection';
import Toolbar from '../../components/ToolBar/Toolbar';
import JavaLogo from '../../images/course images/java.png';
import DSALogo from '../../images/course images/C++.png';
import JavaCerti from '../../images/javacerti.jpg';
import FloatingButton from '../../components/FloatingButton/FloatingButton';

const CourseData = {
  title: 'Core Java Bootcamp',
  description:
    'To develop proper understanding of the Java language and its features',
  courseHerodata: [
    'Learn Object Oriented Programming',
    'Learn Design patterns and implement it.',
    'Learn about Java - 8 features (streams, lambda expressions)',
  ],
  mrp: '14,999',
  price: '14,999',
  hour: '45+ hours of live classes.',
  certType: 'With Microsoft Technology Associate Certification',
  date: '21st November 2021',
  courseServices: ['40+ hours', '5+', '24/7'],
  courseAbout: [
    'Java is one of the most popular programming languages used to create Web applications, distributed applications as well as standalone applications. It is designed for flexibility, allowing developers to write code that would run on any machine, regardless of architecture or platform. According to the Java home page, more than 1 billion computers and 3 billion mobile phones worldwide run Java.',
    'In this course, we will start from the absolute basics of the language and gradually cover the concept of OOPs in detail and move towards the advanced concepts like generics, multithreading, collection and many more.',
    'We will learn about JAVA 8 features and some design patterns. By the end of the course, you will have an in-depth understanding of JAVA, and you will be able to easily start your journey to learn any java based technology.',
  ],
  courseObjectives: [
    'Install Python and write your first program',
    'Describe the basics of the Python programming language',
    'Use variables to store, retrieve and calculate information',
  ],
  Topics: [
    'Java Programming',
    'Computer Programming',
    'Object Oriented Programming',
    'Advanced OOPs',
    'Java Application',
  ],
  prerequisite: [],
  curriculum: [
    ['Language Fundamentals.', 'Operators & Assignments.', 'Flow-Control.'],
    ['Flow-Control.', 'Interfaces and Abstract Classes.', 'OOPS.'],
    ['OOPS', 'Multi-Threading.'],
    [' java.lang.package.', 'File I/O.', 'Serialization.'],
    [
      'Regular expressions.',
      ' Collections.',
      'Concurrent Collections.',
      'Generics.',
    ],
    [
      'Garbage collection',
      'Internationalization.',
      ' ENUM.',
      'Assertions.',
      'Java 8 Features.',
    ],
    [
      'Dictionaries.',
      'Introduction to Dictionary',
      'Accessing values in dictionaries, Working with dictionaries, Properties',
    ],
    ['Projects.'],
    [
      'BONUS TOPICS.',
      'Design Patterns.',
      'Singleton, Builder, Factory, Iterator, Facade.',
    ],
    ['JDBC (Database operations using java).'],
  ],
};

const JavaBootcamp = () => {
  return (
    <>
      <Toolbar />
      <FloatingButton />
      <CourseHero
        CourseData={CourseData}
        enrollLink="https://rzp.io/l/a4NHD3LYw3"
        image={JavaLogo}
        certi={JavaCerti}
      />
      <CourseAbout
        courseAbout={CourseData.courseAbout}
        enrollLink="https://rzp.io/l/a4NHD3LYw3"
      />
      <SyllabusSection curriculum={CourseData.curriculum} />
      <ContactUs />
      <Footer />
    </>
  );
};

export default JavaBootcamp;
