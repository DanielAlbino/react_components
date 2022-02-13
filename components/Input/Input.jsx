const Input = ({ placeholder, handleChange }) => {
  return (
    <input
      className="d-input"
      placeholder={placeholder}
      onChange={(e) => handleChange(e)}
    ></input>
  );
};

export default Input;
