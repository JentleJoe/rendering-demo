"use client"
import { useState } from "react"

export default function Dashboard(){
    const [name, setName]= useState('')

    console.log("Dashboard client Component")
    
    return(
        <div>
            <h1>Dashboard</h1>
            <span> Name: </span><input className="bg-white text-black" value={name} onChange={(e) => setName(e.target.value) } />
            <p>Hello, {name}</p>
        </div>
    )
}