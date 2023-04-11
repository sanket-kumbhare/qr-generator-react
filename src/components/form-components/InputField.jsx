const InputField = ({ id, name, label, type }) => {
  return (
    <div className="mb-3">
      <label htmlFor={id}>{label}</label>
      <input type={type} name={name} id={id} className="form-control" />
    </div>
  );
};

export default InputField;
