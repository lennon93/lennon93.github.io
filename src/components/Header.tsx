import React from 'react'
import logo from '../assets/logo.png'

 const Header: React.FC = () => {
  return (
    <header className='fixed top-0 z-10 flex items-center justify-between w-screen h-24 bg-slate-800'>
      <div className='p-4'>
        <img src={logo} alt="logo" className='h-16'/>
      </div>
      <ul className='p-8'>
        <li>
          <a href="#about" className='p-4 text-xl font-semibold text-gray-200 hover:text-gray-300'>Sobre</a>
          <a href="#knowledges"className='p-4 text-xl font-semibold text-gray-200 hover:text-gray-300'>Conhecimentos</a>
          <a href="#achievements"className='p-4 text-xl font-semibold text-gray-200 hover:text-gray-300'>Conquistas</a>
          <a href="#projects"className='p-4 text-xl font-semibold text-gray-200 hover:text-gray-300'>Projetos</a>
          <a href="#contact"className='p-4 text-xl font-semibold text-gray-200 hover:text-gray-300'>Contato</a>
        </li>
      </ul>
    </header>
  )
}

export default Header;