import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Landing from "../../components/Landing/Landing";
import Main from "../../components/Main/Main";
import Section from "../../components/Section/Section";
import CourseCard from "../../components/CourseCard/CourseCard";
import { Grid } from "../../lib/style/generalStyles";
import Testimonial from "../../components/Testimonial/Testimonial";

import coursesMock from "../../lib/mock/courses";

const Home = () => {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setCourses(coursesMock);
    }, 1000);
  }, []);
  return (
    <>
      <Header />
      <Main>
        <section>
          <Landing />
        </section>
        <Section
          actionText={"Learn something new"}
          title={"Open your new possibilites"}
          buttonText={"More Courses"}
        >
          {courses && (
            <Grid>
              {courses.map(
                (course, index) =>
                  index <= 3 && (
                    <CourseCard
                      key={course.id}
                      courseId={course.id}
                      imgSrc={course.imgSrc}
                      imgAlt={course.imgAlt}
                      title={course.title}
                      subtitle={course.subtitle}
                    />
                  )
              )}
            </Grid>
          )}
        </Section>
        <Section modifiers={["testimonials"]} isHeadingVisible={false}>
          <Testimonial />
        </Section>
      </Main>
    </>
  );
};

export default Home;
