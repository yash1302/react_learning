import React,{useState} from 'react'


export default function Counter() {
    const[count,setCount]=useState("yash");

    function color(){
        setCount("green");
    }

  return (
    <div>
      <h1>Counter</h1>
      <h1>{count}</h1>
      <button onClick={()=>setCount("blue")}>change to blue</button>
      <button onClick={color}>change to green</button>
    </div>
  )
}
