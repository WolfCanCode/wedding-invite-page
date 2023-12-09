"use client"

import React, { useEffect } from 'react';
import { Gentium_Book_Plus } from 'next/font/google';
import Image from 'next/image';
import Lottie, { LottieRef } from 'lottie-react';
const font = Gentium_Book_Plus({ weight: "400", subsets: ['vietnamese'] });
import animation1Data from "./and.json";

const Hero: React.FC = () => {
  const lotieRef: LottieRef = React.useRef(null);
  useEffect(() => {
    lotieRef.current?.setSpeed(2)
  }, []);
  return (
    <section className={[font.className, 'text-center flex flex-col justify-center'].join(" ")}>
      <div className='flex flex-col'>
        <div className='hidden md:block text-5xl'>
          HOÀNG DŨNG & KHÁNH NGỌC
        </div>
        <div className='md:hidden text-5xl flex-col flex'>
          <div>
            HOÀNG DŨNG
          </div>
          <div>
            &
          </div>
          <div>
            KHÁNH NGỌC
          </div>
        </div>
        <div className='text-3xl pt-10'>Save our day</div>
        <div className='text-3xl'>16 . 12 . 2023</div>
      </div>
      <div className='pt-12'>
        <div className='hidden md:block'>
          <div className='relative  ml-[10vw] max-w-[80vw] h-[600px] rounded-xl overflow-hidden'>
            <Image src="/banner.jpg" fill objectFit='cover' alt="Picture of the author" />
          </div>
        </div>
        <div className='relative md:hidden h-[600px]'>
          <Image src="/banner.jpg" fill objectFit='cover' objectPosition='80% center' alt="Picture of the author" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
