import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
        <h2>Page not found</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, similique. Recusandae debitis unde deserunt fuga aspernatur nesciunt a aliquid labore voluptate, 
            laborum ex amet suscipit, ullam tenetur eaque, reiciendis officia!</p>
            
        <p>Go to the <Link to="/">Homepage</Link></p>
    </div>
  )
}
