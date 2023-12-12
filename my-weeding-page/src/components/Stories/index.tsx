'use client';

import Lottie from 'lottie-react';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import {
  useMotionValueEvent,
  useScroll,
  motion,
  useTransform,
  useInView,
} from 'framer-motion';

import story1Image from './story-1.jpg';
import story2Image from './story-2.jpg';
import story3Image from './story-3.jpg';
import story4Image from './story-4.jpg';

import animation1Data from './story-1.json';
import animation2Data from './story-2.json';
import animation3Data from './story-3.json';
import animation4Data from './story-4.json';
import { useUpdateEffect } from 'react-use';
const font = Montserrat({ weight: '400', subsets: ['vietnamese'] });

const Stories: React.FC = () => {
  const [inView1, setInView1] = React.useState(false);
  const [inView2, setInView2] = React.useState(false);
  const [inView3, setInView3] = React.useState(false);
  //story
  const secRef1 = React.useRef<HTMLDivElement>(null);
  const isInView1 = useInView(secRef1);
  const { scrollYProgress: yProgress1 } = useScroll({
    target: secRef1,
    offset: ['start end', 'end start'],
  });
  const scale1 = useTransform(yProgress1, [0, 0.5, 1], [1.5, 1.25, 1]);

  useUpdateEffect(() => {
    if (isInView1) {
      setInView1(isInView1);
    }
  }, [isInView1]);

  //story
  const secRef2 = React.useRef<HTMLDivElement>(null);
  const isInView2 = useInView(secRef2);
  const { scrollYProgress: yProgress2 } = useScroll({
    target: secRef2,
    offset: ['start end', 'end start'],
  });
  const scale2 = useTransform(yProgress2, [0, 0.5, 1], [1.5, 1.25, 1]);

  useUpdateEffect(() => {
    if (isInView2) {
      setInView2(isInView2);
    }
  }, [isInView2]);

  //story
  const secRef3 = React.useRef<HTMLDivElement>(null);
  const isInView3 = useInView(secRef3);
  const { scrollYProgress: yProgress3 } = useScroll({
    target: secRef3,
    offset: ['start end', 'end start'],
  });
  const scale3 = useTransform(yProgress3, [0, 0.5, 1], [1.5, 1.25, 1]);

  useUpdateEffect(() => {
    if (isInView3) {
      setInView3(isInView3);
    }
  }, [isInView3]);

  return (
    <section className='flex w-screen flex-col pt-10 text-center'>
      {/* Story 1 */}
      <div className='flex flex-col md:flex-row'>
        <div className='hidden flex-1 flex-col  justify-center bg-white/80 text-2xl lg:flex'>
          <div className='px-20 py-4'>
            <div className='flex min-h-[120px] justify-center'>
              <Lottie
                animationData={animation1Data}
                className='flex max-h-[100px] items-center justify-center'
                loop={true}
              />
            </div>
            <span className={font.className}>
              {inView1 ? (
                <TypeAnimation
                  sequence={[
                    `Tình yêu không phải là việc thay đổi một người, mà là việc hỗ trợ
                    và khuyến khích họ để trở thành phiên bản tốt nhất của chính mình.`,
                    1000,
                  ]}
                  speed={50}
                  style={{ whiteSpace: 'pre-line' }}
                  className='text-md'
                  repeat={0}
                />
              ) : null}
            </span>
          </div>
        </div>
        <div
          className='relative min-h-[400px] flex-1 overflow-hidden md:min-h-[800px]'
          ref={secRef1}
        >
          <motion.div
            className='relative min-h-[400px] md:min-h-[800px]'
            style={{ scale: scale1 }}
          >
            <Image
              alt='first-met'
              style={{ objectFit: 'cover' }}
              fill
              sizes='100%'
              placeholder='blur'
              src={story1Image}
            />
          </motion.div>
        </div>
        <div className='flex flex-1 flex-col  justify-center bg-white/80 pt-5 text-xl lg:hidden'>
          <div className='px-10 pb-10'>
            <div className='flex min-h-[100px] justify-center'>
              <Lottie
                animationData={animation1Data}
                className='flex max-h-[120px] items-center justify-center'
                loop={true}
              />
            </div>
            <div className={[font.className, 'min-h-[200px]'].join(' ')}>
              {inView1 && (
                <TypeAnimation
                  sequence={[
                    `Tình yêu không phải là việc thay đổi một người, mà là việc hỗ trợ
                    và khuyến khích họ để trở thành phiên bản tốt nhất của chính mình.`,
                    1000,
                  ]}
                  speed={50}
                  style={{ whiteSpace: 'pre-line' }}
                  className='text-md'
                  repeat={0}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Story 2 */}
      <div className='flex flex-col md:flex-row'>
        <div
          className='relative min-h-[400px] flex-1 overflow-hidden md:min-h-[800px]'
          ref={secRef2}
        >
          <motion.div
            className='relative min-h-[400px] md:min-h-[800px]'
            style={{ scale: scale2 }}
          >
            <Image
              alt='start-talking'
              style={{ objectFit: 'cover', objectPosition: '50% 100%' }}
              sizes='100%'
              placeholder='blur'
              fill
              src={story2Image}
            />
          </motion.div>
        </div>
        <div className='hidden flex-1 flex-col  justify-center bg-[#431407] text-2xl lg:flex '>
          <div className='px-20  py-4'>
            <div className='flex min-h-[50px] justify-center'>
              <Lottie
                animationData={animation2Data}
                className='flex max-h-[120px] items-center justify-center'
                loop={true}
              />
            </div>
            <span className={[font.className, 'text-white'].join(' ')}>
              {inView2 && (
                <TypeAnimation
                  sequence={[
                    `Hôn nhân là một cuộc phiêu lưu đầy thách thức và niềm vui. Chúng
              mình đã sẵn sàng tận hưởng việc xây dựng tổ ấm của mình và chia sẻ
              những kỷ niệm đáng nhớ cùng nhau.`,
                    1000,
                  ]}
                  speed={50}
                  style={{ whiteSpace: 'pre-line' }}
                  className='text-md text-white'
                  repeat={0}
                />
              )}
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
            <div
              className={[font.className, 'min-h-[200px] text-white'].join(' ')}
            >
              {inView2 && (
                <TypeAnimation
                  sequence={[
                    `Hôn nhân là một cuộc phiêu lưu đầy thách thức và niềm vui. Chúng
              mình đã sẵn sàng tận hưởng việc xây dựng tổ ấm của mình và chia sẻ
              những kỷ niệm đáng nhớ cùng nhau.`,
                    1000,
                  ]}
                  speed={50}
                  style={{ whiteSpace: 'pre-line' }}
                  className='text-md text-white'
                  repeat={0}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Story 3 */}
      <div className='flex flex-col md:flex-row'>
        <div className='hidden flex-1 flex-col  justify-center bg-white/80 text-2xl lg:flex'>
          <div className='px-20 py-4'>
            <div className='flex min-h-[120px] justify-center'>
              <Lottie
                animationData={animation3Data}
                className='flex max-h-[100px] items-center justify-center'
                loop={true}
              />
            </div>
            <span className={font.className}>
              {inView3 && (
                <TypeAnimation
                  sequence={[
                    `Một ngày đặc biệt sắp đến và sự hiện diện của bạn là một món quà
              vô giá giúp cho ngày trọng đại này trở nên thêm ý nghĩa và trọn
              vẹn. Trân trọng mời bạn đến tham dự buổi tiệc mừng Lễ thành hôn
              của hai chúng mình. Để có thể chuẩn bị và đón tiếp bạn chu đáo,
              bạn hãy đăng kí thông tin tham dự tiệc cưới ở bên dưới nhé.
              \nSee you soon!`,
                    1000,
                  ]}
                  speed={50}
                  style={{ whiteSpace: 'pre-line' }}
                  className='text-md '
                  repeat={0}
                />
              )}
            </span>
          </div>
        </div>
        <div
          className='relative min-h-[400px] flex-1 overflow-hidden md:min-h-[800px]'
          ref={secRef3}
        >
          <motion.div
            style={{ scale: scale3 }}
            className='relative min-h-[400px] md:min-h-[800px]'
          >
            <Image
              alt='lost-in-forest'
              style={{ objectFit: 'cover', objectPosition: '50% 70%' }}
              sizes='100%'
              placeholder='blur'
              fill
              src={story3Image}
            />
          </motion.div>
        </div>
        <div className='flex flex-1 flex-col  justify-center bg-white/80 pb-10 pt-5 text-xl lg:hidden'>
          <div className='px-10'>
            <div className='flex min-h-[120px] justify-center'>
              <Lottie
                animationData={animation3Data}
                className='flex max-h-[100px] items-center justify-center'
                loop={true}
              />
            </div>
            <div className={[font.className, 'min-h-[320px]'].join(' ')}>
              {inView3 && (
                <TypeAnimation
                  sequence={[
                    `Một ngày đặc biệt sắp đến và sự hiện diện của bạn là một món quà
              vô giá giúp cho ngày trọng đại này trở nên thêm ý nghĩa và trọn
              vẹn. Trân trọng mời bạn đến tham dự buổi tiệc mừng Lễ thành hôn
              của hai chúng mình. Để có thể chuẩn bị và đón tiếp bạn chu đáo,
              bạn hãy đăng kí thông tin tham dự tiệc cưới ở bên dưới nhé.
              \nSee you soon!`,
                    1000,
                  ]}
                  speed={50}
                  style={{ whiteSpace: 'pre-line' }}
                  className='text-md '
                  repeat={0}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Story 4 */}
      {/* <div className='flex flex-col md:flex-row'>
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
            <div className='flex min-h-[120px] justify-center'>
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
            <div className='flex min-h-[120px] justify-center'>
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
      </div> */}
    </section>
  );
};

export default Stories;
