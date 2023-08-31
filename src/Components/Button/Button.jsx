import "./button.scss";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Button = ({ value }) => {
  const { pageChange } = useParams();
  const navigate = useNavigate();

  const pageNavigate = () => {
    navigate(`/movie/${value}`);
  };

  return (
    <>
      <button
        className={`${value === +pageChange ? "active" : null}`}
        onClick={pageNavigate}
        value={value}
      >
        {value}
      </button>
    </>
  );
};

export default Button;
