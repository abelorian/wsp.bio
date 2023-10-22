'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react';

import SimpleQR from './SimpleQR';
import { CopyToClipboardDirect } from 'utils/copyToClipboard'

export default function WhatsappLink(){

  const searchParams = useSearchParams()
  const [qrText, setQrText] = useState(searchParams.get('url') || process.env.NEXT_PUBLIC_FRONTEND_URL)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [text, setText] = useState('')
  const [linkWsp, setLinkWsp] = useState('')
  const [showQR, setShowQR] = useState('')

  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value)
  }

  const handleText = (event) => {
    setText(event.target.value)
  }

  useEffect(() => {
    const wl = generateWspLink(phoneNumber, text)
    setLinkWsp( wl )
    setQrText(wl)
  }, [phoneNumber, text]);

  const onSubmit = (event) => {
    event.preventDefault();
    setShowQR(true)
    console.log('on submit')
  }

  return (
    <>
      {
        showQR ? <FullScreenModal linkWsp={ linkWsp } setShowQR={setShowQR} /> : null
      }
      <div className="my-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-center">Generador de links de Whatsapp</h1>
        <p className="mt-6 text-gray-600 text-sm md:text-base">¡Haz que tu negocio esté siempre a solo un clic de distancia!</p>
      </div>

      <div className='flex flex-wrap px-4 md:px-16 my-10'>

          <div className='w-full md:w-1/2'>
              <form className='w-full' onSubmit={onSubmit}>
                <label className="text-lg font-black">
                  Ingresa tu número (código de páis)
                </label>
                <input className="input-border w-full mb-8 mt-2" type="tel" pattern="^\+\d{1,3}\d{4,14}$"
                  placeholder="" onChange={handlePhoneNumber}>
                </input>
                <label className="text-lg font-black">
                  Texto de bienvenida
                </label>
                <input className="input-border w-full mb-8 mt-2" defaultValue={text} placeholder="" onChange={handleText}></input>
                <div className='text-center'>
                  <button className='btn btn-primary'>Generar link de Whatsapp</button>
                </div>
                <hr className="my-12"></hr>
              </form>
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-center">
            <div>
              <h1>Un link es más facil de compartir</h1>
            </div>
          </div>

      </div>
    </>

  )
}


function generateWspLink(phoneNumber, text = ''){
  // https://www.npmjs.com/package/intl-tel-input
  if (!phoneNumber && !text) {
    return ''
  }
  // https://wa.me/send/?text=
  const textParam = text ? `?text=${encodeURIComponent(text)}` : '';
  return `https://wa.me/${phoneNumber}${textParam}`;
}

const FullScreenModal = ({ linkWsp, setShowQR }) => {

  return (
    <div>
      {true && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white p-4 px-16 rounded-lg max-w-xl overflow-y-auto h-95">

            <SimpleQR text={ linkWsp }>
              <h2 className='text-lg font-black'>Link de Whatsapp</h2>
              <button onClick={() => CopyToClipboardDirect(linkWsp) } className="btn my-6 mt-2 mb-4 truncate text-[blue]" style={{ border: '1px solid black' }}>{ linkWsp }</button>
            </SimpleQR>
            <div className='text-center mt-4'>
              <a href={ linkWsp } className={`inline-block btn btn-whatsapp`} target='_blank'><i className="bi bi-whatsapp"></i> Probar en Whatsapp</a>
            </div>
            <div className='text-center'>
              <button
                className="btn btn-light text-black font-bold py-2 px-4 rounded mt-4"
                onClick={() => setShowQR(false)}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


