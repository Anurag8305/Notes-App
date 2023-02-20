import React, { useEffect, useState } from 'react'
import axios from "axios";
import "../users.modules.css";
import NotesCard from './NotesCard';

const AllNotes = () => {
  const [loader,setloader]=useState(true);
  const [notes,setNotes]=useState([]);
  const getNotes=()=>{
    axios.get("https://long-gray-tam.cyclic.app/notes/",{
      headers: {
        Authorization: localStorage.getItem("token")
      }})
    .then((res)=>{
      console.log(res.data)
      setNotes(res.data)
      setloader(false)
    })
    .catch(err=>console.log(err))
  }
  useEffect(()=>{
    getNotes()
  },[])
  return (
    <div className='notes'>
    {loader?(<img src="https://cdn.dribbble.com/users/1787505/screenshots/7300251/media/a351d9e0236c03a539181b95faced9e0.gif"/>):notes?.map((el)=>{
        return <NotesCard key={el._id} category={el.category} notes={el.note} id={el._id} titles={el.title} getNotes={getNotes} />
      })}
    {/* {notes?.map((el)=>{
        return <NotesCard key={el._id} category={el.category} notes={el.note} id={el._id} titles={el.title} getNotes={getNotes} />
      })
    } */}
    </div>
  )
}

export default AllNotes