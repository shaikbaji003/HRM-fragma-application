import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import SignIn from "./components/SignIn";
import { useState } from "react";
function App() {
  const [userId,setuserid]=useState({});
  const [update,setUpdate]=useState(false)
  const [updateddata,setUpadatedData]=useState({});
  const [id,setId]=useState(11);
  const [newUser,setNewUser]=useState({})
  const [newuse,setNewuse]=useState(false);

  
  return (


    <Router>
      {/* <SignIn path='/signin'/> */}
      <Topbar />
      <div className="container">
      <Sidebar />
        <Switch>
          <Route exact path="/">
          
            <Home />
             
          </Route>
          <Route path="/users">
            <UserList newUser={newUser} newuse={newuse} setNewUser={setNewUser}  setuserid={setuserid} update={update} updateddata={updateddata}  setUpdate={setUpdate}/>
          </Route>
          <Route path="/user/:userId">
            <User  userid={userId} setUpdate={setUpdate} setUpadatedData={setUpadatedData} />
          </Route>
          <Route path="/newUser">
            <NewUser setNewUse={setNewuse} id={id} setId={setId} setNewUser={setNewUser}/>
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
