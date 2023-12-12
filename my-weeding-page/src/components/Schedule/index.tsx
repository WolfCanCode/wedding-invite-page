'use client';

import React from 'react';
import { AddToCalendarButton } from 'add-to-calendar-button-react';
import { Dancing_Script, Unica_One, Reem_Kufi_Fun } from 'next/font/google';
import Lottie from 'lottie-react';
import animation1Data from './male.json';
import animation2Data from './female.json';
import animationCalData from './calendar.json';

const font1 = Dancing_Script({ weight: '400', subsets: ['vietnamese'] });
// const font2 = Unica_One({ weight: '400', subsets: ['vietnamese'] });
// const font3 = Reem_Kufi_Fun({ weight: '400', subsets: ['vietnamese'] });

const Schedule: React.FC = () => {
  return (
    <section
      id='schedule'
      className='flex flex-col justify-center bg-orange-100 py-5 text-center md:py-20'
    >
      <div className='flex flex-col justify-center gap-12 text-center'>
        <div className={[font1.className, 'text-5xl md:text-5xl'].join(' ')}>
          Lịch Trình
        </div>
        <div className='flex flex-row justify-center'>
          <Lottie
            animationData={animationCalData}
            className='flex max-h-[100px] items-center justify-center md:max-h-[150px]'
            loop={true}
          />
        </div>
      </div>
      <div className='flex flex-row justify-center'>
        <div className={['text-3xl  md:text-3xl'].join(' ')}>
          Ngày 16.12.2023
        </div>
      </div>
      <div className='mt-4 flex min-h-[250px]  flex-col justify-center gap-12 px-4 py-4 text-center md:flex-row'>
        <div className='md:px-18 mx-auto flex max-w-[350px] flex-col rounded-lg border-4 border-solid border-rose-300 bg-rose-200 px-8  py-6 text-center drop-shadow-lg md:mx-0 md:w-[450px] md:max-w-[400px]'>
          <div className='flex min-h-[150px] justify-center'>
            <Lottie
              animationData={animation2Data}
              className='flex max-h-[150px] max-w-[150px] items-center justify-center'
              loop={true}
            />
          </div>
          <div className='text-left'>
            <div
              className={['pb-2 text-3xl font-bold text-pink-500'].join(' ')}
            >
              👰🏼 Nhà gái
            </div>
            <div className={['text-xl text-green-500'].join(' ')}>
              🕥 10:30 đón khách
            </div>
            <div className={['text-xl text-black'].join(' ')}>
              💒 Tầng 3 - Sảnh Inter, Trung tâm tiệc cưới Nguyên Đình.
              <br />
              Số 7-9 Nguyễn Văn Linh, Long Biên, Hà Nội
            </div>
            <div className='mt-4 flex flex-row justify-between gap-4 '>
              <div className='w-fit'>
                <AddToCalendarButton
                  styleLight='--btn-background: #be123c; --btn-text: #fff;'
                  name="[Nhà gái] Hoàng Dũng - Khánh Ngọc's Wedding"
                  description='Chúng tôi xin trân trọng mời bạn đến tham dự buổi tiệc mừng Lễ thành hôn của hai chúng tôi. Bạn là một người bạn tuyệt vời và sự hiện diện của bạn sẽ làm cho ngày trọng đại này trở nên thêm ý nghĩa và trọn vẹn. 
                <br/>Địa chỉ nhà hàng: https://www.google.com/maps/place/TASCO+Mall/@21.0503204,105.8909991,17z/data=!3m1!4b1!4m6!3m5!1s0x3135abbfa96f309f:0xb4a28a19cfb53483!8m2!3d21.0503204!4d105.893574!16s%2Fg%2F1yh9tvhny?entry=tts'
                  startDate='2023-12-16'
                  startTime='10:30'
                  endDate='2023-12-16'
                  endTime='12:00'
                  timeZone='Asia/Bangkok'
                  location='World Wide Web'
                  availability='free'
                  options={[
                    'Apple',
                    'Google',
                    'Outlook.com',
                    'MicrosoftTeams',
                    'Microsoft365',
                  ]}
                  trigger='click'
                  label='Lưu vào lịch'
                  language='vi'
                ></AddToCalendarButton>
              </div>
              <div className='flex flex-col justify-center'>
                <a
                  target='_blank'
                  href='https://www.google.com/maps/place/TASCO+Mall/@21.0503204,105.8909991,17z/data=!3m1!4b1!4m6!3m5!1s0x3135abbfa96f309f:0xb4a28a19cfb53483!8m2!3d21.0503204!4d105.893574!16s%2Fg%2F1yh9tvhny?entry=tts'
                  className='text-lg text-rose-700 underline decoration-rose-700 underline-offset-2 md:text-lg '
                >
                  Chỉ đường
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='md:px-18 mx-auto flex max-w-[350px] flex-col  rounded-lg  border-4 border-solid border-blue-300 bg-blue-200 px-8  py-6 text-center drop-shadow-lg md:mx-0 md:w-[450px] md:max-w-[400px]'>
          <div className='flex min-h-[150px] justify-center'>
            <Lottie
              animationData={animation1Data}
              className='flex max-h-[150px] max-w-[150px] items-center justify-center'
              loop={true}
            />
          </div>
          <div className='text-left'>
            <div
              className={['pb-2 text-3xl font-bold text-blue-500'].join(' ')}
            >
              🤵🏻 Nhà trai
            </div>
            <div className={['text-xl text-green-500'].join(' ')}>
              🕒 15:00 đón khách
            </div>
            <div className={['text-xl text-black'].join(' ')}>
              💒 Trang phục biểu diễn Đức Nhàn <br />
              TDP Quán Trắng, Tân An, Yên Dũng, Bắc Giang
            </div>
            <div className='mt-10 flex flex-row justify-between gap-4'>
              <div className='w-fit'>
                <AddToCalendarButton
                  styleLight='--btn-background: #1d4ed8; --btn-text: #fff;'
                  name="[Nhà trai] Hoàng Dũng - Khánh Ngọc's Wedding"
                  description='Chúng tôi xin trân trọng mời bạn đến tham dự buổi tiệc mừng Lễ thành hôn của hai chúng tôi. Bạn là một người bạn tuyệt vời và sự hiện diện của bạn sẽ làm cho ngày trọng đại này trở nên thêm ý nghĩa và trọn vẹn. 
                <br/>Địa chỉ: https://www.google.com/maps/place/Trang+Ph%E1%BB%A5c+Bi%E1%BB%83u+Di%E1%BB%85n+%C4%90%E1%BB%A9c+Nh%C3%A0n/@21.2705855,106.2631129,17z/data=!3m1!4b1!4m6!3m5!1s0x31356fcaf62b2989:0xd8369695fb2e9426!8m2!3d21.2705855!4d106.2656878!16s%2Fg%2F11l6xlgk43?entry=tts'
                  startDate='2023-12-16'
                  startTime='15:00'
                  endDate='2023-12-16'
                  endTime='19:00'
                  timeZone='Asia/Bangkok'
                  location='World Wide Web'
                  availability='free'
                  options={[
                    'Apple',
                    'Google',
                    'Outlook.com',
                    'MicrosoftTeams',
                    'Microsoft365',
                  ]}
                  trigger='click'
                  label='Lưu vào lịch'
                  language='vi'
                ></AddToCalendarButton>
              </div>
              <div className='flex flex-col justify-center'>
                <a
                  target='_blank'
                  href='https://www.google.com/maps/place/Trang+Ph%E1%BB%A5c+Bi%E1%BB%83u+Di%E1%BB%85n+%C4%90%E1%BB%A9c+Nh%C3%A0n/@21.2705855,106.2631129,17z/data=!3m1!4b1!4m6!3m5!1s0x31356fcaf62b2989:0xd8369695fb2e9426!8m2!3d21.2705855!4d106.2656878!16s%2Fg%2F11l6xlgk43?entry=tts'
                  className='text-lg text-blue-700 underline decoration-blue-700 underline-offset-2 md:text-lg'
                >
                  Chỉ đường
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
