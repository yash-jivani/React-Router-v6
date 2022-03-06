import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Dashborad() {
    let redirect = useNavigate()
  return (
    <>
    <h1>Dashborad Page | isloggedIn value = True</h1>
    <button onClick={()=>{
        redirect("/login")
    }}>Log out</button>
    </>
  )
}
