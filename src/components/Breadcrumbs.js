import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Breadcrumbs() {
    const location = useLocation()

    let currentLink = []
    const crumbs = location.pathname.split('/')
        .filter((path) => path !== '')
        .map((path) => { currentLink.push(`/${path}`)
            return (
                <div className="crumb" key={path}>
                    <Link to={currentLink.join('')}>{path}</Link>
                </div>
            )
    })

  return (
    <div className='breadcrumbs'>
        {crumbs}
    </div>
  )
}
