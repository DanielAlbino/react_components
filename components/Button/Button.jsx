const Button = ({ text, click }) => {
  return (
    <div className="d-btn" onClick={(_) => click()}>
      {text}
    </div>
  );
};

export default Button;
