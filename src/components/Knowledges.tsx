import { SiHtml5, SiReact, SiRedux, SiPython, SiPytest, SiTailwindcss, SiVite, SiNpm, SiTsnode, SiJsonwebtokens, SiSequelize, SiMysql, SiTypescript, SiTestinglibrary, SiJest, SiNextdotjs, SiCss3, SiJavascript, SiDocker, SiGit, SiFigma, SiTrello, SiGithub, SiMocha, SiReactrouter, SiExpress, SiNodemon } from "react-icons/si";
import React from 'react'

 const Knowledges: React.FC = () => {
  return (
    <div className="w-screen px-8 py-10 bg-slate-800" id="knowledges">
    <div className="flex flex-col items-center w-full gap-5 lg:grid-cols-2 lg:items-start lg:grid lg:gap-x-20">
      <div className="flex flex-col w-full gap-4">
        <div className="text-2xl font-semibold text-center text-gray-200 divider">Frontend</div>
        <div className="flex flex-wrap items-center justify-center gap-5">
          <div className="flex flex-col items-center p-2 w-fit h-fit">
            <SiHtml5 className="text-4xl text-gray-200" />
            <p className="py-1 text-sm font-semibold leading-relaxed text-center text-gray-200">HTML5</p>
          </div>
          <div className="flex flex-col items-center p-2 w-fit h-fit">
            <SiCss3 className="text-4xl text-gray-200" />
            <p className="py-1 text-sm font-semibold leading-relaxed text-center text-gray-200">CSS3</p>
          </div>
          <div className="flex flex-col items-center p-2 w-fit h-fit">
            <SiJavascript className="text-4xl text-gray-200" />
            <p className="py-1 text-sm font-semibold leading-relaxed text-center text-gray-200">Javascript</p>
          </div>
          <div className="flex flex-col items-center p-2 w-fit h-fit">
            <SiReact className="text-4xl text-gray-200" />
            <p className="py-1 text-sm font-semibold leading-relaxed text-center text-gray-200">React.JS</p>
          </div>
          <div className="flex flex-col items-center p-2 w-fit h-fit">
            <SiNextdotjs className="text-4xl text-gray-200" />
            <p className="py-1 text-sm font-semibold leading-relaxed text-center text-gray-200">Next.JS</p>
          </div>
          <div className="flex flex-col items-center p-2 w-fit h-fit">
            <SiRedux className="text-4xl text-gray-200" />
            <p className="py-1 text-sm font-semibold leading-relaxed text-center text-gray-200">Redux</p>
          </div>
          <div className="flex flex-col items-center p-2 w-fit h-fit">
            <SiTailwindcss className="text-4xl text-gray-200 " />
            <p className="py-1 text-sm font-semibold leading-relaxed text-center text-gray-200">TailwindCSS</p>
          </div>
          <div className="flex flex-col items-center p-2 w-fit h-fit">
            <SiVite className="text-4xl text-gray-200 " />
            <p className="py-1 text-sm font-semibold leading-relaxed text-center text-gray-200">Vite</p>
          </div>
          <div className="flex flex-col items-center p-2 w-fit h-fit">
            <SiReactrouter className="text-4xl text-gray-200 " />
            <p className="py-1 text-sm font-semibold leading-relaxed text-center text-gray-200">React Router</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full gap-4">
        <div className="text-2xl font-semibold text-center text-gray-200 divider">Backend</div>
        <div className="flex flex-wrap items-center justify-center gap-5">
          <div className="flex flex-col items-center p-2 w-fit h-fit">
            <SiTypescript className="text-4xl text-gray-200" />
            <p className="py-1 text-sm font-semibold leading-relaxed text-center text-gray-200">Typescript</p>
          </div>
          <div className="flex flex-col items-center p-2 w-fit h-fit">
            <SiMysql className="text-4xl text-gray-200" />
            <p className="py-1 text-sm font-semibold leading-relaxed text-center text-gray-200">MySQL</p>
          </div>
          <div className="flex flex-col items-center p-2 w-fit h-fit">
            <SiDocker className="text-4xl text-gray-200" />
            <p className="py-1 text-sm font-semibold leading-relaxed text-center text-gray-200">Docker</p>
          </div>
          <div className="flex flex-col items-center p-2 w-fit h-fit">
            <SiSequelize className="text-4xl text-gray-200" />
            <p className="py-1 text-sm font-semibold leading-relaxed text-center text-gray-200">Sequelize</p>
          </div>
          <div className="flex flex-col items-center p-2 w-fit h-fit">
            <SiNpm className="text-4xl text-gray-200" />
            <p className="py-1 text-sm font-semibold leading-relaxed text-center text-gray-200">NPM</p>
          </div>
          <div className="flex flex-col items-center p-2 w-fit h-fit">
            <SiTsnode className="text-4xl text-gray-200" />
            <p className="py-1 text-sm font-semibold leading-relaxed text-center text-gray-200">TsNode</p>
          </div>
          <div className="flex flex-col items-center p-2 w-fit h-fit">
            <SiPython className="text-4xl text-gray-200" />
            <p className="py-1 text-sm font-semibold leading-relaxed text-center text-gray-200">Python</p>
          </div>
          <div className="flex flex-col items-center p-2 w-fit h-fit">
            <SiExpress className="text-4xl text-gray-200" />
            <p className="py-1 text-sm font-semibold leading-relaxed text-center text-gray-200">Express</p>
          </div>
          <div className="flex flex-col items-center p-2 w-fit h-fit">
            <SiNodemon className="text-4xl text-gray-200" />
            <p className="py-1 text-sm font-semibold leading-relaxed text-center text-gray-200">Nodemon</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full gap-4">
        <div className="text-2xl font-semibold text-center text-gray-200 divider">Testes</div>
        <div className="flex flex-wrap items-center justify-center gap-5">
          <div className="flex flex-col items-center p-2 w-fit h-fit">
            <SiTestinglibrary className="text-4xl text-gray-200" />
            <p className="py-1 text-sm font-semibold leading-relaxed text-center text-gray-200">RTL</p>
          </div>
          <div className="flex flex-col items-center p-2 w-fit h-fit">
            <SiJest className="text-4xl text-gray-200" />
            <p className="py-1 text-sm font-semibold leading-relaxed text-center text-gray-200">Jest</p>
          </div>
          <div className="flex flex-col items-center p-2 w-fit h-fit">
            <SiMocha className="text-4xl text-gray-200" />
            <p className="py-1 text-sm font-semibold leading-relaxed text-center text-gray-200">Mocha</p>
          </div>
          <div className="flex flex-col items-center p-2 w-fit h-fit">
            <SiPytest className="text-4xl text-gray-200" />
            <p className="py-1 text-sm font-semibold leading-relaxed text-center text-gray-200">Pytest</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full gap-4">
        <div className="text-2xl font-semibold text-center text-gray-200 divider">Outros</div>
        <div className="flex flex-wrap items-center justify-center gap-5">
          <div className="flex flex-col items-center p-2 w-fit h-fit">
            <SiGit className="text-4xl text-gray-200" />
            <p className="py-1 text-sm font-semibold leading-relaxed text-center text-gray-200">Git</p>
          </div>
          <div className="flex flex-col items-center p-2 w-fit h-fit">
            <SiGithub className="text-4xl text-gray-200" />
            <p className="py-1 text-sm font-semibold leading-relaxed text-center text-gray-200">GitHub</p>
          </div>
          <div className="flex flex-col items-center p-2 w-fit h-fit">
            <SiTrello className="text-4xl text-gray-200" />
            <p className="py-1 text-sm font-semibold leading-relaxed text-center text-gray-200">Trello</p>
          </div>
          <div className="flex flex-col items-center p-2 w-fit h-fit">
            <SiFigma className="text-4xl text-gray-200" />
            <p className="py-1 text-sm font-semibold leading-relaxed text-center text-gray-200">Figma</p>
          </div>
          <div className="flex flex-col items-center p-2 w-fit h-fit">
            <SiJsonwebtokens className="text-4xl text-gray-200" />
            <p className="py-1 text-sm font-semibold leading-relaxed text-center text-gray-200">JsonWebToken</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Knowledges;