const SessionLength = props => {
  const increment = (  ) => { 
    if (props.session<60) {
      props.setSession( p => p +1 )
      props.setTimer( {minutes:props.session +1,seconds:0 })
    }
  }
  const decrement = (  ) => { 
    if( props.session > 1 ){
      props.setSession( p => p -1 )
      props.setTimer( {"minutes":props.session -1,"seconds":0 })
    }
  }


  return ( <div className="session">
    <h1 id="session-label">Session Length</h1>
    <button onClick={increment} id="session-increment">Increment</button>
    <h2 id="session-length">{props.session}</h2>
    <button onClick={decrement} id="session-decrement">Decrement</button>
  </div> )
}

export default SessionLength
