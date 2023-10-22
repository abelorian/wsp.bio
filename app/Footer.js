export default function Footer(){
  return (
    <footer className="text-neutral-900 pt-lg-10 pt-5 bg-white">
      <div className="p-4 mx-auto">
        <div className="flex flex-wrap">
            <div className="w-full md:w-1/4 mb-8 px-4">
                <img src="/favicon.svg" alt="Logo wspBio" className="logo-inverse w-10" />
                <div className="mt-4">
                    <p className="text-gray-500 text-sm">Conoce de manera simple como interactúa tu audiencia con el contenido que publicas.</p>
                </div>
            </div>
            <div className="w-1/2 md:w-1/4 mb-8 px-4">
                <h3 className="font-semibold mb-3">Compañía</h3>
                <ul className="list-none space-y-2">
                  <li><a href={ '#' } className="text-gray-600 hover:text-gray-800">Sobre nosotros</a></li>
                  <li><a href={ '#' } className="text-gray-600 hover:text-gray-800">Contacto</a></li>
                </ul>
            </div>
            <div className="w-1/2 md:w-1/4 mb-8 px-4">
              <h3 className="font-semibold mb-3">Soporte</h3>
              <ul className="list-none space-y-2">
                <li><a href={ '#' } className="text-gray-600 hover:text-gray-800">Ayuda</a></li>
                <li><a href={ '#' } className="text-gray-600 hover:text-gray-800">Reportar</a></li>
              </ul>
            </div>
            <div className="w-1/2 md:w-1/4 mb-8 px-4">
                <h3 className="font-semibold mb-3">Herramientas</h3>
                <ul className="list-none space-y-2">
                  <li><a href={ '#' } className="text-gray-600 hover:text-gray-800">Generar Código QR</a></li>
                  <li><a href={ '#' } className="text-gray-600 hover:text-gray-800">Generar link de Whatsapp</a></li>

                </ul>
            </div>
        </div>
        <div className="border-t border-gray-300 py-2 mt-6 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
                <span>
                <span id="copyright">2023</span> - wsp.bio
                </span>
            </div>
            <nav className="flex space-x-3">
              <a className="text-gray-600 hover:text-gray-800" href={ '#' }>Privacidad</a>
              <a className="text-gray-600 hover:text-gray-800" href={ '#' }>Términos de uso</a>
            </nav>
        </div>
      </div>
    </footer>
  )
}
