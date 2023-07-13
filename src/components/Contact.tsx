import React from 'react'
import { useState } from 'react';
import emailjs from '@emailjs/browser';


 const Contact: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e: any){
    e.preventDefault();

    if(name === '' || email === '' || message === '' ){
      alert('Preencha todos os campos');
      return;
    }
    const regexEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{3,3})+$/
    if(!regexEmail.test(email)){
      alert('Preencha um email válido');
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    }

    emailjs.send('service_ryhs6lp', 'template_87gumob', templateParams, 'yJZInsMgq0FQMGq46')
    .then(() => {
      setName('')
      setEmail('')
      setMessage('')
    }, (err) => {
      console.log('ERROR: ', err);
      
    })
  }

  return (
    <div className="flex flex-col items-center w-screen py-4 bg-slate-700" id="contact">
    <h1 className="py-4 mb-4 text-2xl font-bold text-center text-gray-200">Contato</h1>
    <form className="flex flex-col items-center w-full px-4" onSubmit={sendEmail}>
      <input
        className="w-1/2 px-4 py-2 mb-4 text-gray-800 bg-white border border-gray-300 rounded"
        type="text"
        placeholder="Digite seu nome"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        className="w-1/2 px-4 py-2 mb-4 text-gray-800 bg-white border border-gray-300 rounded"
        type="text"
        placeholder="Digite seu email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <textarea
        className="w-1/2 px-4 py-2 mb-4 text-gray-800 bg-white border border-gray-300 rounded"
        placeholder="Digite sua mensagem"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <button className="w-1/2 px-6 py-2 mb-4 text-sm font-bold text-center text-gray-200 bg-orange-500 rounded-lg">
        Enviar
      </button>
    </form>
  </div>
  )
}

export default Contact;