import "./Button.scss";

const Button = ({ modifiers, children, onClick }) => {
  const modifierClasses = {
    secondary: "Button-Secondary",
    nav: "Button-Nav",
    landing: "Button-Landing",
    heading: "Button-Heading",
    outline: "Button-Outline",
  };

  let buttonClass = "Button";

  modifiers.map((modifier) => (buttonClass += " " + modifierClasses[modifier]));
  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
