import CourseSection from './components/CourseSection/CourseSection';
import HeroSection from './components/HeroSection/HeroSection';
import MidhaUSP from './components/MidhaUSP/MidhaUSP';
import Toolbar from './components/ToolBar/Toolbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CourseHero from './components/CourseHero/CourseHero';
import CourseAbout from './components/CourseAbout/CourseAbout';
import SyllabusSection from './components/SyllabusSection/SyllabusSection';
import FAQSection from './components/FAQs/FAQSection';
import Footer from './components/Footer/Footer';
import ContactUs from './components/ContactUs/ContactUs';
import BlogPage from './pages/BlogPage/BlogPage';
import Term from './pages/Terms/Term';
import Privacy from './pages/Privacy/Privacy';
import Refund from './pages/Refund/Refund';
import About from './pages/AboutUs/About';
import FloatingButton from './components/FloatingButton/FloatingButton';
import FeaturesUSP from './components/FeaturesUSP';
import LectureVideos from './pages/Deliverables/LectureVideos';
import CompleteStudyMaterial from './pages/Deliverables/CompleteStudyMaterial';
import MockTest from './pages/Deliverables/MockTest';
import ProgramPage from './pages/Programmes/ProgramPage';
import ProgramDetailsPage from './pages/Programmes/ProgramDetailsPage';
import QuestionBanks from './pages/Deliverables/QuestionBanks';
import PastSample from './pages/Deliverables/PastSample';
import Doubt from './pages/Deliverables/Doubt';
import AccessTillPass from './pages/Deliverables/Access';
import StudyPlanner from './pages/Deliverables/StudyPlanner';
import StatSection from './components/StatSection';
import ProgramForm from './components/ProgramForm';

const CourseDataAnalytics = {
  title: 'Data Analytics Course',
  description:
    'Get hands on Python skills and accelerate your data science career',
  courseHerodata: [
    'Proficiency in statistical analysis of data ',
    'Learn trending professional statistical software to analyse data',
    'Ability to create and evaluate data-driven models.',
  ],
  certType: 'With Microsoft Certified Data Analyst Associate Certification',
  hour: '60+ hours of live classes.',
  date: '6th November 2021',
  // mrp: '19,999',
  price: '19,999',
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

function App() {
  return (
    <Router>
      <Route path="/" exact>
        <Toolbar />
        <FloatingButton />
        <HeroSection />
        <MidhaUSP />
        <CourseSection />
        <StatSection />
        <FeaturesUSP />
        <ContactUs />
        <Footer />
      </Route>
      <Route path="/course">
        <Toolbar />
        <FloatingButton />
        <CourseHero />
        <CourseAbout />
        <SyllabusSection />
        <ContactUs />
        <FAQSection />
        <Footer />
      </Route>

      <Route path="/frm-lecture-videos" component={LectureVideos} />
      <Route
        path="/complete-frm-study-material"
        component={CompleteStudyMaterial}
      />

      <Route path="/frm-question-banks" component={QuestionBanks} />
      <Route path="/past-frm-sample-paper-questions" component={PastSample} />
      <Route path="/frm-doubt-clearing-forum" component={Doubt} />
      <Route path="/access-till-you-pass" component={AccessTillPass} />
      <Route path="/frm-study-planner" component={StudyPlanner} />

      <Route path="/frm-mock-tests" component={MockTest} />
      <Route path="/blogs" component={BlogPage} />
      <Route path="/terms-and-conditions" component={Term} />
      <Route path="/privacy-policy" component={Privacy} />
      <Route path="/refund-and-cancellation-policy" component={Refund} />
      <Route path="/about-us" component={About} />

      <Route path="/programmes/:ids" component={ProgramPage} exact />

      <Route path="/programmes/:ids/:id" component={ProgramDetailsPage} exact />
      <Route path="/programmes/:ids/:id/enroll" component={ProgramForm} />
    </Router>
  );
}

export default App;
