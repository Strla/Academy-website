import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import { Main } from "../../lib/style/generalStyles";
import Section from "../../components/Section/Section";
import SingleCourse from "../../components/SingleCourse/SingleCourse";
import coursesMock from "../../lib/mock/courses";

const Course = () => {
  const { id } = useParams();
  const [courses, setCourses] = useState(null);
  const [course, setCourse] = useState(null);

  useEffect(() => {
    setCourses(coursesMock);
  }, []);

  useEffect(() => {
    courses &&
      setCourse(...courses.filter((course) => course.id === parseInt(id)));
  }, [courses, id]);

  return (
    <>
      <Header isSecondary={true} />
      <Main>
        {course && (
          <Section
            actionText={course.subtitle}
            title={course.title}
            buttonText={"Back"}
            isMainSection={true}
          >
            <SingleCourse
              imgSrc={course.imgSrc}
              imgALt={course.imgAlt}
              text={course.text}
            />
          </Section>
        )}
      </Main>
    </>
  );
};

export default Course;
