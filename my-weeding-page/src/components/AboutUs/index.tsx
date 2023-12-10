'use client';

import { Dancing_Script } from 'next/font/google';
import animationData from './aboutus.json';
import Lottie from 'lottie-react';
import Image from 'next/image';
const font1 = Dancing_Script({ weight: '400', subsets: ['vietnamese'] });

interface ContactInfo {
  name: string;
  email: string;
  phone: string;
}

const AboutUs: React.FC = () => {
  const groom: ContactInfo = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '1234567890',
  };

  const bride: ContactInfo = {
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '9876543210',
  };

  return (
    <section id='contact' className='flex flex-row justify-center py-20'>
      <div>
        <div className='justify-center'>
          <Lottie
            animationData={animationData}
            className='h-[200px] items-center justify-center'
            loop={true}
          />
        </div>
        <div className={[font1.className, 'text-center text-5xl'].join(' ')}>
          Thông tin liên hệ
        </div>

        <div className='flex flex-col justify-center gap-10 pt-8 md:flex-row'>
          <div>
            <div className='mx-auto h-[250px] w-[250px] overflow-hidden rounded-full'>
              <img
                src='https://i.ibb.co/w7H0p3r/DSC08392.jpg'
                className='ọbject-cover'
                alt='groom'
              />
            </div>
            <div className='flex flex-col pt-4 text-center '>
              <div className='text-2xl text-blue-500'>Chú rể</div>
              <a href='callto:0971431928' className='text-2xl font-bold'>
                0971.431.928
              </a>
            </div>
          </div>

          <div>
            <div className='mx-auto h-[250px] w-[250px] overflow-hidden rounded-full'>
              <img
                src='https://i.ibb.co/YbkWsNq/DSC07247.jpg'
                className='ọbject-cover'
                alt='bride'
              />
            </div>
            <div className='flex flex-col pt-4 text-center '>
              <div className='text-2xl text-rose-500'>Cô dâu</div>
              <a href='callto:0971431928' className='text-2xl font-bold'>
                0971.431.928
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
