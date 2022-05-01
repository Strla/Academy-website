import React from "react";
import Button from "../Button/Button";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./Section.scss";

const Section = ({
  modifiers,
  actionText,
  title,
  buttonText,
  isHeadingVisible = true,
  children,
}) => {
  const modifierClasses = {
    testimonials: "Section-Testimonials",
  };

  let sectionClass = "Section";

  if (modifiers) {
    modifiers.map((modifier) => {
      return (sectionClass += " " + modifierClasses[modifier]);
    });
  }

  const navigate = useNavigate();

  return (
    <section className={sectionClass}>
      <div className="Section-Inner">
        {actionText && <span className="Section-ActionText">{actionText}</span>}
        {isHeadingVisible && (
          <div className="Section-Heading">
            {title && <h2 className="Section-Title">{title}</h2>}
            {buttonText === "More Courses" && (
              <Link to="/courses">
                <Button modifiers={["heading", "outline"]}>{buttonText}</Button>
              </Link>
            )}
            {buttonText === "Back" && (
              <Button
                modifiers={["heading", "outline"]}
                onClick={() => navigate(-1)}
              >
                {buttonText}
              </Button>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
