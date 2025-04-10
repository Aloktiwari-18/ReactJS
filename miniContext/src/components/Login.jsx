import React ,{useState,useContext}from 'react'
import userContext from '../context/UserContext'

function Login() {
const [userName,setUserName]=useState('')

const [userPassword,setUserPassword]=useState('')

const {setUser}=useContext(userContext)

const handleSubmit=(e)=>{
    e.preventDefault()
    setUser({userName,userPassword})

}
  return (
    <div>
      <h2>Login </h2>
      <input  type="text" 
      placeholder='userName' 
      value={userName}
      onChange={(e)=>setUserName(e.target.value)}/>


    <input  type="text" 
      placeholder='Password' 
      value={userPassword}
      onChange={(e)=>setUserPassword(e.target.value)}
    />
    <button onClick={handleSubmit}>Submit</button>



    </div>
  )
}

export default Login
