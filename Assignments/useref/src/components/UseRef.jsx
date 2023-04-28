import React, { useState, useEffect, useRef } from 'react';

const Useref = () => { 
  const [timer,setTimer] = useState(0);

  let timerId = useRef(null);
  let h1Ref = useRef(null);
  let startButton = useRef(null);
  let stopButton = useRef(null);

   useEffect(() => {
    if(timer === 0) {
      h1Ref.current.innerText = `Value is ${timer}`;
      h1Ref.current.style.color = 'black';
    }else{
        h1Ref.current.innerText = `Timer Started and Value is ${timer}`
        h1Ref.current.style.color = 'green';
    }
  })

  const startTimer = () => {    
    startButton.current.disabled = true;
    stopButton.current.disabled = false;
    timerId.current = setInterval(() => {     
      setTimer((prevTimer) => prevTimer+1);
    }, 1000);
  }

  const stopTimer = () => {
    startButton.current.disabled = false;
    stopButton.current.disabled = true;
    clearInterval(timerId.current);
    h1Ref.current.innerText = `Timer Stopped and Value is ${timer}`
    h1Ref.current.style.color = 'red';
  }

  return (
    <div>
        <h1 id="timerIdRef" ref={h1Ref}>Timer is {timer}</h1>
        <button onClick={startTimer} ref={startButton}>Start</button>&nbsp;&nbsp;&nbsp;
        <button onClick={stopTimer} ref={stopButton}>Stop</button>
    </div>
  )
}

export default Useref