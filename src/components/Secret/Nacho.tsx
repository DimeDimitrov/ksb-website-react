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
  const [isTransparent, setIsTransparent] = useState(false);
  const [showImage, setShowImage] = useState(false);

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
  const handleWin = () => {
    setTimeout(() => {
      window.location.href = "https://www.pornhub.com/";
    }, 3000);
  };
  const handleLose = () => {
    setIsTransparent(true);
    setShowImage(true);
  };

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
        if (wrongAnswerCount == 0) {
          const angryNachoImage = angryNachoImages[wrongAnswerCount + 1];
          setImageSrc(angryNachoImage!);

          setAlertMessage("You are making Nacho sad with your small number");
        }
        if (wrongAnswerCount == 1) {
          const angryNachoImage = angryNachoImages[wrongAnswerCount + 1];
          setImageSrc(angryNachoImage!);

          setAlertMessage("Nacho is getting angry...");
        }
        if (wrongAnswerCount == 2) {
          const angryNachoImage = angryNachoImages[wrongAnswerCount + 1];
          setImageSrc(angryNachoImage!);

          setAlertMessage("Do not disturb Nacho more than you need to...");
        }
        if (wrongAnswerCount == 3) {
          const angryNachoImage = angryNachoImages[wrongAnswerCount + 1];
          setImageSrc(angryNachoImage!);

          setAlertMessage("Nacho is giving you his last straw");
        }
      }
    }
  };
  return (
    <>
      {showImage && (
        <img
          style={{
            position: "absolute",
            display: "none",
            opacity: "0",
            width: "100%",
            height: "100%",
          }}
          src={HAPPYNACHO}
          alt="Fading Image"
          className={` ${isTransparent ? "fade-in" : ""}`}
        />
      )}
      <div className={`App ${isTransparent ? "transparent" : ""}`}>
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
        {alertMessage && <div className="alert">{alertMessage}</div>}
      </div>
    </>
  );
};

export default Nacho;
