import React, { useEffect, useState } from 'react'
import UsersCard from './UsersCard'
import "./users.modules.css";
import axios from "axios";


const Users = () => {
  const [user,setUser]=useState([]);
  const [loader,setloader]=useState(true);
  const getUsers=()=>{
    axios.get("https://long-gray-tam.cyclic.app/users/")
    .then((res)=>{
      console.log(res.data)
      setUser(res.data);
      setloader(false)
    })
    .catch(err=>console.log(err))
  }
  useEffect(()=>{
    getUsers()
  },[])
  return (
    <div className='users'>
      {loader?(<img src="https://cdn.dribbble.com/users/1787505/screenshots/7300251/media/a351d9e0236c03a539181b95faced9e0.gif"/>):user?.map((el)=>{
        return <UsersCard key={el._id} name={el.name} email={el.email} id={el._id} getUsers={getUsers} />
      })}
    </div>
  )
}

export default Users