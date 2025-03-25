import { ButtonProps } from "../../types/interface";

function Button({ text, variant, onClick, children }: ButtonProps) {
  //   const btnVariant = "button--" + variant;

  return (
    <button className={`${variant}`} onClick={onClick}>
      {text}
      {children ? children : null}
    </button>
  );
}

export default Button;
