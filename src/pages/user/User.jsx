import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./user.css";

export default function User({userid,setUpdate,setUpadatedData}) {
  const [username,setUsername]=useState(userid.row.username)
  const[email,setEmail]=useState(userid.row.email)
  const[trasaction,setTrasanction]=useState(userid.row.transaction)
  
  const handleUpdate=()=>{
    // e.preventDefault()
    setUpdate(true)
    setUpadatedData({
      username,email,trasaction,status: "active",id:userid.id
    })
  }
 
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.945Ah9KMKSW-yMhAtLLTQQHaKF&pid=Api&P=0"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Shaik Baji</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">shaikbaji003@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">10.12.1999</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">7095227142</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">shaikbaji003@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">IND</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              {/* <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="Enter User Name"
                  className="userUpdateInput"
                  value={details.username}
                  onChange={(e)=>{setDeatails((prev)=>{prev:prev,username:e.target.value})}}
                />
              </div> */}
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  className="userUpdateInput"
                  value={username}
                  onChange={(e)=>{setUsername(e.target.value)}}
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="Enter Email"
                  className="userUpdateInput"
                  value={email}
                  onChange={(e)=>{setEmail(e.target.value)}}
                />
              </div>
              <div className="userUpdateItem">
                <label>trasaction</label>
                <input
                  type="text"
                  placeholder="Enter Phone Number"
                  className="userUpdateInput"
                  value={trasaction}
                  onChange={(e)=>{setTrasanction(e.target.value)}}
                />
              </div>
              {/* <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Enter City"
                  className="userUpdateInput"
                />
              </div> */}
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt="Add image"
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <Link to='/users'>
                <button className="userUpdateButton" onClick={()=>{handleUpdate()}} >Update</button>  
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
