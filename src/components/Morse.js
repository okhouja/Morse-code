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
      <textarea id="userInput" rows="5" onChange={changeHandle} />
      <button onClick={convertToMorse}>convert</button>
      <div>{result}</div>
    </div>
  );
};
export default MorseConverter;
