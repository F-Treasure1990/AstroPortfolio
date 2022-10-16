import "./Button.scss"
import useFlashMessage from "@hooks/useFlashMessage"

interface iButton {
  variant: "solid" | "border" | "code" | "design" | "neutral" | string;
  label?: string | Date;
  children?: React.ReactNode;
  flashMessage?: boolean
}

export default function Button({ variant, children, label, flashMessage }: iButton) {
  const [_, toggleFlashMessage] = useFlashMessage()

  return (
  //@ts-ignore
    <button className={`btn ${variant}`} onClick={flashMessage ? toggleFlashMessage : undefined}>
      {children}
      {label}
      {variant === "code" && "code"}
      {variant === "design" && "design"}
    </button>
  )
}

