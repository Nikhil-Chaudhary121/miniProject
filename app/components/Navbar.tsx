import { Instrument_Sans, Young_Serif } from 'next/font/google'
import { Bike } from 'lucide-react';

const font = Young_Serif({
    // variable : "",
    weight : "400" 
})

const secondFont = Instrument_Sans({
    weight : "600"
})

const Navbar = () => {
  return (
    <div className={` ${secondFont.className} w-full flex items-center justify-between py-6 px-16 `}>
        <p className={`${font.className} flex flex-col leading-[0.8em] text-2xl `}><span>Diesnt</span><span>Desrover</span></p>
        <div className='flex gap-4 text-xs'>
            <p>SHOP</p>
            <p>COLLECTIVES</p>
            <p>OUTLETS</p>
        </div>
        <div className='w-10 h-10 flex items-center justify-center rounded-full border-1'> <Bike size={15} /> </div>
    </div>
  )
}

export default Navbar