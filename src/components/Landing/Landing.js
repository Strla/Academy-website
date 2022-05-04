import { Button } from "../../lib/style/generalStyles";
import LandingImage from "../../assets/images/landing.jpg";
import {
  Landing as LandingWrapper,
  LandingContent,
  LandingContentInner,
  LandingImg,
  LandingLink,
  LandingOverlay,
  LandingSubtitle,
  LandingTitle,
  OverlayPrimary,
  OverlaySecondary,
} from "./LandingStyle";

const Landing = () => {
  return (
    <LandingWrapper>
      <LandingImg src={LandingImage} alt="landing" />
      <LandingOverlay>
        <OverlayPrimary></OverlayPrimary>
        <OverlaySecondary></OverlaySecondary>
      </LandingOverlay>
      <LandingContent>
        <LandingContentInner>
          <LandingTitle>Learn what matters with Speck and FOI</LandingTitle>
          <LandingSubtitle>
            Make a turnaround in your career or upgrade your current skill set
            with knowledge-based lessons from IT practice
          </LandingSubtitle>
          <LandingLink to="/courses">
            <Button isLanding={true}>Explore Courses</Button>
          </LandingLink>
        </LandingContentInner>
      </LandingContent>
    </LandingWrapper>
  );
};

export default Landing;
