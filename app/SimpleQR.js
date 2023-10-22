import { useEffect, useRef, useState } from "react"
import QRCodeStyling from 'libs/qr-code-styling'

export default function SimpleQR({ text, defaultColor = 'black', defaultType = 'square', format = 'canvas', children }){

  const [options, setOptions] = useState({
    width: 300,
    height: 300,
    type: format,
    data: text,
    //image: "/images/logo-black.svg",
    dotsOptions: {
        color: defaultColor,
        type: defaultType
    },
    backgroundOptions: {
        color: "white",
    },
    imageOptions: {
        crossOrigin: "anonymous",
        margin: 8
    },
    qrOptions: {
      errorCorrectionLevel: 'Q'
    }
  })

  const [qrCode] = useState(new QRCodeStyling(options))
  const ref = useRef(null)

  const setColor = (color) => {
    console.log(color)
    setOptions({...options, dotsOptions: {...options.dotsOptions, color: color} })
  }

  const setType = (type) => {
    console.log(type)
    setOptions({...options, dotsOptions: {...options.dotsOptions, type: type} })
  }

  useEffect(() => {
    if (!qrCode) return
    qrCode.update(options)
  }, [options])

  useEffect(() => {
    if (ref.current) {
      qrCode.append(ref.current)
    }
  }, [])

  return (
    <div className="flex flex-col">
      { children }
      <OptionButtons options={options} setColor={setColor} setType={setType} />
      <div className="max-w-[400px] m-auto" ref={ref}></div>
    </div>
  )
}

function OptionButtons({ options, setColor, setType }) {

  return (
    <div className="text-left">

      <label className="text-lg font-black">
        Elige un color para el QR
      </label>
      <div className="flex justify-between mt-2 mb-4">
        <button className='w-8 h-8 rounded-md bg-black' onClick={() => setColor('#000000')}></button>
        <button className='w-8 h-8 rounded-md bg-red-500' onClick={() => setColor('#EF4444')}></button>
        <button className='w-8 h-8 rounded-md bg-blue-500' onClick={() => setColor('#3B82F6')}></button>
        <button className='w-8 h-8 rounded-md bg-green-500' onClick={() => setColor('#22C55E')}></button>
        <button className='w-8 h-8 rounded-md bg-pink-500' onClick={() => setColor('#EC4899')}></button>
        <button className='w-8 h-8 rounded-md bg-yellow-500' onClick={() => setColor('#EAB308')}></button>
        <button className='w-8 h-8 rounded-md bg-purple-500' onClick={() => setColor('#A855F7')}></button>
        <button className='w-8 h-8 rounded-md bg-orange-500' onClick={() => setColor('#F97316')}></button>
      </div>
      <label className="text-lg font-black">
        Elige la forma
      </label>
      <div className="mt-2 mb-4">
        <button className={`btn border mr-1 rounded-md border-gray-400 ${ options.dotsOptions.type === 'square' ? 'btn-light' : 'text-black' }`} onClick={() => setType('square')}>Cuadrado</button>
        <button className={`btn border mr-1 rounded-md border-gray-400 ${ options.dotsOptions.type === 'rounded' ? 'btn-light' : 'text-black' }`} onClick={() => setType('rounded')}>Redondo</button>
      </div>
    </div>
  )
}


