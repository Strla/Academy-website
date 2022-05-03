import React from "react";
import "./SingleCourse.scss";

const SingleCourse = ({ imgSrc, imgAlt, text }) => {
  return (
    <div className="SingleCourse">
      <figure className="SingleCourse-Figure">
        <img src={imgSrc} alt={imgAlt} className="SingleCourse-Image" />
      </figure>
      <p className="SingleCourse-Text">{text}</p>
    </div>
  );
};

export default SingleCourse;
