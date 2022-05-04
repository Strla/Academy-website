import styled from "styled-components";
import { breakpoints, colors } from "../../lib/style/theme";

export const SingleCourse = styled.div`
  @media (${breakpoints.tablet}) {
    display: flex;
    justify-content: space-between;
  }
`;

export const CourseFigure = styled.figure`
  width: 100%;
  height: auto;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 32px;

  @media (${breakpoints.tablet}) {
    width: 350px;
    height: 350px;
    margin-bottom: 0;
    flex-shrink: 0;
  }

  @media (${breakpoints.desktopLarge}) {
    width: 450px;
    height: 450px;
  }
`;

export const CourseImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CourseText = styled.p`
  font-size: 16px;
  line-height: 180%;
  color: ˘ ${colors.textPrimary};

  @media (${breakpoints.tablet}) {
    padding-left: 48px;
  }

  @media (${breakpoints.desktopLarge}) {
    padding-left: 64px;
  }
`;
