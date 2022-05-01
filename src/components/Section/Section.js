import React from "react";
import Button from "../Button/Button";
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

  return (
    <section className={sectionClass}>
      <div className="Section-Inner">
        {actionText && <span className="Section-ActionText">{actionText}</span>}
        {isHeadingVisible && (
          <div className="Section-Heading">
            {title && <h2 className="Section-Title">{title}</h2>}
            {buttonText && (
              <Button modifiers={["heading", "outline"]}>{buttonText}</Button>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
