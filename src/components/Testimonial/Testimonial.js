import React from "react";
import TestimonialImage from "../../assets/images/testimonial.jpg";
import {
  Testimonial as TestimonialWrapper,
  TestimonialContent,
  TestimonialFigure,
  TestimonialImg,
  TestimonialQuotation,
  TestimonialText,
} from "./TestimonialStyle";

const Testimonial = () => {
  return (
    <TestimonialWrapper>
      <TestimonialFigure>
        <TestimonialImg src={TestimonialImage} alt="Testimonialka" />
      </TestimonialFigure>
      <TestimonialContent>
        <TestimonialText>
          <TestimonialQuotation>"</TestimonialQuotation>
          At the academy, I learned how to apply technology in practice.
          Frontend education was demanding, it required a lot of time. Upon
          completion, I got my first job as a developer.
          <TestimonialQuotation>"</TestimonialQuotation>
        </TestimonialText>
      </TestimonialContent>
    </TestimonialWrapper>
  );
};

export default Testimonial;
