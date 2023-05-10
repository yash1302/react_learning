import React,{useState} from 'react'

export default function Form() {
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[message,setMessage] = useState("");

    const handleSubmit=(key)=>{
        key.preventDefault();
        console.log("data:",{name,email,password});

        setName('');
        setEmail('');
        setPassword('');
    };
    

  return (
    <div>
        <form onSubmit={handleSubmit}>
                NAME:
                <input type="text" value={name} onChange={(key)=>setName(key.target.value)}/>


                EMAIL:
                <input type="email" value={email} onChange={(key)=>setEmail(key.target.value)}/>
         

                password:
                <input type="password" value={password} onChange={(key)=>setPassword(key.target.value)}/>

                <button type='submit'>Submit</button>

        </form>
      
    </div>
  )
}
