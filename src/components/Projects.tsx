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
              <p className="text-center text-gray-200">Esse projeto é um site esportivo que exibe partidas em andamento e encerradas, com uma tabela de classificação atualizada automaticamente após o término dos jogos. É possivel fazer login e atualizar os resultados, adicionando gols e encerrando partidas, além de criar novas partidas.</p>
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
                    onClick={() => window.open('https://github.com/lennon93/trybe-futebol-clube-project', '_blank')}
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
              <p className="text-center text-gray-200">Python é uma linguagem de programação conhecida pela simplicidade de sua sintaxe, o que torna o código mais legível e aumenta a produtividade. Seu interpretador é compatível com vários sistemas operacionais. Neste projeto, faremos uma introdução ao Python, implementando algoritmos de busca e ordenação de dados. Utilizaremos o pytest para testar esses algoritmos e o flake8 para garantir a qualidade do código</p>
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
                  onClick={() => window.open('https://github.com/lennon93/python-algoritms', '_blank')}
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
              <p className="text-center text-gray-200">Esse projeto é uma pokedex pronta, fornecida pela Trybe, que exibe informações sobre alguns Pokémon, permitindo filtrá-los por tipo e adicioná-los aos favoritos. Durante o desenvolvimento, foram aplicados conhecimentos sobre testes automatizados, criando testes para cada requisito implementado na Pokédex. Isso garantiu a corretude da aplicação React e a qualidade do projeto.</p>
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
                  onClick={() => window.open('https://github.com/lennon93/react-testing-library', '_blank')}
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
              <p className="text-center text-gray-200">Esse projeto consiste em uma API para criação e gerenciamento de pedidos, produtos e usuários, com todo o backend responsável pelo gerenciamento do banco de dados e envio de informações ao frontend. Utilizamos o Docker para criar um container para o projeto e desenvolvemos modelos para acessar o banco de dados por meio do ORM Sequelize.</p>
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
                  onClick={() => window.open('https://github.com/lennon93/trybesmith-project', '_blank')}
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