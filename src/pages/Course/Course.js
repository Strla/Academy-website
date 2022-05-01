import React from "react";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Section from "../../components/Section/Section";
import SingleCourse from "../../components/SingleCourse/SingleCourse";

const Course = () => {
  return (
    <>
      <Header modifiers={["secondary"]} />
      <Main>
        <Section
          actionText={"120+ Minutes"}
          title={"3. Version Control Systems"}
          buttonText={"Back"}
        >
          <SingleCourse />
        </Section>
      </Main>
    </>
  );
};

export default Course;
