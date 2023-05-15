import "./Nacho.css";

import NACHO from "./NACHO.png";
import HAPPYNACHO from "./HAPPYNACHO.png";
import ANGRYNACHO1 from "./ANGRYNACHO1.png";
import ANGRYNACHO2 from "./ANGRYNACHO2.png";
import ANGRYNACHO3 from "./ANGRYNACHO3.png";
import ANGRYNACHO4 from "./ANGRYNACHO4.png";
import ANGRYNACHO5 from "./ANGRYNACHO5.png";

import { useState } from "react";

const Nacho = () => {
  const [answer, setAnswer] = useState("");
  const [wrongAnswerCount, setWrongAnswerCount] = useState(0);
  const [imageSrc, setImageSrc] = useState(NACHO);
  const [alertMessage, setAlertMessage] = useState("");

  const angryNachoImages = [
    null,
    ANGRYNACHO1,
    ANGRYNACHO2,
    ANGRYNACHO3,
    ANGRYNACHO4,
    ANGRYNACHO5,
  ];

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      checkAnswer();
    }
  };

  // win/lose handling
  const handleWin = () => {};
  const handleLose = () => {};

  const checkAnswer = () => {
    if (answer === "4") {
      //correct answer
      setAlertMessage("Yay you will not be raped today");
      setImageSrc(HAPPYNACHO);
      handleWin();
    } else {
      setWrongAnswerCount((prevCount) => prevCount + 1);
      if (wrongAnswerCount >= 4) {
        setImageSrc(ANGRYNACHO5);
        //too many incorrect answers
        setAlertMessage("You are about to get raped");
        handleLose();
      } else {
        const angryNachoImage = angryNachoImages[wrongAnswerCount + 1];
        setImageSrc(angryNachoImage!);
        //incorrect answer
        setAlertMessage("Deck tiii... ti RETARDIRAN LI SI BE?");
      }
    }
  };
  return (
    <>
      <h1>WILD NACHO IN YOUR AREA!</h1>
      <h1>ANSWER THIS QUESTION OR FACE THE CONSEQUENCES</h1>
      <img src={imageSrc} alt="NACHO.png" width={"400px"} />
      <h2>How many children has NACHO euthanised?</h2>
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      {alertMessage && <div>{alertMessage}</div>}
    </>
  );
};

export default Nacho;
