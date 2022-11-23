import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import './App.css'
export default function ContactView() {
    const [users,setUsers]=useState([]);

    const {id}=useParams();

    useEffect(()=>{
        loadUsers();

    },[]);

    const loadUsers=async ()=>{
        const result=await axios.get("http://localhost:8081/api/test/contact/allcontacts");
        setUsers(result.data);
    }

    const deleteUser=async(id)=>{
      await axios.delete(`http://localhost:8081/api/test/contact/${id}`);
      loadUsers();
    }



    return (
        <div>
            <div>
            <table class='contactviewtable'>
  <thead class='header'>
    <tr>
      <th scope="col">#</th>
      <th scope="col">UserName</th>
      <th scope="col">Email</th>
      <th scope="col">Query</th>
      <th scope='col'>Action</th>
    </tr>
  </thead>

  <tbody>
    { 
    users.map((user,index)=>{
     return(   <tr>
      <th scope="row" key={index}>{index+1}</th>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.query}</td>
      <td>
        <button className='btn btn-danger mx-2' onClick={()=>deleteUser(user.id)}>Delete</button>
      </td>
    </tr>)
})}
  </tbody>
  
</table>
            </div>
            
        </div>
    )
}