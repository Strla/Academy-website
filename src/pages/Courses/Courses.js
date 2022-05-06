import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { Main, Grid } from "../../lib/style/generalStyles";
import Section from "../../components/Section/Section";
import CourseCard from "../../components/CourseCard/CourseCard";

import coursesMock from "../../lib/mock/courses";
import Loader from "../../components/Loader/Loader";

const Courses = () => {
  const [courses, setCourses] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCourses(coursesMock);
      setIsLoaded(true);
    }, 1000);
  }, []);
  return (
    <>
      <Header isSecondary={true} />
      <Main>
        <Section title={"All lectures"} search={true} loading={isLoaded}>
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
