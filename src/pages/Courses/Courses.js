import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { Main, Grid } from "../../lib/style/generalStyles";
import Section from "../../components/Section/Section";
import CourseCard from "../../components/CourseCard/CourseCard";

import coursesMock from "../../lib/mock/courses";
import Loader from "../../components/Loader/Loader";

const Courses = () => {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setCourses(coursesMock);
    }, 1000);
  }, []);
  return (
    <>
      <Header isSecondary={true} />
      <Main>
        <Section title={"All lectures"}>
          {courses ? (
            <Grid>
              {courses.map((course) => {
                return (
                  <CourseCard
                    key={course.id}
                    courseId={course.id}
                    imgSrc={course.imgSrc}
                    imgAlt={course.imgAlt}
                    title={course.title}
                    subtitle={course.subtitle}
                  />
                );
              })}
            </Grid>
          ) : (
            <Loader />
          )}
        </Section>
      </Main>
    </>
  );
};

export default Courses;
