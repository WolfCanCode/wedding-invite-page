'use client';

import Lottie from 'lottie-react';
import { Habibi } from 'next/font/google';
import Image from 'next/image';
import React from 'react';

import story1Image from './story-1.jpg';
import story2Image from './story-2.jpg';
import story3Image from './story-3.jpg';
import story4Image from './story-4.jpg';

import animation1Data from './story-1.json';
import animation2Data from './story-2.json';
import animation3Data from './story-3.json';
import animation4Data from './story-4.json';
const font = Habibi({ weight: '400', subsets: ['latin'] });

const Stories: React.FC = () => {
  return (
    <section className='flex w-screen flex-col py-10 text-center'>
      {/* Story 1 */}
      <div className='flex flex-col md:flex-row'>
        <div className='hidden flex-1 flex-col  justify-center bg-white/80 text-2xl lg:flex'>
          <div className='px-20 py-4'>
            <div className='flex min-h-[50px] justify-center'>
              <Lottie
                animationData={animation1Data}
                className='flex max-h-[150px] items-center justify-center'
                loop={true}
              />
            </div>
            <span className={font.className}>
              Amidst the urban clamor, our eyes met, and love ignited in a
              single glance. His captivating gaze, the mischievous curve of his
              smile, his aura of charm - all conspired to capture my heart. In
              that moment, time stood still, and I knew I had found my soulmate
              ♥.
            </span>
          </div>
        </div>
        <div className='relative min-h-[400px] flex-1 md:min-h-[800px]'>
          <Image
            alt='first-met'
            style={{ objectFit: 'cover' }}
            fill
            sizes='100%'
            placeholder='blur'
            src={story1Image}
          />
        </div>
        <div className='flex flex-1 flex-col  justify-center bg-white/80 pb-10 pt-5 text-xl lg:hidden'>
          <div className='px-10'>
            <div className='flex min-h-[100px] justify-center'>
              <Lottie
                animationData={animation1Data}
                className='flex max-h-[150px] items-center justify-center'
                loop={true}
              />
            </div>
            <span className={font.className}>
              Amidst the urban clamor, our eyes met, and love ignited in a
              single glance. His captivating gaze, the mischievous curve of his
              smile, his aura of charm - all conspired to capture my heart. In
              that moment, time stood still, and I knew I had found my soulmate
              ♥.
            </span>
          </div>
        </div>
      </div>

      {/* Story 2 */}
      <div className='flex flex-col md:flex-row'>
        <div className='relative min-h-[400px] flex-1 md:min-h-[800px]'>
          <Image
            alt='start-talking'
            style={{ objectFit: 'cover', objectPosition: '50% 100%' }}
            sizes='100%'
            placeholder='blur'
            fill
            src={story2Image}
          />
        </div>
        <div className='hidden flex-1 flex-col  justify-center bg-[#431407] text-2xl lg:flex '>
          <div className='px-20  py-4'>
            <div className='flex min-h-[50px] justify-center'>
              <Lottie
                animationData={animation2Data}
                className='flex max-h-[150px] items-center justify-center'
                loop={true}
              />
            </div>
            <span className={[font.className, 'text-white'].join(' ')}>
              Drawn to his magnetic presence, I approached him, my heart
              pounding with anticipation. Our conversation flowed effortlessly,
              revealing a shared passion for life, a deep connection that
              transcended the mundane. As we delved into our thoughts and
              dreams, I discovered a kindred spirit, someone who mirrored my
              thoughts and echoed my heart.
              <br />
              Under his unwavering support, I shed my insecurities and embraced
              my authentic self. He ignited a fire within me, empowering me to
              chase my dreams and believe in my own potential. With each passing
              moment, my admiration for him blossomed into a love so profound,
              so pure, that it filled my soul with an indescribable joy 🧸.
            </span>
          </div>
        </div>
        <div className='flex flex-1 flex-col  justify-center bg-[#431407] pb-10 pt-5 text-xl lg:hidden '>
          <div className='px-10'>
            <div className='flex min-h-[100px] justify-center'>
              <Lottie
                animationData={animation2Data}
                className='flex max-h-[100px] items-center justify-center'
                loop={true}
              />
            </div>
            <span className={[font.className, 'text-white'].join(' ')}>
              Drawn to his magnetic presence, I approached him, my heart
              pounding with anticipation. Our conversation flowed effortlessly,
              revealing a shared passion for life, a deep connection that
              transcended the mundane. As we delved into our thoughts and
              dreams, I discovered a kindred spirit, someone who mirrored my
              thoughts and echoed my heart.
              <br />
              Under his unwavering support, I shed my insecurities and embraced
              my authentic self. He ignited a fire within me, empowering me to
              chase my dreams and believe in my own potential. With each passing
              moment, my admiration for him blossomed into a love so profound,
              so pure, that it filled my soul with an indescribable joy 🧸.{' '}
            </span>
          </div>
        </div>
      </div>

      {/* Story 3 */}
      <div className='flex flex-col md:flex-row'>
        <div className='hidden flex-1 flex-col  justify-center bg-white/80 text-2xl lg:flex'>
          <div className='px-20 py-4'>
            <div className='flex min-h-[150px] justify-center'>
              <Lottie
                animationData={animation3Data}
                className='flex max-h-[100px] items-center justify-center'
                loop={true}
              />
            </div>
            <span className={font.className}>
              Our love blossomed amidst the beauty of nature, our shared passion
              for hiking leading us on countless adventures. One fateful day, we
              ventured into an unexplored forest trail, captivated by its
              mystery. As the sun began to set, we found ourselves lost, the
              familiar path replaced by a labyrinth of trees and shadows.
              <br />
              Panic threatened to consume us, but our love for each other
              provided a beacon of hope. We calmed ourselves, drawing strength
              from our shared resilience and determination. Guided by the sound
              of flowing water, we retraced our steps, our spirits lifted by
              laughter and shared stories.
              <br />
              Finally, a familiar trail marker emerged, leading us back to the
              light of civilization. We emerged, our hearts filled with
              gratitude, our bond strengthened by the experience. This shared
              adventure taught us the power of love and resilience – together,
              we could overcome any challenge.
            </span>
          </div>
        </div>
        <div className='relative min-h-[400px] flex-1 md:min-h-[800px]'>
          <Image
            alt='lost-in-forest'
            style={{ objectFit: 'cover', objectPosition: '50% 70%' }}
            sizes='100%'
            placeholder='blur'
            fill
            src={story3Image}
          />
        </div>
        <div className='flex flex-1 flex-col  justify-center bg-white/80 pb-10 pt-5 text-xl lg:hidden'>
          <div className='px-10'>
            <div className='flex min-h-[150px] justify-center'>
              <Lottie
                animationData={animation3Data}
                className='flex max-h-[100px] items-center justify-center'
                loop={true}
              />
            </div>
            <span className={font.className}>
              Our love blossomed amidst the beauty of nature, our shared passion
              for hiking leading us on countless adventures. One fateful day, we
              ventured into an unexplored forest trail, captivated by its
              mystery. As the sun began to set, we found ourselves lost, the
              familiar path replaced by a labyrinth of trees and shadows.
              <br />
              Panic threatened to consume us, but our love for each other
              provided a beacon of hope. We calmed ourselves, drawing strength
              from our shared resilience and determination. Guided by the sound
              of flowing water, we retraced our steps, our spirits lifted by
              laughter and shared stories.
              <br />
              Finally, a familiar trail marker emerged, leading us back to the
              light of civilization. We emerged, our hearts filled with
              gratitude, our bond strengthened by the experience. This shared
              adventure taught us the power of love and resilience – together,
              we could overcome any challenge.
            </span>
          </div>
        </div>
      </div>

      {/* Story 4 */}
      <div className='flex flex-col md:flex-row'>
        <div className='relative min-h-[400px] flex-1 md:min-h-[800px]'>
          <Image
            alt='start-talking'
            style={{ objectFit: 'cover' }}
            sizes='100%'
            placeholder='blur'
            fill
            src={story4Image}
          />
        </div>
        <div className='hidden flex-1 flex-col  justify-center bg-[#431407] text-2xl lg:flex '>
          <div className='px-20 py-4'>
            <div className='flex min-h-[150px] justify-center'>
              <Lottie
                animationData={animation4Data}
                className='flex max-h-[100px] items-center justify-center'
                loop={true}
              />
            </div>
            <span className={[font.className, 'text-white'].join(' ')}>
              As we stepped out of the forest, we knew our journey had just
              begun. We embraced the challenge of love and friendship, vowing to
              cherish the intimacy, passion, and support we found in each other.
              <br />
              Throughout the years, our love deepened, our friendship blossomed,
              and our bond solidified. We navigated life&apos;s challenges
              together, our love and friendship serving as an unwavering
              compass.
            </span>
          </div>
        </div>
        <div className='flex flex-1 flex-col  justify-center bg-[#431407] pb-10 pt-5 text-xl lg:hidden '>
          <div className='px-10'>
            <div className='flex min-h-[150px] justify-center'>
              <Lottie
                animationData={animation4Data}
                className='flex max-h-[100px] items-center justify-center'
                loop={true}
              />
            </div>
            <span className={[font.className, 'text-white'].join(' ')}>
              As we stepped out of the forest, we knew our journey had just
              begun. We embraced the challenge of love and friendship, vowing to
              cherish the intimacy, passion, and support we found in each other.
              <br />
              Throughout the years, our love deepened, our friendship blossomed,
              and our bond solidified. We navigated life&apos;s challenges
              together, our love and friendship serving as an unwavering
              compass.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stories;
