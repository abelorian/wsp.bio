'use client'
import { useState } from "react";
import { Baloo_2 } from 'next/font/google'

const baloo = Baloo_2({ subsets: ['latin'] })

export default function Header(){

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`z-10 p-3 md:p-4 shadow-sm shadow-neutral-200 header-sticky`}>
      <div className='container mx-auto flex justify-between'>
        <div className='font-medium text-3xl text-neutral-950'>
          <a href='/'>
            <p className={baloo.className}>wspBio</p>
          </a>
        </div>
        <div className="relative md:hidden">
          <button className='text-black text-2xl' onClick={() => setIsMenuOpen(!isMenuOpen)}><i className="bi bi-list"></i></button>
          <NavMobile isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}></NavMobile>
        </div>
        <div className='hidden md:flex items-center text-black'>
          <NavDesktop></NavDesktop>
        </div>
      </div>
    </header>
  )
}

function NavMobile({ isMenuOpen, setIsMenuOpen }){
  //if (!isMenuOpen) return null;
  const divClasses = `fixed right-0 bg-white z-20 w-60 top-0 bottom-0 text-black text-left transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`

  return (
    <div className={divClasses}>
      <div className="flex justify-between items-center py-3 px-8">
        <h2></h2>
        <button type="button" className="text-black text-2xl" aria-label="Close" onClick={() => { setIsMenuOpen(false) }}>
          <i className="bi bi-x"></i>
        </button>
      </div>
      <div className="p-8">
        <ul className="">
          <li key={1} className="block px-0 py-1"><a href="/">Inicio</a></li>
          <li key={2} className="block px-0 py-1"><a href={ '#' }>Links <TotalLinks /></a></li>
          <li key={3} className="block px-0 py-1"><a href="/qr/generator">Generar QR</a></li>
          <li key={4} className="block px-0 py-1"><a href={ '#' }>Mi cuenta</a></li>
        </ul>
      </div>
    </div>
  )
}

function NavDesktop(){

  return (
    <ul className='flex items-center'>
      <li className="mr-4">
        <a href={ '#' } className="btn btn-primary">Nuevo link</a>
      </li>
      <li key={2} className="mx-4"><a href={ '#' }>Links <TotalLinks /></a></li>
    </ul>
  )
}

function TotalLinks () {
  return (
    <p>1</p>
  )
}
