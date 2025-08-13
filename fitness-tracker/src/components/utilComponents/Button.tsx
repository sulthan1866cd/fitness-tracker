interface Props {
  children: string;
  onClick: () => void;
  color:"yellow"|"white"
}
const Button = ({ children, onClick ,color}: Props) => {
  return (
    <button className={`button button-${color}` }onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
