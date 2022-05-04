import styled from "styled-components";
import { Link } from "react-router-dom";
import { breakpoints, colors } from "../../lib/style/theme";

export const Section = styled.section`
  padding: 60px 24px;

  @media (${breakpoints.desktop}) {
    padding: 120px 0;
  }

  ${(props) =>
    props.isTestimonial &&
    `
      background-color: ${colors.bgSecondary};
  `}
`;

export const SectionInner = styled.div`
  @media (${breakpoints.desktop}) {
    width: 960px;
    margin: 0 auto;
  }

  @media (${breakpoints.desktopLarge}) {
    width: 1260px;
  }
`;

export const ActionText = styled.span`
  display: block;
  color: ${colors.primary};
  font-weight: 500;
  margin-bottom: 24px;
`;

export const SectionHeading = styled.div`
  margin-bottom: 64px;

  @media (${breakpoints.tablet}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const SectionTitle = styled.h2`
  color: ${colors.textPrimary};
  font-size: 26px;
  font-weight: 500;
  margin-bottom: 32px;

  @media (${breakpoints.tablet}) {
    font-size: 32px;
    margin-bottom: 0;
  }

  @media (${breakpoints.desktop}) {
    font-size: 36px;
  }
`;

export const SectionLink = styled(Link)``;
