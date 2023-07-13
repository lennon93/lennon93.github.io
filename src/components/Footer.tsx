import { SiGithub, SiLinkedin } from "react-icons/si";
import React from 'react'

 const Footer: React.FC = () => {
  return (
    <footer className="bottom-0 left-0 flex flex-col items-center justify-center w-screen h-32 bg-slate-800">
    <div className="grid grid-flow-col gap-8">
      <a href="https://github.com/lennon93" target="_blank" className="text-3xl text-gray-200 hover:text-gray-300 hover:scale-110" rel="noreferrer">
        <SiGithub />
      </a>
      <a href="https://www.linkedin.com/in/lennon-xavier/" target="_blank" className="text-3xl text-gray-200 hover:text-gray-300 hover:scale-110" rel="noreferrer">
        <SiLinkedin />
      </a>
    </div>
    <p className="pt-4 mt-2 text-sm text-gray-100">Copyright © 2023 by Lennon Xavier | Todos os Direitos Reservados.</p>
  </footer>
  )
}

export default Footer;