'use client';

import { Dancing_Script } from 'next/font/google';
import React, { useState } from 'react';
import animationData from './blessing.json';
import animation2Data from './blessing2.json';

import Lottie from 'lottie-react';
import { useMedia, useMount, useUpdateEffect } from 'react-use';
const font1 = Dancing_Script({ weight: '400', subsets: ['vietnamese'] });

const Blessing: React.FC = () => {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isWide, setIsWide] = useState(false);
  const [listBlessing, setListBlessing] = useState<
    {
      id?: string;
      name?: string;
      content?: string;
      createdAt?: string;
    }[]
  >([]);

  const getBlessing = () => {
    fetch('/api/blessing', { cache: 'no-store' })
      .then((response) => response.json())
      .then((data) => {
        setListBlessing(data.blessings);
      });
  };

  useMount(() => {
    getBlessing();
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    //call post to blessing for send data to server
    setIsLoading(true);
    // Send the form data to the server
    fetch('/api/blessing', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        content,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Log the response to the console
        console.log('Response received from server:', data);
        // Reset the form
        setName('');
        setContent('');
        if (data) {
          alert('Cảm ơn bạn đã gửi lời yêu thương ♥️!');
        }
        getBlessing();
      });
  };

  const isWideHook = useMedia('(min-width: 768px)');

  useUpdateEffect(() => {
    setIsWide(isWideHook);
  }, [isWideHook]);

  // transform full name into censor name text
  const censorName = (name: string) => {
    const nameArr = name.split(' ');
    const censorName = nameArr.map((name) => {
      const nameArr = name.split('');
      const censorName = nameArr.map((letter, index) => {
        if (index === 0) {
          return letter;
        }
        return '*';
      });
      return censorName.join('');
    });
    return censorName.join(' ');
  };

  return (
    <section
      id='blessing'
      className='relative flex flex-col justify-center bg-rose-200 pt-12 text-center'
    >
      <div className='justify-center'>
        <Lottie
          animationData={animationData}
          className='h-[200px] items-center justify-center'
          loop={true}
        />
      </div>
      <div className={[font1.className, 'text-5xl'].join(' ')}>
        Đôi lời chúc phúc
      </div>
      <div className='z-[10] flex flex-row justify-center py-12 text-left'>
        <div className='justify-flex-start flex w-[90%] flex-col gap-8 rounded-lg bg-white p-8 drop-shadow-2xl md:w-[720px] md:flex-row'>
          <div className='flex flex-1'>
            <form onSubmit={handleSubmit} className='w-full'>
              <div className='mb-4'>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-gray-700'
                >
                  Nhập tên của bạn
                </label>
                <input
                  disabled={isLoading}
                  id='name'
                  name='name'
                  type='text'
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                  className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                />
              </div>
              {/* Add a form group for the phone input */}
              <div className='mb-4'>
                <label
                  htmlFor='phone'
                  className='block text-sm font-medium text-gray-700'
                >
                  Nhập lời chúc phúc
                </label>
                <textarea
                  disabled={isLoading}
                  id='content'
                  name='content'
                  value={content}
                  rows={6}
                  onChange={(event) => setContent(event.target.value)}
                  required
                  className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                />
              </div>
              <button
                disabled={isLoading}
                type='submit'
                className='w-full rounded bg-rose-700 px-4 py-4 text-center text-xl font-bold text-white'
              >
                {isLoading ? 'Đang xử lý...' : 'Gửi'}
              </button>
            </form>
          </div>
          <div className='flex flex-1 flex-col text-lg'>
            Vì một lý do nào đó bạn không thể tham dự bữa tiệc cùng hai gia
            đình, bạn có thể gửi những lời chúc tươi đẹp cho tương lai của đôi
            trẻ tại đây. Những lời chúc ý nghĩa của bạn sẽ trở thành một dấu ấn
            thật đặc biệt trong cuộc hành trình của chúng tôi.
            <br />
            THANK YOU ♥️
          </div>
        </div>
      </div>
      <div className='justify-center'>
        <Lottie
          animationData={animation2Data}
          className='h-[200px] items-center justify-center'
          loop={true}
        />
      </div>
      <div className='md:max-h-auto scroll-parent gap-4overflow-y-auto flex max-h-[300px] min-h-[100px] w-full flex-row flex-wrap px-10 py-10 shadow-inner md:flex-nowrap md:overflow-x-auto md:overflow-y-hidden'>
        {isWide ? (
          <div className='scroll-element primary flex flex-row flex-wrap gap-4 py-10  md:flex-nowrap '>
            {listBlessing.map((blessing) => (
              <div
                key={blessing.id}
                className='h-fit w-fit min-w-[300px] whitespace-nowrap rounded-3xl bg-white/25 p-4'
              >
                <div className='text-left text-sm font-bold'>
                  {censorName(blessing.name || '')}
                </div>
                <div className='max-w-[300px] whitespace-normal text-left'>
                  {blessing.content}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className='scroll-element-mobile primaryMobile flex flex-row flex-wrap justify-center gap-4 py-10  md:flex-nowrap '>
            {listBlessing.map((blessing) => (
              <div
                key={blessing.id}
                className='h-fit w-fit min-w-[300px] whitespace-nowrap rounded-3xl bg-white/25 p-4'
              >
                <div className='text-left text-sm font-bold'>
                  {censorName(blessing.name || '')}
                </div>
                <div className='max-w-[300px] whitespace-normal text-left'>
                  {blessing.content}
                </div>
              </div>
            ))}
          </div>
        )}
        {isWide ? (
          <div className='scroll-element primary  flex flex-row flex-wrap gap-4 py-10  md:flex-nowrap '>
            {listBlessing.map((blessing) => (
              <div
                key={blessing.id}
                className='h-fit w-fit min-w-[300px] whitespace-nowrap rounded-3xl bg-white/25 p-4'
              >
                <div className='text-left text-sm font-bold'>
                  {censorName(blessing.name || '')}
                </div>
                <div className='max-w-[300px] whitespace-normal text-left'>
                  {blessing.content}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className='scroll-element-mobile secondaryMobile mt-12 flex flex-row flex-wrap justify-center gap-4 py-10  md:flex-nowrap '>
            {listBlessing.map((blessing) => (
              <div
                key={blessing.id}
                className='h-fit w-fit min-w-[300px] whitespace-nowrap rounded-3xl bg-white/25 p-4'
              >
                <div className='text-left text-sm font-bold'>
                  {censorName(blessing.name || '')}
                </div>
                <div className='max-w-[300px] whitespace-normal text-left'>
                  {blessing.content}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blessing;
