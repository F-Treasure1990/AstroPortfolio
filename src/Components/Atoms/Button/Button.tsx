import "./Button.scss"
interface iButton {
  variant: "solid" | "border" | "code" | "design" | "neutral" | string;
  label?: string | Date;
  children?: React.ReactNode;
}

export default function Button({ variant, children, label }:iButton) {
  return (
    <button className={`btn ${variant}`}>
      {children}
      {label}
      {variant === "code" && "code"}
      {variant === "design" && "design"}
    </button>
  )
}

