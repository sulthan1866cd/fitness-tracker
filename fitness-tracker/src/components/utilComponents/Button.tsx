interface Props {
  children: string;
  onClick: () => void;
  color: "yellow" | "white";
  disabled?: boolean;
}
const Button = ({ children, onClick, color, disabled }: Props) => {
  return (
    <button
      disabled={disabled}
      className={`button button-${color}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
