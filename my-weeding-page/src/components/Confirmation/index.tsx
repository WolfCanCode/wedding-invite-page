'use client';
import Lottie from 'lottie-react';
// Import the Head component from Next.js
import { useState } from 'react';

import animation1Data from './male.json';
import animation2Data from './female.json';

// Define a custom component for the UI
function Confirmation() {
  // Use React hooks to manage the state of the form inputs
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [attendance, setAttendance] = useState(0);
  const [noGuest, setNoGuests] = useState(1);
  const [isMale, setIsMale] = useState(false);
  const [isFemale, setIsFemale] = useState(false);
  const [isLoading, setLoading] = useState(false);

  // Define a function to handle the form submission
  function handleSubmit(e: any) {
    e.preventDefault();
    if (!isMale && !isFemale) {
      alert('Bạn chưa chọn sự kiện tham dự');
      return;
    }
    setLoading(true);
    // Send the form data to the server
    fetch('/api/confirmation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        phone,
        confirmChoice: attendance,
        numberOfGuests: noGuest,
        isMale,
        isFemale,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Log the response to the console
        console.log('Response received from server:', data);
        // Reset the form
        setName('');
        setPhone('');
        setAttendance(0);
        setNoGuests(0);
        setIsMale(false);
        setIsFemale(false);
        setLoading(false);
        if (data) {
          alert('Cảm ơn bạn đã xác nhận tham dự, chúc bạn một ngày vui vẻ!');
        }
      });
  }

  // Return the JSX code for the UI
  return (
    <section id='confirmation'>
      {/* Add a header with a red background and white text */}
      <header className='bg-[#7A4732] py-4 text-center text-2xl font-bold text-white'>
        Xác nhận tham dự
      </header>
      {/* Add a main section with a form */}
      <main className='mx-auto max-w-lg p-8'>
        <form onSubmit={handleSubmit}>
          {/* Add a form group for the name input */}
          <div className='mb-4'>
            <label
              htmlFor='name'
              className='mb-4 block text-sm font-medium text-gray-700'
            >
              Chọn sự kiện tham dự
            </label>
            <div className='flex flex-row justify-center gap-4'>
              <div
                onClick={() => {
                  if (isLoading) return;
                  setIsMale(!isMale);
                }}
                className={[
                  'flex h-[100px] w-[100px] cursor-pointer flex-col justify-center rounded-full text-center',
                  isMale ? 'bg-blue-200' : '',
                ].join(' ')}
              >
                <Lottie
                  animationData={animation1Data}
                  className='flex max-h-[100px] max-w-[100px] items-center justify-center '
                  loop={true}
                />
                <span className='text-lg font-bold text-blue-500'>
                  Nhà trai
                </span>
              </div>
              <div
                onClick={() => {
                  if (isLoading) return;
                  setIsFemale(!isFemale);
                }}
                className={[
                  'flex h-[100px] w-[100px] cursor-pointer flex-col justify-center rounded-full text-center',
                  isFemale ? 'bg-pink-200' : '',
                ].join(' ')}
              >
                <Lottie
                  animationData={animation2Data}
                  className='flex max-h-[100px] max-w-[100px] items-center justify-center'
                  loop={true}
                />
                <span className='text-lg font-bold text-pink-500'>Nhà gái</span>
              </div>
            </div>
          </div>
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
              Nhập số điện thoại của bạn
            </label>
            <input
              disabled={isLoading}
              id='phone'
              name='phone'
              type='tel'
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              required
              className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
            />
          </div>
          {/* Add a form group for the attendance dropdown */}
          <div className='mb-4'>
            <label
              htmlFor='attendance'
              className='block text-sm font-medium text-gray-700'
            >
              Bạn sẽ tham gia lễ cưới?
            </label>
            <select
              disabled={isLoading}
              id='attendance'
              name='attendance'
              value={attendance}
              onChange={(event) =>
                setAttendance(parseFloat(event.target.value))
              }
              required
              className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
            >
              <option value='1'>Có</option>
              <option value='2'>Không</option>
              <option value='0'>Chưa biết</option>
            </select>
          </div>
          {/* Add a form group for the hotel radio buttons */}
          <div className='mb-4'>
            <span className='block text-sm font-medium text-gray-700'>
              Bạn có người đi cùng không? (Tính cả bản thân bạn)
            </span>
            <div className='mt-2'>
              <input
                disabled={isLoading}
                id='noGuest'
                name='noGuest'
                type='number'
                value={noGuest}
                onChange={(event) => setNoGuests(parseInt(event.target.value))}
                required
                className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
              />
            </div>
          </div>
          {/* Add a footer with a submit button */}
          <button
            disabled={isLoading}
            type='submit'
            className='w-full rounded bg-[#7A4732] px-4 py-4 text-center text-xl font-bold text-white'
          >
            {isLoading ? 'Đang xử lý...' : 'Xác nhận'}
          </button>
        </form>
      </main>
    </section>
  );
}

// Export the component as the default export
export default Confirmation;
