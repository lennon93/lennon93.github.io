import { SiHtml5, SiReact, SiJsonwebtokens, SiPython, SiPytest, SiSequelize, SiTypescript, SiTestinglibrary, SiJest, SiJavascript, SiDocker, SiReactrouter, SiNpm, SiExpress, SiNodemon } from "react-icons/si";
import React from 'react'
import tfc from '../assets/tfc.png'
import ironsmith from '../assets/ironsmith_resized.jpg'
import python from '../assets/python.png'
import rtl from '../assets/rtl.jpeg'


 const Projects: React.FC = () => {
  return (
    <div className="w-screen px-8 py-10 bg-slate-700" id="projects">
    <div className="flex flex-col items-center w-full gap-5 lg:grid-cols-2 lg:items-start lg:grid lg:gap-x-20">
      <div className="flex flex-col w-full gap-4">
      <div className="flex-col items-center justify-center w-full max-w-lg m-auto shadow-xl max-h-max bg-slate-800">
          <div className="w-full p-2 ">
            <figure><img className="w-full" src={tfc} alt="trybe-futebol-clube-desktop" /></figure>
          </div>
          <div className="items-center w-full p-2 space-y-10 card-body">
            <div className="flex flex-col items-center p-2 ">
              <h2 className="mb-4 font-bold text-center text-gray-200">Trybe Futebol Clube</h2>
              <div className="p-2 overflow-y-auto max-h-52">
              <p className="text-center text-gray-200">Esse projeto é um site esportivo que mostra as partidas em andamento e encerradas, uma tabela de classificação que é atualizada automaticamente quando a partida se encerra, podendo fazer login como administrador para atualizar as partidas, com gols feitos e/ou encerrado elas, assim como criar novas partidas.</p>
              </div>
            </div>
            <div className="flex items-center justify-around w-full p-2 ">
              <div>
                <p className="mb-4 font-bold text-center text-gray-200">Tecnologias Utilizadas</p>
                <div className="grid grid-cols-3 gap-2 p-2 gap-x-6 sm:flex sm:gap-4">
                  <SiDocker className="text-2xl text-gray-200" />
                  <SiTypescript className="text-2xl text-gray-200" />
                  <SiSequelize className="text-2xl text-gray-200" />
                  <SiExpress className="text-2xl text-gray-200" />
                  <SiJsonwebtokens className="text-2xl text-gray-200" />
                </div>
              </div>
              <div className="justify-center card-actions">
                <div className="flex flex-col w-24">
                <button
                  type="button"
                  className="flex items-center justify-center px-6 py-2 mb-4 text-sm font-bold text-center text-gray-200 bg-orange-500 rounded-lg"
                  onClick={() => window.location.href = 'https://github.com/lennon93/trybe-futebol-clube-project'}
                >
                  Repositório
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full gap-4">
      <div className="flex-col items-center justify-center w-full max-w-lg m-auto shadow-xl max-h-max bg-slate-800">
          <div className="w-full p-2 ">
            <figure><img className="w-full" src={python} alt="python-algorithms" /></figure>
          </div>
          <div className="items-center w-full p-2 space-y-10 card-body">
            <div className="flex flex-col items-center p-2 ">
              <h2 className="mb-4 font-bold text-center text-gray-200">Python Algorithms</h2>
              <div className="p-2 overflow-y-auto max-h-52">
              <p className="text-center text-gray-200">Python é uma linguagem de programação que busca simplicidade em sua sintaxe, resultando assim em legibilidade do código e maior produtividade. Seu interpretador pode ser executado em diversos sistemas operacionais.
Esse projeto é uma introdução ao Python, criando vários algoritmos de busca e de ordenação de dados, utilizando do pytest para testar esses algoritmos e do flake8</p>
              </div>
            </div>
            <div className="flex items-center justify-around w-full p-2 ">
              <div>
                <p className="mb-4 font-bold text-center text-gray-200">Tecnologias Utilizadas</p>
                <div className="grid grid-cols-3 gap-2 p-2 gap-x-6 sm:flex sm:gap-4">
                  <SiPython className="text-2xl text-gray-200" />
                  <SiPytest className="text-2xl text-gray-200" />
                </div>
              </div>
              <div className="justify-center card-actions">
                <div className="flex flex-col w-24">
                <button
                  type="button"
                  className="flex items-center justify-center px-6 py-2 mb-4 text-sm font-bold text-center text-gray-200 bg-orange-500 rounded-lg"
                  onClick={() => window.location.href = 'https://github.com/lennon93/python-algoritms'}
                >
                  Repositório
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full gap-4">
      <div className="flex-col items-center justify-center w-full max-w-lg m-auto shadow-xl max-h-max bg-slate-800">
          <div className="w-full p-2 ">
            <figure><img className="w-full h-48" src={rtl} alt="react-testing-library" /></figure>
          </div>
          <div className="items-center w-full p-2 space-y-10 card-body">
            <div className="flex flex-col items-center p-2 ">
              <h2 className="mb-4 font-bold text-center text-gray-200">React Testing Library</h2>
              <div className="p-2 overflow-y-auto max-h-52">
              <p className="text-center text-gray-200">Esse projeto é uma pokedex já pronta, fornecida pela Trybe que mostra alguns Pokémon, podendo filtrar eles por tipo e favorita-los. O que foi feito? Foi exercitado ss conhecimentos sobre testes automatizados escrevendo testes para uma aplicação React. Foi criado todos os testes para cada requisito implementado na Pokédex, garantindo assim sua corretude.</p>
              </div>
            </div>
            <div className="flex items-center justify-around w-full p-2 ">
              <div>
                <p className="mb-4 font-bold text-center text-gray-200">Tecnologias Utilizadas</p>
                <div className="grid grid-cols-3 gap-2 p-2 gap-x-6 sm:flex sm:gap-4">
                  <SiReact className="text-2xl text-gray-200" />
                  <SiTestinglibrary className="text-2xl text-gray-200" />
                  <SiJavascript className="text-2xl text-gray-200" />
                  <SiJest className="text-2xl text-gray-200" />
                  <SiHtml5 className="text-2xl text-gray-200" />
                  <SiReactrouter className="text-2xl text-gray-200" />
                </div>
              </div>
              <div className="justify-center card-actions">
                <div className="flex flex-col w-24">
                <button
                  type="button"
                  className="flex items-center justify-center px-6 py-2 mb-4 text-sm font-bold text-center text-gray-200 bg-orange-500 rounded-lg"
                  onClick={() => window.location.href = 'https://github.com/lennon93/react-testing-library'}
                >
                  Repositório
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full gap-4">
      <div className="flex-col items-center justify-center w-full max-w-lg m-auto shadow-xl max-h-max bg-slate-800">
          <div className="w-full p-2 ">
            <figure><img className="w-full h-48" src={ironsmith} alt="trybesmith" /></figure>
          </div>
          <div className="items-center w-full p-2 space-y-10 card-body">
            <div className="flex flex-col items-center p-2 ">
              <h2 className="mb-4 font-bold text-center text-gray-200">TrybeSmith</h2>
              <div className="p-2 overflow-y-auto max-h-52">
              <p className="text-center text-gray-200">Esse projeto é uma API de criação e gerenciamento de pedidos, produtos e seus respectivos usuarios, com todo o backend para gerenciar o banco de dados e envia-los ao frontend. Foi criado o container com o docker para abrigar o projeto, então foi criado os modelos para acessar esse banco utilizando um ORM chamado Sequelize.</p>
              </div>
            </div>
            <div className="flex items-center justify-around w-full p-2 ">
              <div>
                <p className="mb-4 font-bold text-center text-gray-200">Tecnologias Utilizadas</p>
                <div className="grid grid-cols-3 gap-2 p-2 gap-x-6 sm:flex sm:gap-4">
                  <SiTypescript className="text-2xl text-gray-200" />
                  <SiDocker className="text-2xl text-gray-200" />
                  <SiExpress className="text-2xl text-gray-200" />
                  <SiSequelize className="text-2xl text-gray-200" />
                  <SiNpm className="text-2xl text-gray-200" />
                  <SiNodemon className="text-2xl text-gray-200" />
                  <SiReactrouter className="text-2xl text-gray-200" />
                </div>
              </div>
              <div className="justify-center card-actions">
                <div className="flex flex-col w-24">
                <button
                  type="button"
                  className="flex items-center justify-center px-6 py-2 mb-4 text-sm font-bold text-center text-gray-200 bg-orange-500 rounded-lg"
                  onClick={() => window.location.href = 'https://github.com/lennon93/trybesmith-project'}
                >
                  Repositório
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Projects;