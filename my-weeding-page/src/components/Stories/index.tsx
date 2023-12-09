"use client"

import React from 'react';
import { Hachi_Maru_Pop, Habibi } from 'next/font/google';
import Image from 'next/image';
import Lottie from 'lottie-react';
const font1 = Hachi_Maru_Pop({ weight: "400", subsets: ['latin'] });
const font2 = Habibi({ weight: '400', subsets: ['latin'] });
import animation1Data from "./story-1.json";
import animation2Data from "./story-2.json";
import animation3Data from "./story-3.json";
import animation4Data from "./story-4.json";

const Stories: React.FC = () => {

  return (
    <section className="flex flex-col text-center py-10 w-screen">
      {/* Story 1 */}
      <div className='flex flex-col md:flex-row'>
        <div className='hidden lg:flex flex-1  flex-col justify-center text-3xl bg-white/80'>
          <div className='px-20 py-4'>
            <div className='flex justify-center min-h-[50px]'>
              <Lottie
                animationData={animation1Data}
                className="flex justify-center items-center max-h-[150px]"
                loop={true}
              />
            </div>
            <span className={font2.className}>
              Amidst the urban clamor, our eyes met, and love ignited in a single glance. His captivating gaze, the mischievous curve of his smile, his aura of charm - all conspired to capture my heart. In that moment, time stood still, and I knew I had found my soulmate ♥.
            </span>
          </div>
        </div>
        <div className='flex-1 relative min-h-[400px] md:min-h-[800px]'>
          <Image alt='first-met' objectFit='cover' fill src="/story-1.jpg" />
        </div>
        <div className='flex lg:hidden flex-1  flex-col justify-center text-xl pt-5 pb-10 bg-white/80'>
          <div className='px-10'>
            <div className='flex justify-center min-h-[100px]'>
              <Lottie
                animationData={animation1Data}
                className="flex justify-center items-center max-h-[150px]"
                loop={true}
              />
            </div>
            <span className={font2.className}>
              Amidst the urban clamor, our eyes met, and love ignited in a single glance. His captivating gaze, the mischievous curve of his smile, his aura of charm - all conspired to capture my heart. In that moment, time stood still, and I knew I had found my soulmate ♥.
            </span>
          </div>
        </div>
      </div>

      {/* Story 2 */}
      <div className='flex flex-col md:flex-row'>
        <div className='flex-1 relative min-h-[400px] md:min-h-[800px]'>
          <Image alt='start-talking' objectFit='cover' objectPosition='50% 100%' fill src="/story-2.jpg" />
        </div>
        <div className='hidden lg:flex flex-1  flex-col justify-center text-3xl bg-[#431407] '>
          <div className='px-20  py-4'>
            <div className='flex justify-center min-h-[50px]'>
              <Lottie
                animationData={animation2Data}
                className="flex justify-center items-center max-h-[150px]"
                loop={true}
              />
            </div>
            <span className={[font2.className, "text-white"].join(" ")}>
              Drawn to his magnetic presence, I approached him, my heart pounding with anticipation. Our conversation flowed effortlessly, revealing a shared passion for life, a deep connection that transcended the mundane. As we delved into our thoughts and dreams, I discovered a kindred spirit, someone who mirrored my thoughts and echoed my heart.
              <br />
              Under his unwavering support, I shed my insecurities and embraced my authentic self. He ignited a fire within me, empowering me to chase my dreams and believe in my own potential. With each passing moment, my admiration for him blossomed into a love so profound, so pure, that it filled my soul with an indescribable joy 🧸.
            </span>
          </div>
        </div>
        <div className='flex lg:hidden flex-1  flex-col justify-center text-xl pt-5 pb-10 bg-[#431407] '>
          <div className='px-10'>
            <div className='flex justify-center min-h-[100px]'>
              <Lottie
                animationData={animation2Data}
                className="flex justify-center items-center max-h-[100px]"
                loop={true}
              />
            </div>
            <span className={[font2.className, "text-white"].join(" ")}>
              Drawn to his magnetic presence, I approached him, my heart pounding with anticipation. Our conversation flowed effortlessly, revealing a shared passion for life, a deep connection that transcended the mundane. As we delved into our thoughts and dreams, I discovered a kindred spirit, someone who mirrored my thoughts and echoed my heart.
              <br />
              Under his unwavering support, I shed my insecurities and embraced my authentic self. He ignited a fire within me, empowering me to chase my dreams and believe in my own potential. With each passing moment, my admiration for him blossomed into a love so profound, so pure, that it filled my soul with an indescribable joy 🧸.            </span>
          </div>
        </div>
      </div>

      {/* Story 3 */}
      <div className='flex flex-col md:flex-row'>
        <div className='hidden lg:flex flex-1  flex-col justify-center text-3xl bg-white/80'>
          <div className='px-20 py-4'>
            <div className='flex justify-center min-h-[150px]'>
              <Lottie
                animationData={animation3Data}
                className="flex justify-center items-center max-h-[100px]"
                loop={true}
              />
            </div>
            <span className={font2.className}>
              Our love blossomed amidst the beauty of nature, our shared passion for hiking leading us on countless adventures. One fateful day, we ventured into an unexplored forest trail, captivated by its mystery. As the sun began to set, we found ourselves lost, the familiar path replaced by a labyrinth of trees and shadows.
              <br />
              Panic threatened to consume us, but our love for each other provided a beacon of hope. We calmed ourselves, drawing strength from our shared resilience and determination. Guided by the sound of flowing water, we retraced our steps, our spirits lifted by laughter and shared stories.
              <br />
              Finally, a familiar trail marker emerged, leading us back to the light of civilization. We emerged, our hearts filled with gratitude, our bond strengthened by the experience. This shared adventure taught us the power of love and resilience – together, we could overcome any challenge.
            </span>
          </div>
        </div>
        <div className='flex-1 relative min-h-[400px] md:min-h-[800px]'>
          <Image alt='lost-in-forest' objectFit='cover' objectPosition='50% 70%' fill src="/story-3.jpg" />
        </div>
        <div className='flex lg:hidden flex-1  flex-col justify-center text-xl pt-5 pb-10 bg-white/80'>
          <div className='px-10'>
            <div className='flex justify-center min-h-[150px]'>
              <Lottie
                animationData={animation3Data}
                className="flex justify-center items-center max-h-[100px]"
                loop={true}
              />
            </div>
            <span className={font2.className}>
              Our love blossomed amidst the beauty of nature, our shared passion for hiking leading us on countless adventures. One fateful day, we ventured into an unexplored forest trail, captivated by its mystery. As the sun began to set, we found ourselves lost, the familiar path replaced by a labyrinth of trees and shadows.
              <br />
              Panic threatened to consume us, but our love for each other provided a beacon of hope. We calmed ourselves, drawing strength from our shared resilience and determination. Guided by the sound of flowing water, we retraced our steps, our spirits lifted by laughter and shared stories.
              <br />
              Finally, a familiar trail marker emerged, leading us back to the light of civilization. We emerged, our hearts filled with gratitude, our bond strengthened by the experience. This shared adventure taught us the power of love and resilience – together, we could overcome any challenge.
            </span>
          </div>
        </div>
      </div>

      {/* Story 4 */}
      <div className='flex flex-col md:flex-row'>
        <div className='flex-1 relative min-h-[400px] md:min-h-[800px]'>
          <Image alt='start-talking' objectFit='cover' fill src="/story-4.jpg" />
        </div>
        <div className='hidden lg:flex flex-1  flex-col justify-center text-3xl bg-[#431407] '>
          <div className='px-20 py-4'>
            <div className='flex justify-center min-h-[150px]'>
              <Lottie
                animationData={animation4Data}
                className="flex justify-center items-center max-h-[100px]"
                loop={true}
              />
            </div>
            <span className={[font2.className, "text-white"].join(" ")}>
              As we stepped out of the forest, we knew our journey had just begun. We embraced the challenge of love and friendship, vowing to cherish the intimacy, passion, and support we found in each other.
              <br />
              Throughout the years, our love deepened, our friendship blossomed, and our bond solidified. We navigated life&apos;s challenges together, our love and friendship serving as an unwavering compass.
            </span>
          </div>
        </div>
        <div className='flex lg:hidden flex-1  flex-col justify-center text-xl pt-5 pb-10 bg-[#431407] '>
          <div className='px-10'>
            <div className='flex justify-center min-h-[150px]'>
              <Lottie
                animationData={animation4Data}
                className="flex justify-center items-center max-h-[100px]"
                loop={true}
              />
            </div>
            <span className={[font2.className, "text-white"].join(" ")}>
              As we stepped out of the forest, we knew our journey had just begun. We embraced the challenge of love and friendship, vowing to cherish the intimacy, passion, and support we found in each other.
              <br />
              Throughout the years, our love deepened, our friendship blossomed, and our bond solidified. We navigated life&apos;s challenges together, our love and friendship serving as an unwavering compass.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stories;
