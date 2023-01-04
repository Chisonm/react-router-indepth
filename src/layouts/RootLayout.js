import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'


export default function RootLayout() {
  return (
    <div className="root-layout">
        <header>
            <nav>
                <h1>Jabulani</h1>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>

            <main>
                <Outlet />
            </main>
        </header>
    </div>
  )
}
