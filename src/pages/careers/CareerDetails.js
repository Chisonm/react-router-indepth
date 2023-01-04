import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

export default function CareerDetails() {
    const { careerId } = useParams()
    const career = useLoaderData()

    console.log(career);

  return (
    <div className='career-details'>
        <h2>Career Details for {career.title}</h2>
        <p>Starting Salary: {career.salary}</p>
        <p>Based in: {career.location}</p>
        <div className="details">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, libero!</p>
        </div>
    </div>
  )
}

export const careerDetailsLoader = async ({ params }) => {
    const {careerId} = params
    const res = await fetch(`http://localhost:4000/careers/${careerId}`)

    if(!res.ok){
        throw Error(`Could not fetch career details for id: ${careerId}`)
    }
    const data = await res.json()

    return data 
}