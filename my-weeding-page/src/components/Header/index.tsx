'use client';

import Lottie, { LottieRef } from 'lottie-react';
import { Playfair_Display } from 'next/font/google';
import React, { useEffect } from 'react';
import {
  useBoolean,
  useMedia,
  useMount,
  useToggle,
  useUpdateEffect,
} from 'react-use';
import animation1Data from './header-1.json';
import menuData from './menu.json';

const font = Playfair_Display({ weight: '400', subsets: ['vietnamese'] });
const Header: React.FC = () => {
  const [isOpen, toggleMenu] = useToggle(false);
  const [isLoading, setIsLoading] = useBoolean(true);

  const lotieRef: LottieRef = React.useRef(null);
  const lotieMenuRef: LottieRef = React.useRef(null);

  useMount(() => {
    setIsLoading(true);
    lotieRef.current?.setSpeed(2);
    lotieMenuRef.current?.setSpeed(4);
  });

  useUpdateEffect(() => {
    if (isOpen) {
      lotieMenuRef.current?.playSegments([0, 60], true);
    } else {
      lotieMenuRef.current?.playSegments([60, 100], true);
    }
  }, [isOpen]);

  const onToggleMenu = () => {
    toggleMenu();
  };

  const isWide = useMedia('(min-width: 768px)');

  const underlineEffect =
    'hover:underline underline-offset-4 decoration-4 decoration-orange-700/25';
  const HeaderRender = (
    <div className='relative flex flex-row justify-center md:justify-between'>
      {isWide ? (
        <nav className='pt-10'>
          <ul className='flex flex-row gap-8 text-xl'>
            <li className={underlineEffect}>
              <a href='#schedule'>Lịch trình</a>
            </li>
            <li className={underlineEffect}>
              <a href='#confirmation'>Tham dự</a>
            </li>
          </ul>
        </nav>
      ) : null}
      <div
        className={[
          font.className,
          'flex-2 flex flex-col justify-center text-center',
        ].join(' ')}
      >
        <div className='flex min-h-[50px] justify-center'>
          <Lottie
            onDOMLoaded={() => setIsLoading(false)}
            lottieRef={lotieRef}
            animationData={animation1Data}
            className='flex max-h-[50px] max-w-[100px] items-center justify-center'
            loop={false}
          />
        </div>
        <div className='text-xl md:text-2xl'>Dung & Ngoc’s Wedding</div>
      </div>
      {isWide ? (
        <nav className='pt-10'>
          <ul className='flex flex-row gap-4 text-xl'>
            <li className={underlineEffect}>
              <a href='#gallery'>Ảnh cưới</a>
            </li>
            <li className={underlineEffect}>
              <a href='#contact'>Liên hệ</a>
            </li>
          </ul>
        </nav>
      ) : null}
      {!isWide ? (
        <button
          className='absolute right-[-35px] top-[30%] z-[22]'
          onClick={onToggleMenu}
        >
          <Lottie
            lottieRef={lotieMenuRef}
            animationData={menuData}
            className='flex max-h-[50px] max-w-[100px] items-center justify-center'
            loop={false}
            autoPlay={false}
          />
        </button>
      ) : null}
    </div>
  );

  return (
    <>
      {isLoading && (
        <div className={font.className}>
          <div className='fixed z-[21] flex h-screen w-screen flex-col justify-center bg-white/70 text-center backdrop-blur'>
            <div className='text-3xl md:text-2xl'>
              --Dung & Ngoc’s Wedding--
            </div>
            <div className='text-3xl md:text-2xl'>Loading....</div>
          </div>
        </div>
      )}
      {isOpen && (
        <div className='fixed z-[21] h-screen w-screen bg-orange-400/20 backdrop-blur'>
          <div className='flex flex-col justify-center gap-4 px-32 py-24 text-3xl font-bold'>
            <div className={underlineEffect}>
              <a
                href='#schedule'
                onClick={() => {
                  toggleMenu(false);
                }}
              >
                Lịch trình
              </a>
            </div>
            <div className={underlineEffect}>
              <a
                href='#confirmation'
                onClick={() => {
                  toggleMenu(false);
                }}
              >
                Tham dự
              </a>
            </div>
            <div className={underlineEffect}>
              <a
                href='#gallery'
                onClick={() => {
                  toggleMenu(false);
                }}
              >
                Ảnh cưới
              </a>
            </div>
            <div className={underlineEffect}>
              <a
                href='#contact'
                onClick={() => {
                  toggleMenu(false);
                }}
              >
                Liên Hệ
              </a>
            </div>
          </div>
        </div>
      )}
      <header className={[font.className, 'w-full p-8 md:p-24'].join(' ')}>
        {HeaderRender}
      </header>
    </>
  );
};

export default Header;
