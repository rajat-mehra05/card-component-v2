import { useState } from "react";

const RomanConvertor = () => {
  const [input, setInput] = useState("");

  const romanToInt = () => {
    if (input === "") return;

    var num = charToInt(input.charAt(0));
    var curr, pre;

    for (let i = 1; i < input.length; i++) {
      curr = charToInt(input.charAt(i));
      pre = charToInt(input.charAt(i - 1));

      if (curr <= pre) {
        num += curr;
      } else {
        num = num - pre * 2 + curr;
      }
    }
    console.log(num);
  };

  function charToInt(c) {
    switch (c) {
      case "I":
        return 1;
      case "V":
        return 5;
      case "X":
        return 10;
      case "L":
        return 50;
      case "C":
        return 100;
      case "D":
        return 500;
      case "M":
        return 1000;

      default:
        return -1;
    }
  }

  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button onClick={romanToInt}> Change </button>
    </div>
  );
};

export default RomanConvertor;
