const Timer = props => {

  const handleReset = ()=>{ 
    props.setTimer( {minutes:props.session, seconds:0} )
    props.setBreakStart(false);
    props.setStart(false);
  }
  const handleStartStop = ()=>{ 
    if(props.breakStart===false){
      props.setStart(p => !p);
    }
  }


  return ( <div className="timer">
    <h1 style={ props.breakStart?{color:"green"}:{color:"black"}} id="time-left">{props.timer.minutes}:{props.timer.seconds}</h1>
    <button onClick={handleStartStop} id="start_stop">START-STOP</button>
    <button onClick={handleReset} id="reset">RESET</button>
  </div> )
}

export default Timer
