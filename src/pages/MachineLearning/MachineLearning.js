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
import MachineLogo from '../../images/course images/Deep Learning.png';
import MachineCerti from '../../images/machine learning.jpg';
import FloatingButton from '../../components/FloatingButton/FloatingButton';

const CourseData = {
  title: 'Machine Learning Course',
  description:
    'Get hands on Python skills and accelerate your Machine Learning career',
  courseHerodata: [
    'To develop skills of using recent machine learning software',
    'To develop skills to build machine learning based product ',
    'To gain experience of doing independent study and research.',
  ],
  date: '13th November 2021',
  hour: '60+ hours of live classes.',
  certType: 'With Microsoft Certified Azure AI Fundamentals Certification.',
  mrp: '19,999',
  price: '19,999',
  courseServices: ['90+ hours', '7+', '24/7'],
  courseAbout: [
    'With the application of Data Science growing in almost everyone, Machine Learning has become one of the hottest topics to learn. From traffic signals to recommender systems, Machine Learning has its application everywhere.',
    'Designed by Industrial experts, this course will cover the basics of Python Programming, Python packages in-depth like(Numpy, Scipy, Sklearn, matplotlib) and concepts of Algorithms, Linear Algebra, Statistics and Probability will also be covered.',
    'The course is designed after talking to many experts in the industry by keeping in mind that beginners are not left behind. Throughout the course, you will be making projects which will increase your understanding of the topic and also make your resume better.',
    'With the entire team of MidhaPro always ready to support you, all your queries and doubts from the session will be taken care of.',
  ],
  courseObjectives: [
    'Gain knowledge about basic concepts of Machine Learning ',
    'Identify machine learning techniques suitable for a given problem',
    'Solve the problems using various machine learning techniques ',
    'Apply Dimensionality reduction techniques. ',
    'Design application using machine learning techniques. ',
    'How to deploy your ML model on cloud ',
  ],
  Topics: [
    'Python Programming',
    'Computer Programming',
    'Numpy',
    'Scipy',
    'Sklearn',
    'matplotlib',
    'Algorithms',
    'Linear Algebra',
    'Statistics',
    'Probablity',
  ],
  prerequisite: [
    'Basic of linear algebra and statistics ',
    'Basics of any programming language is preferred  ',
  ],
  curriculum: [
    [
      'Introduction to Machine Learning',
      'History and Evolution',
      'Artificial Intelligence Evolution',
      'Application of Machine Learning in Technology and Science',
    ],
    [
      'Supervised Learning, Unsupervised Learning',
      'Difference between continuous supervised learning and discrete learning',
      'Code a Linear Regression in Python with scikit-learn.',
      'SciPy for Scientific Computing',
      'Understand different error metrics such as SSE, and RSquared in the context of Linear Regressions.',
      'K-Nearest Neighbor, Linear Models, Naive Bayes Classifiers, Decision trees, Support Vector Machines.',
      'Machine Learning Packages, Numpy, Scipy, Matplotlib, Pandas, Sklearn',
    ],
    [
      'Supervised Learning - Regression, Classification, Generalization, Overfitting and Underfitting.',
      'Classification - Generative, Descriminative, Use of different metrices such as accuracy score, confusion matrix, classification report.',
    ],
    [
      'Unsupervised Learning and Preprocessing',
      'Challenges in unsupervised Learning',
      'Preprocessing and Scaling',
      'Applying data transformations.',
      'Scaling training and test data the same way',
      'Clustering (K-means clustering).',
    ],
    [
      'Dimensionality Reduction, Feature Extraction and Manifold Learning.',
      'Principal Component Analysis along with mathematical aspects.',
    ],
    [
      'Prepare your data for machine learning',
      'Need for Data Pre-processing.',
      'Data Transforms, Rescale Data, Standardize Data, Normalize Data and Binarize Data.',
    ],
    [
      'Feature Selection for Machine Learning',
      'Univariate Selection, Recursive Feature Elimination',
      'Principal Component Analysis, Feature Importance.',
    ],
    [
      'Evaluate the Performance of Machine Learning Algorithms with Resampling.',
      'Split into Train and Test sets.',
      'K-fold Cross Validation.',
      'Leave One Out Cross Validation.',
      'Repeated Random Test-Train Splits.',
      'What Techniques to use When.',
      'Machine Learning algorithm Performance Metrices.',
      'Algorithm Evaluation Metrics, Classification Metrices, Regression Metrices.',
      'Compare Machine Learning Algorithms',
      'Automate Machine Learning workflows with pipelines.',
    ],
    [
      'Spot-Check classification Algorithms.',
      'Linear Machine Learning Algorithms.',
      'Non-linear Machine Learning Algorithms.',
    ],
    [
      'Natural Language Processing.',
      'Using Natural Language Toolkit(NLTK).',
      'ChatBot using chatterbot library.',
      'Save and load Machine Learning Models.',
      'Finalize your Model with pickle.',
      'Finalize your Model with joblib.',
    ],
  ],
};

const MachineLearning = () => {
  return (
    <>
      <Toolbar />
      <FloatingButton />
      <CourseHero
        CourseData={CourseData}
        enrollLink="https://rzp.io/l/9lGr1y8HSW"
        image={MachineLogo}
        certi={MachineCerti}
      />
      <CourseAbout
        courseAbout={CourseData.courseAbout}
        enrollLink="https://rzp.io/l/9lGr1y8HSW"
      />
      <SyllabusSection curriculum={CourseData.curriculum} />
      <ContactUs />
      <Footer />
    </>
  );
};

export default MachineLearning;
