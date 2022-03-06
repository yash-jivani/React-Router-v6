import React from "react";
import { Link, NavLink } from "react-router-dom";

// prefer to NavLink

export default function Navbar() {
  return (
    <>
      <ul>
        <li>
        {/* <Link to="/">Home</Link> */}
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <Link to="/about">About</Link>
        {/* <NavLink to="/about">About</NavLink> */}
        </li>
        <li>
        {/* <Link to="/contact">Contact</Link> */}
          <NavLink to="/contact">Contact</NavLink>
        </li>

{/* dynamic url */}
{/* defualt xyz location */}
        <li>
          <NavLink to="/post/xyz">Post1</NavLink>
        </li>
{/* default location : xyz >> x0 */}
        <li>
          <NavLink to="/post/xyz/0">Post2</NavLink>
        </li>
{/* conditional part | url links */}
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/dashborad">Dashborad</NavLink>
        </li>
{/* useNavigate */}
        <li>
          <NavLink to="/logout">Logout</NavLink>
        </li>



      </ul>
    </>
  );
}
