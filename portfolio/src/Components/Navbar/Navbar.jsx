import React from 'react'


const Navbar = () => {
  return (
    <nav class="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20 ">
        <span className="text-xl font-bold tracking-wide">Sriram Senapathi</span>
        <ul className="flex flex-wrap space-betweeen gap-5">
            <a href="#home"><li className="text-md transition-all p-1 md:p-0">Home</li></a>
            <a href="#experience"><li>Experience</li></a>
            <a href="#projects"><li>projects</li></a>
            <a href="#contact"><li>Contact</li></a>
        </ul>
    </nav>
  )
}

export default Navbar
