"use client"

import { Gentium_Book_Plus } from 'next/font/google';
import React, { useEffect } from 'react';
import Lottie, { LottieRef } from "lottie-react";
import animation1Data from "./header-1.json";

const font = Gentium_Book_Plus({ weight: "400", subsets: ['vietnamese'] });
const Header: React.FC = () => {
  const lotieRef: LottieRef = React.useRef(null);
  useEffect(() => {
    lotieRef.current?.setSpeed(2)
  }, []);
  return (
    <header className="flex flex-row w-full justify-center md:justify-between p-8 md:p-24">
      <nav className='hidden md:block pt-10'>
        <ul className="flex flex-row gap-4 text-lg">
          <li className='hover:underline-offset-1 hover:decoration-pink-500'>
            <a href="#">Lịch trình</a>
          </li>
          <li>
            <a href="#">Tham dự</a>
          </li>
        </ul>
      </nav>
      <div className={[font.className, "flex flex-col justify-center text-center flex-2"].join(" ")}>
        <div className='flex justify-center min-h-[50px]'>
          <Lottie
            lottieRef={lotieRef}
            animationData={animation1Data}
            className="flex justify-center items-center max-h-[50px] max-w-[100px]"
            loop={false}
          />
        </div>
        <div className='text-2xl'>
          Dung & Ngoc’s Wedding
        </div>
      </div>
      <nav className='hidden md:block pt-10'>
        <ul className="flex flex-row gap-4 text-lg">
          <li>
            <a href="#">Ảnh cưới</a>
          </li>
          <li>
            <a href="#">Liên hệ</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
