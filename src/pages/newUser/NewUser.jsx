import "./newUser.css";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function NewUser({id,setId,setNewUser,setNewUse}) {
  const [username,setUsername]=useState("")
  const[email,setEmail]=useState("")
  const[transaction,setTrasanction]=useState("")
  const[status,setStatus]=useState("active")
  const createhandler=(e)=>{
    // e.preventDefault()
    setId(id+1);
    setNewUse(true)
    setNewUser({
      username,email,transaction,status,avatar:
      "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      id:id
    })
  }
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="Enter Name" value={username} onChange={(e)=>{setUsername(e.target.value)}} />
        </div>
        {/* <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="Enter Full Name" value={} />
        </div> */}
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="Enter Email" value={email}  onChange={(e)=>{setEmail(e.target.value)}} />
        </div>
        {/* <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div> */}
        <div className="newUserItem">
          <label>transaction</label>
          <input type="text" placeholder="Enter Phone number" value={transaction}  onChange={(e)=>{setTrasanction(e.target.value)}} />
        </div>
        {/* <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="Enter Address" />
        </div> */}
        {/* <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div> */}
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" value={status} onChange={(e)=>setStatus(e.target.value)} name="active" id="active">
            <option value="active">active</option>
            <option value="not active">Not active</option>
          </select>
        </div>
        <div>
          <Link to='/users'>
              <button onClick={()=>createhandler()} className="newUserButton">Create</button>
          </Link>
        </div>
      </form>
    </div>
  );
}
