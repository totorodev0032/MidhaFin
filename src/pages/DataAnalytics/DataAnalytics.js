import React from 'react';
import CertificationSection from '../../components/CertificationSection/CertificationSection';
import ContactUs from '../../components/ContactUs/ContactUs';
import CourseAbout from '../../components/CourseAbout/CourseAbout';
import CourseForm from '../../components/CourseForm/CourseForm';
import CourseHero from '../../components/CourseHero/CourseHero';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import Footer from '../../components/Footer/Footer';
import SyllabusSection from '../../components/SyllabusSection/SyllabusSection';
import Toolbar from '../../components/ToolBar/Toolbar';
import DataLogo from '../../images/dataanalytics.png';
import DataCerti from '../../images/datacertis.png';

const CourseData = {
  title: 'Data Analytics Bootcamp',
  description:
    'Get hands on Python skills and accelerate your data science career',
  courseHerodata: [
    'Proficiency in statistical analysis of data ',
    'Learn trending professional statistical software to analyse data',
    'Ability to create and evaluate data-driven models.',
  ],
  hour: '60+ hours of live class.',
  date: '22th August 2021',
  mrp: '19,999',
  price: '6,999',
  certType: 'With Microsoft Certified Data Analyst Certification',
  courseServices: ['60+ hours', '6+', '24/7'],
  courseAbout: [
    'With data growing every day at an enormous speed, Data Analytics has opened up new avenues for companies. Considering its importance in various fields, we have designed this course on Data Analytics.',
    'This course will cover the basics of SQL, Data Management, and Industry-relevant Business Analytics tools like Tableau, PowerBi and Advanced Excel.',
    'The course is made with consultation from many experts and industry professionals. You will be making projects throughout the course which will add more value to your resume.',
  ],
  courseObjectives: [
    'Python programming ',
    'Various python libraries like Numpy ,Scipy,Matplotlib and so on.',
    'Learn to use softwares like Tableau, PowerBI and Advanced Excel',
    'Data management',
    'Business Analytics tools',
  ],
  Topics: [
    'Data Wrangling',
    'Data Manipulation',
    'SQL',
    'Data Pipeline',
    'Query Language',
    'Tableau',
    'PowerBI',
    'Excel',
    'Data Driven Approach',
  ],
  prerequisite: [
    'Basic of linear algebra and statistics ',
    'Basics of any programming language is preferred  ',
  ],
  curriculum: [
    [
      'Introduction to Data Science',
      'An Introduction to PYTHON and basic python',
      'OOPs in python',
    ],
    [
      'Database SQLite and MySql',
      'Connecting MySQL database using python',
      'NumPy for Mathematical Computing',
      'SciPy for Scientific Computing',
      'Pandas for reading and saving data files',
    ],
    // [
    //   'Introduction to Machine Learning with Python',
    //   'Use cases of Machine Learning',
    //   'Process flow of Machine Learning and Various categories of Machine Learning',
    //   'Understanding Linear Regression and Logistic Regression',
    //   'What is gradient descent in Machine Learning',
    //   'What is supervised learning, classification',
    //   'Decision Tree, algorithm for Decision Tree induction Confusion Matrix',
    //   'Random Forest',
    // ],
    // [
    //   'Naïve Bayes, working of Naïve Bayes, how to implement Naïve Bayes Classifier',
    //   'Support Vector Machine, working process of Support Vector Mechanism',
    //   'What is Hyperparameter Optimization',
    //   'Comparing Random Search with Grid Search',
    //   'How to implement Support Vector Machine for classification.',
    //   'Introduction to unsupervised learning, use cases of unsupervised learning',
    //   'What is K-means clustering, understanding the K-means clustering algorithm Optimal clustering',
    // ],
    [
      'Data Cleaning ',
      'Understanding Tableau Concepts',
      'Organize data and apply filters',
      'Apply analytics to a worksheet Sharing Insights',
    ],
    [
      'Introduction to PowerBI',
      'Power Query for Data Transformation',
      'Data Visualization with Analytics',
      'Power BI Desktop & Administration',
    ],
    [
      'Entering Data',
      'Referencing in Formulas',
      'Name Range',
      'Understanding Logical Functions',
      'Getting started with Conditional Formatting',
      'Advanced-level Validation',
      'Important Formulas in Excel',
      'Working with Dynamic table',
      'Data Sorting',
      'Data Filtering',
      'Chart Creation',
      'Various Techniques of Charting',
      'Pivot Tables in Excel VBA',
    ],

    ['Project Time'],
  ],
  projects: [
    [
      'Predicting the price of a House(Linear Regression).',
      'Create a Linear Regression model in Python from the ground up using a test-driven approach. You will expand your qualified model to a multivariate Linear Regression to forecast house selling prices.',
    ],
    [
      'Predict if a player is going to be churned or not from a Gaming Application (Logistic Regression)',
      'The first step in retaining customers and enhancing the company products is to understand and detect churn.',
    ],
    [
      'Customer Segmentation using K-Means Algorithm(Clustering)',
      'This technique can be used by companies to outperform the competition by developing uniquely appealing products and services.',
    ],
    [
      'Human Resource Dashboard using Power BI',
      'The dashboard utilizes the human asset information from sources like Microsoft Excel, any ERP or human asset application to introduce it on a Power BI dashboard.',
    ],
    [
      'Sentiment Analysis of IMDB movie Dataset',
      ' Feeling examination is regularly performed on text based information to help organizations screen brand and item conclusion in client criticism, and comprehend client needs.',
    ],
    [
      'Human Resource Dashboard using Excel',
      'The dashboard utilizes the human asset information from sources like Microsoft Excel, any ERP or human asset application to introduce it on a Power BI dashboard.',
    ],
  ],
};

const DataAnalytics = ({ data }) => {
  return (
    <>
      <Toolbar />
      <FloatingButton />
      <CourseHero
        CourseData={data}
        enrollLink="https://rzp.io/l/X1LqwmwiYt"
        image={DataLogo}
        certi={DataCerti}
      />
      <CourseAbout
        courseAbout={CourseData.courseAbout}
        enrollLink="https://rzp.io/l/X1LqwmwiYt"
      />

      <SyllabusSection curriculum={CourseData.curriculum} />
      {/* <CertificationSection enrollLink="https://rzp.io/l/X1LqwmwiYt" /> */}
      <ContactUs />
      <Footer />
    </>
  );
};

export default DataAnalytics;
