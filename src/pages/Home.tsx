import { Header } from '../components/Header';
import image from '../assets/image.png';
import { ShoppingCart, Timer, Package, Coffee } from '@phosphor-icons/react';
import { Card } from '../components/Card';

export function Home() {
  return (
    <div>
      <Header />

      <div className='flex items-center gap-16 py-[5.75rem]'>
        <div>
          <h1 className='font-title font-extrabold text-5xl text-base-title mb-4'>
            Find the perfect coffee at anytime
          </h1>
          <p className='text-xl text-base-subtitle mb-16'>
            With Coffee Delivery you get your coffee wherever you are, anytime
            you want
          </p>
          <div className='flex justify-between'>
            <div className='flex flex-col gap-[0.625rem]'>
              <div className='flex items-center gap-3 text-base-text'>
                <div className='size-8 rounded-full bg-yellow-dark text-background flex items-center justify-center'>
                  <ShoppingCart size={16} weight='fill' />
                </div>
                <span>Simple and safe purchase</span>
              </div>
              <div className='flex items-center gap-3 text-base-text'>
                <div className='size-8 rounded-full bg-yellow text-background flex items-center justify-center'>
                  <Timer size={16} weight='fill' />
                </div>
                <span>Fast and trackable delivery</span>
              </div>
            </div>
            <div className='flex flex-col gap-[0.625rem]'>
              <div className='flex items-center gap-3 text-base-text'>
                <div className='size-8 rounded-full bg-base-text text-background flex items-center justify-center'>
                  <Package size={16} weight='fill' />
                </div>
                <span>A container that keeps your coffee safe</span>
              </div>
              <div className='flex items-center gap-3 text-base-text'>
                <div className='size-8 rounded-full bg-purple text-background flex items-center justify-center'>
                  <Coffee size={16} weight='fill' />
                </div>
                <span>Fresh coffee delivered to you</span>
              </div>
            </div>
          </div>
        </div>
        <img
          src={image}
          alt='Black and white coffee cup with a yellow background'
        />
      </div>

      <main>
        <h2 className='font-title font-extrabold text-[2rem] text-base-subtitle mt-8 mb-[3.375rem]'>Our coffees</h2>
        <div>
          <Card />
        </div>
      </main>
    </div>
  );
}
