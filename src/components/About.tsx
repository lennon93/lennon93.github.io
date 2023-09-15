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
      Sempre fui apaixonado por tecnologia e inovação, buscando criar soluções que impactem positivamente a vida das pessoas e o mundo como um todo. Meu grande sonho é desenvolver algo que realmente contribua para o bem do planeta. Esse desejo constante de criar e inovar me levou a uma formação prévia em Engenharia Civil. Durante minha jornada como engenheiro, gerenciei meu próprio escritório e liderei a concepção de diversos projetos.      </p>
      <p className="py-1 text-sm font-semibold leading-relaxed text-justify text-gray-200">
      Entretanto, no ano passado, decidi realizar uma transição de carreira. Durante esse período, dediquei-me intensamente aos estudos de Desenvolvimento Web Fullstack na Trybe. Este curso, altamente prático e focado nas demandas do mercado, proporcionou uma formação completa. Nele, adquiri conhecimentos desde os fundamentos até as tecnologias mais recentes em Frontend e Backend. Além disso, aprendi a lidar com Bancos de Dados e aprofundei-me em Ciência da Computação, compreendendo algoritmos e desenvolvendo projetos altamente eficientes. Atualmente, estou cursando o módulo de certificação eletiva em Java, onde abordo o desenvolvimento de APIs Rest, utilizando a linguagem de programação Java e o ecossistema Spring.      </p>
      <p className="py-1 text-sm font-semibold leading-relaxed text-justify text-gray-200">
      Paralelamente a isso, uma vez que não consigo ficar parado, iniciei uma graduação em Tecnologia da Informação na Univesp, uma faculdade pública a distância. Além disso, estou participando de um bootcamp de 3 meses focado em Java mais Angular, como parte de uma bolsa que obtive para estudar na Dio, em parceria com o Santander.      </p>
      <p className="py-1 text-sm font-semibold leading-relaxed text-justify text-gray-200">
      Estou profundamente entusiasmado em aplicar minha paixão pela tecnologia, minhas habilidades de desenvolvimento e meu conhecimento em projetos desafiadores. Tenho o desejo sincero de contribuir para o sucesso de equipes e organizações inovadoras. Estou totalmente aberto a oportunidades que me permitam crescer profissionalmente e fazer a diferença.      </p>
    </div>
  </div>
  )
}

export default About;