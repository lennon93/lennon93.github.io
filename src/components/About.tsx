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
      <p className="py-1 text-sm font-semibold leading-relaxed text-justify text-gray-200">Sou um Desenvolvedor Web Fullstack apaixonado por inovação e tecnologia, com formação prévia em Engenharia Civil. Minha jornada começou com um forte desejo de criar soluções que impactem positivamente a vida das pessoas e do mundo. Gerenciei meu próprio escritório de engenharia, liderando diversos projetos, mas minha paixão pela tecnologia me levou a uma transição de carreira.</p>
      <p className="py-1 text-sm font-semibold leading-relaxed text-justify text-gray-200">
      Durante o último ano, como parte da minha transição de carreira, dediquei-me intensivamente ao programa de Desenvolvimento Web Fullstack na Trybe. Este curso prático me proporcionou uma formação completa. Aprendi desde os fundamentos, incluindo JavaScript, HTML, CSS, Bootstrap e Jest para automação de testes, até as mais recentes tecnologias em Frontend, como React, Redux, Context API, Tailwind e React Testing Library. </p>
      <p className="py-1 text-sm font-semibold leading-relaxed text-justify text-gray-200">
      No Backend, adquiri experiência em Node.js, JavaScript, TypeScript, Express e ORM. Também aprofundei-me em gerenciamento de bancos de dados com MySQL, containerizei aplicações com Docker e apliquei metodologias ágeis como Kanban e Trello em projetos em grupo, sempre fazendo o controle de versão utilizando o git e github. </p>
      <p className="py-1 text-sm font-semibold leading-relaxed text-justify text-gray-200">
      Além disso, aprofundei meu entendimento em Ciência da Computação, abrangendo algoritmos e desenvolvendo projetos altamente eficientes, sempre criando APIs REST com operações CRUD. Atualmente, estou buscando a certificação em Java, com foco no desenvolvimento de APIs Rest utilizando o framework Spring e aprendendo Programação Orientada a Objetos (POO) e os princípios SOLID.</p>
      <p className="py-1 text-sm font-semibold text-justify text-gray-200 leadiSng-relaxed">
      Paralelamente, iniciei um curso de Tecnologia da Informação na Univesp, abrangendo uma ampla variedade de tópicos, desde Conceitos de Computação até Aprendizado de Máquina, Segurança da Informação e Computação Escalável.
      Além disso, estou participando de um bootcamp de 3 meses focado em Java e Angular como parte de uma bolsa que obtive para estudar na Dio, em parceria com o Santander.</p>
      <p className="py-1 text-sm font-semibold leading-relaxed text-justify text-gray-200">
      Estou profundamente entusiasmado em aplicar minha paixão pela tecnologia, minhas habilidades de desenvolvimento e meu conhecimento em projetos desafiadores. Meu desejo sincero é contribuir para o sucesso de equipes e organizações inovadoras.</p>
    </div>
  </div>
  )
}

export default About;