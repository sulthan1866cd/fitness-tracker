interface Props {
  percent: number;
}
const Pill = ({ percent }: Props) => {
  return (
    <div className="profile-pill-container">
      <div className="profile-pill">
        <h1 className="display-inline">{percent}</h1>%
      </div>
      {percent === 100 && <p>your profile set</p>}
    </div>
  );
};

export default Pill;
