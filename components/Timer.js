import {
  faCirclePause,
  faPause,
  faPauseCircle,
  faStop,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Timer(props) {
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);

  React.useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds !== 59) {
        setSeconds(seconds + 1);
      } else {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div className="Timer">
      <p>
        <span>Timer :</span> {`${minutes} : ${seconds}`}
        {/* <FontAwesomeIcon
          className="timerButton"
          icon={faPause}
        ></FontAwesomeIcon> */}
        <FontAwesomeIcon
          className="timerButton"
          icon={faStop}
          onClick={() => {setMinutes(0), setSeconds(0)}}
        ></FontAwesomeIcon>
      </p>
    </div>
  );
}

export { Timer };
