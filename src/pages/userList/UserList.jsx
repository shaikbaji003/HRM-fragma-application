import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ResponsiveDialog from "../../components/ResponsiveDailog";








export default function UserList({setuserid,updateddata,update,setUpdate,newUser,setNewUser, newuse}) {

  const [data, setData] = useState(userRows);

  
  console.log(newUser)
  
 
  useEffect(()=>{
    if(update===true){
      setData(data.map((e)=>{
        if(e.id===updateddata.id){
          console.log("found item"+updateddata.username)
          e.username=updateddata.username
          e.email=updateddata.email
          e.transaction=updateddata.trasaction
          setUpdate(false)
        }

        return e;
      }))
    }
  },[update,updateddata])
  useEffect(()=>{
    if(newuse===true){
      setData([...data,newUser])
    }
  },[newuse])
  console.log(data)
  const edithandler=(id)=>{
   
    setuserid(id);
  }
  const handleDelete = (id) => {
    window.alert('Are you sure wants to delete?')
    setData(data.filter((item) => item.id !== id));
  };
  
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit" onClick={()=>{edithandler(params)}}>Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={20}
        checkboxSelection
      />
    </div>
  );
}




