const PrimaryBtn = ({ type, title }) => {
  return (
    <button type={type} className="btn-primary btn">
      {title}
    </button>
  );
};

export default PrimaryBtn;
