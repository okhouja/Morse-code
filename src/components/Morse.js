import MorseCodes from "./MorseCode";
import { useState } from "react";

const MorseConverter = () => {
  console.log(MorseCodes);
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState("");

  const changeHandle = (e) => {
    setUserInput(e.target.value);
  };
  function convertToMorse() {
    setResult(
      userInput
        .toUpperCase()
        .split("")
        .map((el) => (MorseCodes[el] ? MorseCodes[el] : el))
        .join("")
    );
  }
  return (
    <div>
      <input id="userInput" rows="5" onChange={changeHandle} />
      <button onClick={convertToMorse}>convert</button>
      <div className="result">{result}</div>
    </div>
  );
};
export default MorseConverter;
