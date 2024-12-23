"use client"
import React from 'react'
import Link from 'next/link'
const student = () => {
  return (
    <div>
        <div>
        <h1>Dynamic routing</h1>
    <br />
    <ul>
        <li><Link href="studentList/DuaZehra">Dua</Link></li>
        <li><Link href="studentList/AliRaza">ALi</Link></li>
        <li><Link href="studentList/Haiderabbas">Haider</Link></li>
        <li><Link href="studentList/shiza">Shiza</Link></li>
        
    </ul>
    </div>
    <div>
        <h2>phone Numbers</h2>
        
    </div>
    </div>
  )
}

export default student