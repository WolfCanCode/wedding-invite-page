"use client"

import React, { useEffect } from 'react';
import { Hachi_Maru_Pop, Habibi } from 'next/font/google';
import Lottie from 'lottie-react';
const font1 = Hachi_Maru_Pop({ weight: "400", subsets: ['latin'] });
import animation1Data from "./bookmark.json";
const font2 = Habibi({ weight: '400', subsets: ['latin'] });

const Testimonial: React.FC = () => {

  return (
    <section className="flex flex-col text-center py-10">
      <div className='flex justify-center min-h-[50px]'>
        <Lottie
          animationData={animation1Data}
          className="flex justify-center items-center max-h-[50px] max-w-[100px]"
          loop={true}
        />
      </div>
      <div className={font2.className}>Sponsored by:</div>
      <div className='pt-2 text-center justify-center flex flex-row gap-12'>
        <div className={[font1.className, 'text-lg md:text-2xl'].join(' ')}>An House</div>
      </div>
      <div className='pt-2 text-center justify-center flex flex-row gap-12'>
        <div className={[font1.className, 'text-lg md:text-5xl'].join(' ')}>Our story</div>
      </div>
    </section>
  );
};

export default Testimonial;
