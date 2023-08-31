import { useState, useEffect, useMemo } from "react";
import { IoCaretBackOutline, IoCaretForward } from "react-icons/io5";
import genArray from "../../utility/genArray";
import Button from "../Button/Button";
import "./pagecounter.scss";

const PageCounter = () => {
  const [btnForEnable, setBtnForEnable] = useState(false);
  const [btnRevEnable, setBtnRevEnable] = useState(false);
  const [num, setNum] = useState(0);

  const page = useMemo(() => genArray(num), [num]);

  useEffect(() => {
    if (num >= 90) {
      setBtnForEnable(true);
    } else {
      setBtnForEnable(false);
    }

    if (num <= 0) {
      setBtnRevEnable(true);
    } else {
      setBtnRevEnable(false);
    }
  }, [num]);

  const changeNumInc = () => {
    setNum((prevNum) => Math.min(prevNum + 10, 90));
  };

  const changeNumDec = () => {
    setNum((prevNum) => Math.max(prevNum - 10, 0));
  };

  return (
    <div className="btn-cont">
      <button
        disabled={btnRevEnable}
        className="btn-icon"
        onClick={changeNumDec}
      >
        <IoCaretBackOutline />
      </button>

      {page.map((item, i) => (
        <Button key={i} value={item} />
      ))}
      <button
        disabled={btnForEnable}
        className="btn-icon"
        onClick={changeNumInc}
      >
        <IoCaretForward />
      </button>
    </div>
  );
};

export default PageCounter;
