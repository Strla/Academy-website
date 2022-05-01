import Button from "../Button/Button";
import "./Landing.scss";
import LandingImg from "../../assets/images/landing.jpg";

const Landing = () => {
  return (
    <div className="Landing">
      <img src={LandingImg} alt="landing" className="Landing-Img" />
      <div className="Landing-Overlay">
        <div className="Landing-OverlayPrimary"></div>
        <div className="Landing-OverlaySecondary"></div>
      </div>
      <div className="Landing-Content">
        <div className="Landing-ContentInner">
          <h1 className="Landing-Title">
            Learn what matters with Speck and FOI
          </h1>
          <p className="Landing-Subtitle">
            Make a turnaround in your career or upgrade your current skill set
            with knowledge-based lessons from IT practice
          </p>
          <Button modifiers={["landing"]}>Explore Courses</Button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
