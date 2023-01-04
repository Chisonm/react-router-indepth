import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function HelpLayout() {
  return (
    <div className='help-layout'>
        <h2>Website Help</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, distinctio.</p>

        <nav>
            <NavLink to="faq">FAQ</NavLink>
            <NavLink to="contact">Contact Us</NavLink>
        </nav>
        <Outlet />
    </div>
  )
}
