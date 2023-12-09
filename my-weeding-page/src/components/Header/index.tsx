'use client';

import { Playfair_Display } from 'next/font/google';
import React, { useEffect } from 'react';
import Lottie, { LottieRef } from 'lottie-react';
import animation1Data from './header-1.json';
import { useIntersection, useScroll, useWindowScroll } from 'react-use';

const font = Playfair_Display({ weight: '400', subsets: ['vietnamese'] });
const Header: React.FC = () => {
  const lotieRef: LottieRef = React.useRef(null);
  useEffect(() => {
    lotieRef.current?.setSpeed(2);
  }, []);

  const { y } = useWindowScroll();

  const underlineEffect =
    'hover:underline underline-offset-4 decoration-4 decoration-orange-700/25';
  const headerRender = (
    <>
      <nav className='hidden pt-10 md:block'>
        <ul className='flex flex-row gap-8 text-xl'>
          <li className={underlineEffect}>
            <a href='#'>Lịch trình</a>
          </li>
          <li className={underlineEffect}>
            <a href='#'>Tham dự</a>
          </li>
        </ul>
      </nav>
      <div
        className={[
          font.className,
          'flex-2 flex flex-col justify-center text-center',
        ].join(' ')}
      >
        <div className='flex min-h-[50px] justify-center'>
          <Lottie
            lottieRef={lotieRef}
            animationData={animation1Data}
            className='flex max-h-[50px] max-w-[100px] items-center justify-center'
            loop={false}
          />
        </div>
        <div className='text-2xl'>Dung & Ngoc’s Wedding</div>
      </div>
      <nav className='hidden pt-10 md:block'>
        <ul className='flex flex-row gap-4 text-xl'>
          <li className={underlineEffect}>
            <a href='#'>Ảnh cưới</a>
          </li>
          <li className={underlineEffect}>
            <a href='#'>Liên hệ</a>
          </li>
        </ul>
      </nav>
    </>
  );

  return (
    <>
      <header
        className={[
          font.className,
          'flex w-full flex-row justify-center p-8 md:justify-between md:p-24',
        ].join(' ')}
      >
        {headerRender}
      </header>
      {(y >= 180 && (
        <header className='fixed top-0 z-[100] min-h-[100px] w-screen bg-orange-100 drop-shadow-md'>
          <div className='flex w-full flex-row justify-center px-8 py-0 md:justify-between md:px-24'>
            {headerRender}
          </div>
        </header>
      )) ||
        null}
    </>
  );
};

export default Header;
