import React from "react";
import { Button } from "../../lib/style/generalStyles";
import { useNavigate } from "react-router-dom";
import {
  ActionText,
  SectionHeading,
  SectionInner,
  SectionLink,
  SectionTitle,
  Section as SectionWrapper,
} from "./SectionStyle";
import SearchBar from "../SearchBar/SearchBar";

const Section = ({
  actionText,
  title,
  buttonText,
  isHeadingVisible = true,
  children,
  isTestimonial,
  search,
  loading,
  onValueChange,
}) => {
  const navigate = useNavigate();

  return (
    <SectionWrapper isTestimonial={isTestimonial}>
      <SectionInner>
        {actionText && <ActionText>{actionText}</ActionText>}
        {isHeadingVisible && (
          <SectionHeading>
            {title && <SectionTitle>{title}</SectionTitle>}
            {search && (
              <SearchBar
                placeholder="Search courses"
                isDisabled={loading}
                onValueChange={onValueChange}
              />
            )}
            {buttonText === "More Courses" && (
              <SectionLink to="/courses">
                <Button isHeading={true} isOutline={true}>
                  {buttonText}
                </Button>
              </SectionLink>
            )}
            {buttonText === "Back" && (
              <Button
                isHeading={true}
                isOutline={true}
                onClick={() => navigate(-1)}
              >
                {buttonText}
              </Button>
            )}
          </SectionHeading>
        )}
        {children}
      </SectionInner>
    </SectionWrapper>
  );
};

export default Section;
