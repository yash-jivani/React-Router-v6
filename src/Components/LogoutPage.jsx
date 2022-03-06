
import React from 'react'
import { useLocation } from 'react-router-dom'

export default function LogoutPage() {
    let loc = useLocation()
    console.log(loc)
  return (
    <>
        <h1>Logout page</h1>
        <h3>Location : {loc.pathname} </h3>
    </>
  )
}
