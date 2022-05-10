import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { Main, Grid } from "../../lib/style/generalStyles";
import Section from "../../components/Section/Section";
import CourseCard from "../../components/CourseCard/CourseCard";

import coursesMock from "../../lib/mock/courses";
import Loader from "../../components/Loader/Loader";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setCourses(coursesMock);
      setIsLoaded(true);
    }, 1000);
  }, []);

  const filteredCourses = courses.filter((course) => {
    if (inputText === "") {
      return course;
    } else {
      return course.title.toLowerCase().includes(inputText);
    }
  });

  const handleSearch = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <>
      <Header isSecondary={true} />
      <Main>
        <Section
          title={"All lectures"}
          search={true}
          loading={isLoaded}
          onValueChange={handleSearch}
          isMainSection={true}
        >
          {courses.length > 0 ? (
            <Grid>
              {filteredCourses.map((course) => {
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
