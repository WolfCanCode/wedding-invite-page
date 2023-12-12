'use client';

import { DM_Serif_Display } from 'next/font/google';
import localFont from 'next/font/local';
import Image from 'next/image';
import React from 'react';
import banner from './banner.jpg';
import Lottie from 'lottie-react';
import animation1Data from './divider.json';

const blackerSans = localFont({ src: './fonts/blacker-sans.otf' });
const serifDisplay = DM_Serif_Display({ weight: '400', subsets: ['latin'] });

const Hero: React.FC = () => {
  return (
    <section
      className={[
        blackerSans.className,
        'flex flex-col justify-center text-center',
      ].join(' ')}
    >
      <div className='flex flex-col'>
        <div className='hidden text-5xl md:block'>HOÀNG DŨNG & KHÁNH NGỌC</div>
        <div className='flex flex-col text-5xl md:hidden'>
          <div>HOÀNG DŨNG</div>
          <div>&</div>
          <div>KHÁNH NGỌC</div>
        </div>
        <div className='flex min-h-[100px] justify-center'>
          <Lottie
            animationData={animation1Data}
            className='flex max-h-[100px]  items-center justify-center'
            loop={false}
          />
        </div>
        <div className={[serifDisplay.className, 'text-3xl'].join(' ')}>
          Save our day
        </div>
        <div className={[serifDisplay.className, 'text-3xl'].join(' ')}>
          16 . 12 . 2023
        </div>
      </div>
      <div className='flex min-h-[100px] justify-center'>
        <Lottie
          animationData={animation1Data}
          className='flex max-h-[100px]  items-center justify-center'
          loop={false}
        />
      </div>
      <div className='pt-12'>
        <div className='hidden md:block'>
          <div className='relative   h-[600px] max-w-[100vw] overflow-hidden rounded-xl'>
            <Image
              placeholder='blur'
              src={banner}
              fill
              sizes='100%'
              style={{ objectFit: 'cover' }}
              alt='Picture of the author'
            />
          </div>
        </div>
        <div className='relative h-[600px] md:hidden'>
          <Image
            placeholder='blur'
            src={banner}
            fill
            sizes='100%'
            style={{ objectFit: 'cover', objectPosition: '80% center' }}
            alt='Picture of the author'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
