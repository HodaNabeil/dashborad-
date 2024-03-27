import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import  "../dashboard.css";

function Users() {
    

  const [users,setUsers]= useState([]);

  const [numberUserEffect,setNumberUserEffect] =useState(0)
  useEffect(()=>{
    fetch("http://127.0.0.1:8000/api/user/show")
    .then((res)=>res.json())
    .then(date => setUsers(date))
  },[numberUserEffect])


  async function deleteUser(id) {
    try{
      const res = await axios.delete(`http://127.0.0.1:8000/api/user/delete/${id}`)
        if(res.status === 200) {
          setNumberUserEffect((pre)=> pre + 1)
        }
    }catch (error){
      console.log(error)
    }
  }

  return (
    <table className="table-users">
          <thead>
          <tr>
          <th>id</th>
          <th>Name</th>
          <th>Email</th>
          <th>action</th>
        </tr>
          </thead>
        <tbody>
          {
            users.map((user,index)=> {
              return(
                <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className="container-icons">
                  <div 
                    onClick={()=>deleteUser(user.id)}
                    >
                  <i className="fa-solid fa-trash"></i>
                  </div>
                  <div>
                  <Link to={`${user.id}`}>
                      <i className="fa-solid fa-pen-to-square"></i>
                  </Link>
                  </div>
                </td>
              </tr>
              )
            })
          }
        </tbody>
      </table>
  );
}

export default Users;
