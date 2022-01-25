import React from 'react';
import { Programmes } from '../../data/Programmes';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import Toolbar from '../../components/ToolBar/Toolbar';
import CourseHero from '../../components/CourseHero/CourseHero';
import CourseAbout from '../../components/CourseAbout/CourseAbout';
import SyllabusSection from '../../components/SyllabusSection/SyllabusSection';
import ContactUs from '../../components/ContactUs/ContactUs';
import Footer from '../../components/Footer/Footer';
import InstructorSection from '../../components/Instructors/InstructorSection';

const ProgramDetailsPage = ({ match }) => {
  const url = match.url;
  console.log(url);
  const separator = url.split('/')[2];
  console.log(separator);

  const ProgramArray = Programmes.find((Program) => Program.id === separator);
  console.log(ProgramArray);
  const Program = ProgramArray.ProgramList.find(
    (p) => p.id === match.params.id
  );
  console.log(Program);

  return (
    <>
      <Toolbar />
      <FloatingButton />
      <CourseHero
        title={Program.title}
        description={Program.Meta}
        image={Program.image}
        programHeroData={Program.courseHerodata}
        priceR={Program.priceR}
        priceU={Program.priceU}
        date={Program.date}
        time={Program.time}
        usp={Program.USP}
      />
      <CourseAbout courseAbout={Program.courseAbout} />
      {Program.curriculum ? (
        <SyllabusSection curriculum={Program.curriculum} />
      ) : null}
      {Program.instructors ? (
        <InstructorSection instructors={Program.instructors} />
      ) : null}

      <ContactUs />
      <Footer />
    </>
  );
};

export default ProgramDetailsPage;
