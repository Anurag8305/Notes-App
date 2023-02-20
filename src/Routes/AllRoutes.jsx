import React from 'react'
import {Routes,Route} from "react-router-dom"
import About from '../Components/About'
import HomePage from '../Components/HomePage'
import Login from '../Components/Login'
import Signup from '../Components/Signup'
import AllNotes from '../Components/Toodos/AllNotes'
import Todos from '../Components/Toodos/Todos'
import UserNotes from '../Components/Usernotes'
import Users from '../Components/Users'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/users' element={<Users />} />
        <Route path='/notes' element={<Todos />} />
        <Route path='/allnotes' element={<AllNotes />} />
        <Route path='/usernotes' element={<UserNotes />} />
      </Routes>
    </div>
  )
}

export default AllRoutes