import BreakLength from './components/BreakLength'
import SessionLength from './components/SessionLength';
import Timer from './components/Timer'
import {useState, useEffect} from 'react';


function App() {
  const [breakLength, setBreakLength] = useState(5)
  const [session, setSession] = useState(10)
  const [timer, setTimer] = useState({ minutes: 10, seconds:0 })
  const [start, setStart] = useState(false)
  const [breakStart, setBreakStart] = useState(false)
  let audio = new Audio('./sounds/clocksound.mp3')


  useEffect( () => { 
    const interval =setInterval(() => {
    if(start){ 
      if(timer.minutes===0 && timer.seconds<1){ setStart(false); setBreakStart(true);audio.play();}
      else if(timer.seconds>0){setTimer( p => ({...p, seconds: p.seconds-1}));}
      else if (timer.seconds===0) {setTimer( p => ({minutes:p.minutes-1, seconds: 59}));}
    }
      else if(breakStart){
        if(timer.minutes===breakLength){setStart(true);setBreakStart(false); setTimer({minutes:session,seconds:0});}
        else if( timer.seconds===59 ){
          setTimer(p=> ({minutes:p.minutes+1, seconds:0}))
        }
        else if(timer.seconds<60){
          setTimer(p=> ( {...p, seconds: p.seconds+1} ))
        }
      }
    }, 1000);

    return (  ) => { 
      clearInterval(interval)
    }
    
  },[start,timer] )
  
  return (
    <div className="App">
      <div className='config'>
        <BreakLength breakLength={ breakLength } setBreakLength={setBreakLength}/>
        <SessionLength session={session} setSession={setSession} setTimer={setTimer}/>      
      </div>
      <Timer breakStart={breakStart} setBreakStart={setBreakStart} setStart={setStart} timer={timer} setTimer={setTimer} session={session}/>
    </div>
  );
}
export default App;
