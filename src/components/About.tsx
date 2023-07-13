import React from 'react'
import foto from '../assets/foto.png'

 const About: React.FC = () => {
  return (
    <div className="flex flex-col w-screen h-full px-6 mx-auto mt-24 lg:flex-row bg-slate-700" id="about">
       <div className="flex justify-center p-8 lg:w-1/2">
      <img src={foto} alt="foto" width='350' height='550'/>
    </div>
    <div className="py-6 lg:w-1/2">
    <h1 className="py-2 text-2xl font-bold text-justify text-gray-200">Oi, eu sou o <span className='text-orange-500'>Lennon</span> !</h1>
      <h2 className="py-2 text-2xl font-bold text-justify text-orange-500">Desenvolvedor Web Full-Stack</h2>
      <br />
      <p className="py-1 text-sm font-semibold leading-relaxed text-justify text-gray-200">
        Eu sempre fui apaixonado por tecnologia e por 'desenvolver'/'criar' coisas para melhorar a vida das pessoas, por isso também sou formado em Engenharia Civil, onde atuei desde 2017, na minha própria empresa a LX Engenharia,mas depois de anos trabalhando como Engenheiro Civil, decidi por uma transição de carreira e comecei a estudar Desenvolvimento Web FullStack na Trybe, uma escola que ensina a programar, a aprender e a trabalhar.
      </p>
      <p className="py-1 text-sm font-semibold leading-relaxed text-justify text-gray-200">
        Desde o início de setembro estou cursando a Trybe, aprendendo HTML, Javascript, React, Git, Docker, MySQL, Typescript, Node.js e entre outras tecnologias FullStack.
      </p>
      <p className="py-1 text-sm font-semibold leading-relaxed text-justify text-gray-200">
        Já tendo me formado nos módulos de fundamentos, Frontend e Backend, estou cursando agora o módulo de Ciência da Computação, aprendendo Python, Estrutura de dados e complexidade de algoritmos!
      </p>
      <p className="py-1 text-sm font-semibold leading-relaxed text-justify text-gray-200">
        Ao mesmo tempo, estou no primeiro semestre do curso de Ciência de Dados na faculdade Univesp, onde vou aprender coisas como Aprendizado de máquina, mineração de dados e redes neurais!
      </p>
    </div>
  </div>
  )
}

export default About;