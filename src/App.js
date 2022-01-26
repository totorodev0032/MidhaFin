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
import TeamSection from './components/Team/TeamSection';
import BannerSection from './components/Banner';

function App() {
  return (
    <Router>
      <Route path="/" exact>
        <Toolbar />
        <FloatingButton />
        <HeroSection />
        <MidhaUSP />
        <BannerSection />
        <CourseSection />
        <StatSection />
        <FeaturesUSP />
        <ContactUs />
        <Footer />
      </Route>
      {/* <Route path="/course">
        <Toolbar />
        <FloatingButton />
        <CourseHero />
        <CourseAbout />
        <SyllabusSection />
        <ContactUs />
        <FAQSection />
        <Footer />
      </Route> */}

      <Route path="/frm-lecture-videos" component={LectureVideos} />
      <Route
        path="/complete-frm-study-material"
        component={CompleteStudyMaterial}
      />
      <Route path="/team" component={TeamSection} />

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
