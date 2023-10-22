import { Baloo_2 } from 'next/font/google'

const baloo = Baloo_2({ subsets: ['latin'] })

export default function Header(){


  return (
    <header className={`z-10 p-3 md:p-4 shadow-sm shadow-neutral-200 header-sticky bg-white`}>
      <div className='container mx-auto flex justify-between'>
        <div className='font-medium text-3xl text-neutral-950'>
          <a href='/'>
            <p className={baloo.className}>wspBio</p>
          </a>
        </div>
        <div className='hidden md:flex items-center text-black'>
          <ul className='flex items-center'>
            <li className="mr-4">
              <a href={ '/' } className="btn btn-primary">Nuevo link</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}


