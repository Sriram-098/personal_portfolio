import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div
    id="Footer"
    className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
  >
    <div>
      <h1 className="text-2xl md:text-6xl font-bold"> </h1>
      <h3 className="text-sm md:text-2xl font-normal">
        @Sriram Senapathi 2025
      </h3>
    </div>

    <ul className="text-sm md:text-xl">
      <li className="flex gap-1 items-center">
        <MdOutlineEmail size={20} />
        sriramsenapathi842@gmail.com
      </li>
      <a href="https://www.linkedin.com/in/senapathi-sriram-0529642a5/">
      <li className="flex gap-1 items-center">
        <CiLinkedin />
        linkedin.com/in/senapathi-sriram
      </li>
      </a>
      <a href="https://github.com/Sriram-098">
      <li className="flex gap-1 items-center">
        <FaGithub />
        github.com/Sriram-098
      </li>
      </a>
    </ul>
  </div>
  )
}

export default Contact
