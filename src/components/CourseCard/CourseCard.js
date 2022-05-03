import React from "react";
import "./CourseCard.scss";
import { CourseLink, Figure, Image, Subtitle, Title } from "./CourseCardStyle";

const CourseCard = ({ courseId, imgSrc, imgAlt, title, subtitle }) => {
  return (
    <CourseLink to={`/course/${courseId}`}>
      <Figure>
        <Image src={imgSrc} alt={imgAlt} />
      </Figure>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </CourseLink>
  );
};

export default CourseCard;
