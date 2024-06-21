import expresso from '../assets/expresso.png'
import { Plus, Minus, ShoppingCart } from '@phosphor-icons/react'

export function Card() {
    return(
        <div className='bg-base-card w-[16rem] h-[19.375rem] rounded-tl-md rounded-tr-[2.23rem] rounded-bl-[2.25rem] rounded-br-md flex flex-col items-center text-center px-[1.25rem]'>
            <img src={expresso} className='mt-[-1rem] mb-3' />
            <div className='bg-yellow-light text-yellow-dark py-1 px-2 rounded-full font-bold text-[0.625rem] mb-4'>REGULAR</div>
            <h3 className='text-base-subtitle font-title text-xl font-bold mb-2'>Regular Expresso</h3>
            <p className='text-base-label text-sm mb-8'>Regular coffee made with hot water and ground beans</p>
            <div className='flex items-center gap-6'>
                <div className='text-sm text-base-text'>$ <span className='text-title text-2xl font-extrabold'>9.90</span></div>
                <div className='flex items-center gap-2'>
                    <div className='flex items-center gap-1 bg-base-button rounded-md p-2 text-purple'>
                        <Minus size={14} weight='bold' className='hover:text-purple-dark cursor-pointer'/>
                        <span className='text-base-title'>1</span>
                        <Plus size={14} weight='bold' className='hover:text-purple-dark cursor-pointer'/>
                    </div>
                    <button className='p-2 bg-purple-dark rounded-md hover:bg-purple'>
                        <ShoppingCart size={22} weight='fill' className='text-base-card'/>
                    </button>
                </div>
            </div>
        </div>
    )
}