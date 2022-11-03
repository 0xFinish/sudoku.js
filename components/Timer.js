import { BsFillStopFill } from "react-icons/bs"

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
      </p>
      <BsFillStopFill size={25} onClick={() => {setMinutes(0), setSeconds(0)}} className="timerButton"></BsFillStopFill>
    </div>
  );
}

export { Timer };
