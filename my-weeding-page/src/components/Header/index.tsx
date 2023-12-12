'use client';

import { Box, Card, Dialog, Flex, Inset } from '@radix-ui/themes';
import Lottie, { LottieRef } from 'lottie-react';
import { Playfair_Display } from 'next/font/google';
import React from 'react';
import {
  useBoolean,
  useMedia,
  useMount,
  useToggle,
  useUpdateEffect,
} from 'react-use';
import animation1Data from './header-1.json';
import menuData from './menu.json';

import Image from 'next/image';
import bride from './bride.jpeg';
import animation3Data from './female.json';
import groom from './groom.jpeg';
import animation2Data from './male.json';
import qrFemale from './qr-female.png';
import qrMale from './qr-male.png';
import heart from './heart.png';

const font = Playfair_Display({ weight: '400', subsets: ['vietnamese'] });
const Header: React.FC = () => {
  const [isOpen, toggleMenu] = useToggle(false);
  const [isLoading, setIsLoading] = useBoolean(true);
  const [dialogOpen, setDialogOpen] = useBoolean(false);
  const [isMale, setIsMale] = useBoolean(false);
  const [isFemale, setIsFemale] = useBoolean(true);

  const lotieRef: LottieRef = React.useRef(null);
  const lotieMenuRef: LottieRef = React.useRef(null);

  useMount(() => {
    setInterval(createHeart, 800);
  });

  function createHeart() {
    const heart = document.createElement('img');
    heart.src = '/heart.png';
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 5 + 3 + 's ';
    // heart.innerText = "🦄";
    document.body.appendChild(heart);
    setTimeout(() => {
      heart.remove();
    }, 7000);
  }
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

  const openMoneyBox = () => {
    toggleMenu(false);
    setDialogOpen(true);
  };

  const underlineEffect =
    'hover:underline underline-offset-4 decoration-4 decoration-orange-700/25';
  const HeaderRender = (
    <div className='relative flex flex-row justify-center md:justify-between'>
      {isWide ? (
        <nav className='flex-[2] pt-10'>
          <ul className='text-md flex flex-row gap-8 whitespace-nowrap'>
            <li className={underlineEffect}>
              <a href='#schedule'>Lịch trình</a>
            </li>
            <li className={underlineEffect}>
              <a href='#confirmation'>Tham dự</a>
            </li>
            <li className={underlineEffect}>
              <a href='#gallery'>Lời chúc</a>
            </li>
          </ul>
        </nav>
      ) : null}
      <div
        className={[
          font.className,
          'flex flex-[1] flex-col justify-center text-center',
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
        <div className='text-xl lg:text-2xl'>Dung & Ngoc’s Wedding</div>
      </div>
      {isWide ? (
        <nav className='flex flex-[2] justify-end pt-10'>
          <ul className='text-md flex flex-row gap-2 whitespace-nowrap'>
            <li className={underlineEffect}>
              <a href='#' onClick={openMoneyBox}>
                Mừng cưới
              </a>
            </li>
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
          className='absolute right-[-35px] top-[30%] z-[4]'
          onClick={onToggleMenu}
        >
          <Lottie
            lottieRef={lotieMenuRef}
            animationData={menuData}
            className='z-[4] flex max-h-[50px] max-w-[100px] items-center justify-center'
            loop={false}
            style={{ opacity: dialogOpen ? 0 : 1 }}
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
          <div className='fixed z-[5] flex h-screen w-screen flex-col justify-center bg-white/70 text-center backdrop-blur'>
            <div className='text-3xl md:text-2xl'>
              --Dung & Ngoc’s Wedding--
            </div>
            <div className='text-3xl md:text-2xl'>Loading....</div>
          </div>
        </div>
      )}
      {isOpen && (
        <div className='fixed z-[3] h-screen w-screen bg-orange-400/20 backdrop-blur'>
          <div className='flex flex-col justify-center gap-4 py-24 pl-12 text-3xl font-bold'>
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
                Xác nhận tham dự
              </a>
            </div>
            <div className={underlineEffect}>
              <a href='#' onClick={openMoneyBox}>
                Mừng cưới
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
                href='#blessing'
                onClick={() => {
                  toggleMenu(false);
                }}
              >
                Gửi lời chúc
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
      <header className={[font.className, 'w-full p-8 md:p-12'].join(' ')}>
        {HeaderRender}
      </header>

      <Dialog.Root
        open={dialogOpen}
        onOpenChange={(open) => {
          setDialogOpen(open);
        }}
      >
        <Dialog.Content style={{ maxWidth: 450 }}>
          <Dialog.Title>
            <div className='flex flex-row justify-between'>
              <div>🧧 Mừng cưới</div>
              {/* Close button */}
              <button
                onClick={() => {
                  setDialogOpen(false);
                }}
              >
                Đóng
              </button>
            </div>
          </Dialog.Title>
          <Dialog.Description size='2' mb='4'>
            Trong trường hợp bạn không thể đến tham dự đám cưới của tụi mình.
          </Dialog.Description>
          <div className='flex flex-row justify-center gap-4 pb-5'>
            <div
              onClick={() => {
                if (isLoading) return;
                setIsMale(false);
                setIsFemale(true);
              }}
              className={[
                'flex h-[100px] w-[100px] cursor-pointer flex-col justify-center rounded-full text-center',
                isFemale ? 'bg-pink-200' : '',
              ].join(' ')}
            >
              <Lottie
                animationData={animation3Data}
                className='flex max-h-[100px] max-w-[100px] items-center justify-center'
                loop={true}
              />
              <span className='text-lg font-bold text-pink-500'>Cô dâu</span>
            </div>

            <div
              onClick={() => {
                if (isLoading) return;
                setIsMale(true);
                setIsFemale(false);
              }}
              className={[
                'flex h-[100px] w-[100px] cursor-pointer flex-col justify-center rounded-full text-center',
                isMale ? 'bg-blue-200' : '',
              ].join(' ')}
            >
              <Lottie
                animationData={animation2Data}
                className='flex max-h-[100px] max-w-[100px] items-center justify-center '
                loop={true}
              />
              <span className='text-lg font-bold text-blue-500'>Chú rể</span>
            </div>
          </div>
          <div className='drop-shadow-lg'>
            <Card style={{ background: '#C80000' }}>
              <Inset
                clip='padding-box'
                side='top'
                pb='current'
                className='drop-shadow-xl'
              >
                <Box className='absolute left-0 top-0 min-h-[110px] w-full min-w-full rounded-b-full bg-red-900' />
                <Flex gap='3' align='center' className='z-[100] py-4 pl-20'>
                  <Box className='relative h-[20vw] max-h-[75px]  w-[20vw] max-w-[75px] overflow-hidden rounded-full'>
                    <Image
                      placeholder='blur'
                      src={isFemale ? bride : groom}
                      fill
                      sizes='100%'
                      style={{ objectFit: 'cover', objectPosition: '0% 40%' }}
                      alt={isFemale ? 'bride' : 'groom'}
                    />
                  </Box>
                  <Box className='z-[100]'>
                    <div className='whitespace-nowrap font-bold text-white'>
                      {isFemale ? 'Vũ Khánh Ngọc' : 'Hoàng Vũ Dũng'}
                    </div>
                    <div className='text-sm text-white'>
                      {isFemale ? 'Cô dâu' : 'Chú rể'}
                    </div>
                  </Box>
                </Flex>
              </Inset>
              <Flex
                direction={'column'}
                align='center'
                className='z-[100] font-bold'
              >
                <Box className='text-white'>
                  {isFemale ? 'Vũ Khánh Ngọc' : 'Hoàng Vũ Dũng'}
                </Box>
                <Box className='text-white'>
                  STK: {isFemale ? '0976492199' : '2452821'}
                </Box>
                <Box className='text-white'>
                  Ngân hàng: {isFemale ? 'TP Bank' : 'ACB'}
                </Box>
              </Flex>
              <Box className='relative mx-auto my-4 h-[200px] w-[200px]'>
                <Image
                  placeholder='blur'
                  src={isFemale ? qrFemale : qrMale}
                  fill
                  sizes='100%'
                  style={{ objectFit: 'contain' }}
                  alt='groom'
                />
              </Box>
            </Card>
          </div>
        </Dialog.Content>
      </Dialog.Root>
      <div
        className='text-ou fixed bottom-4 right-4 z-50 cursor-pointer rounded-full p-4 font-bold drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,1)]'
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        Top
      </div>
    </>
  );
};

export default Header;
