const BreakLength = props => {

  const increment = (  ) =>{ 
    if ( props.breakLength<60 ) {
      props.setBreakLength( p => p+1 )
    }
  }
  const decrement = (  ) => { 
    if ( props.breakLength>1 ) {
      props.setBreakLength( p => p-1 )
    }
  }

  return ( <div className="break">
    <h1 id="break-label">Break Length</h1>
    <button onClick={increment} id="break-increment">Increment</button>
    <h2 id="break-length">{props.breakLength}</h2>
    <button onClick={decrement} id="break-decrement">Decrement</button>
  </div> ) 
}

export default BreakLength
