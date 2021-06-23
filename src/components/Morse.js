import MorseCodes from "./MorseCode";
import { useState } from "react";

const MorseConverter = () => {
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
    <div className="container">
      <textarea
        id="userInput"
        placeholder="Please enter the Text"
        onKeyUp={convertToMorse}
        onChange={changeHandle}
      />

      <textarea
        className="result"
        placeholder="Here comes Morse Code"
        value={result}
        readOnly
      />
    </div>
  );
};
export default MorseConverter;
