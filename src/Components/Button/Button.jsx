import "./button.scss";

const Button = ({ value, setInput }) => {
  return (
    <>
      <button onClick={(e) => setInput(e.target.value)} value={value}>
        {value}
      </button>
    </>
  );
};

export default Button;
