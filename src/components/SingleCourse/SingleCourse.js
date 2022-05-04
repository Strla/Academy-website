import React from "react";
import {
  CourseFigure,
  CourseImg,
  CourseText,
  SingleCourse as SingleCourseWrapper,
} from "./SingleCourseStyle";

const SingleCourse = ({ imgSrc, imgAlt, text }) => {
  return (
    <SingleCourseWrapper>
      <CourseFigure>
        <CourseImg src={imgSrc} alt={imgAlt} />
      </CourseFigure>
      <CourseText>{text}</CourseText>
    </SingleCourseWrapper>
  );
};

export default SingleCourse;
