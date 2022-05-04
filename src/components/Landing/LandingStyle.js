import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../lib/style/theme";

export const Landing = styled.div`
  height: 100vh;
  position: relative;
`;

export const LandingImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const LandingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const OverlayPrimary = styled.div`
  position: absolute;
  height: 100%;
  width: 27%;
  left: 0;
  background-color: ${colors.overlayPrimary};
`;

export const OverlaySecondary = styled.div`
  position: absolute;
  height: 100%;
  right: 0;
  width: 73%;
  background-color: ${colors.overlaySecondary};
`;

export const LandingContent = styled.div`
  position: absolute;
  top: 0;
  left: calc((100% - 1300px) / 2);
  width: 1300px;
  display: flex;
  align-items: center;
  height: 100%;
`;

export const LandingContentInner = styled.div``;

export const LandingTitle = styled.h1`
  color: ${colors.secondary};
  font-size: 56px;
  width: 550px;
  margin-bottom: 24px;
`;

export const LandingSubtitle = styled.p`
  color: ${colors.secondary};
  font-size: 16px;
  width: 440px;
  margin-bottom: 48px;
`;

export const LandingLink = styled(Link)``;
