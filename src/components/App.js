
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
let [name,setName]=useState('');
const displayGreetings=(event)=>{
  setName(event.target.value);
}


  return (
    <div>
        {/* Do not remove the main div */}
    <p>Enter your name:</p>
    <input type="text" value={name} onChange={displayGreetings}/>
    {name ? <p>Hello {name}!</p> : null}
    
  {/* {name && <p>Hello {name}!</p>} */}
    {/* {submittedName ? <h1>Hello, {submittedName}!</h1> : null} */}
    </div>
  )
}

export default App
