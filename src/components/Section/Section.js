import React from "react";
import { Button } from "../../lib/style/generalStyles";
import { useNavigate } from "react-router-dom";
import {
  ActionText,
  SectionHeading,
  SectionInner,
  SectionLink,
  SectionTitleH1,
  SectionTitleH2,
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
  isMainSection = false,
  isCentered = false,
  toggleEdit,
  isDisabled,
}) => {
  const navigate = useNavigate();

  return (
    <SectionWrapper isTestimonial={isTestimonial}>
      <SectionInner>
        {actionText && <ActionText>{actionText}</ActionText>}
        {isHeadingVisible && (
          <SectionHeading>
            {title &&
              (isMainSection ? (
                <SectionTitleH1 isCentered={isCentered}>{title}</SectionTitleH1>
              ) : (
                <SectionTitleH2 isCentered={isCentered}>{title}</SectionTitleH2>
              ))}
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
            {buttonText === "Edit" && (
              <Button isHeading={true} isOutline={true} onClick={toggleEdit}>
                {isDisabled ? buttonText : "Cancel"}
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
