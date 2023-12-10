'use client';

import { useEffect, useState } from 'react';

// Import the Head component from Next.js

// Define a custom component for the UI
import React from 'react';

function List() {
  // get list user from server
  const [listUser, setListUser] = useState<
    {
      id?: string;
      name?: string;
      phone?: string;
      isMale?: boolean;
      isFemale?: boolean;
      confirmChoice?: number;
      numberOfGuests?: number;
      createdAt?: boolean;
    }[]
  >([]);
  const [listBlessing, setListBlessing] = useState<
    {
      id?: string;
      name?: string;
      content?: string;
      createdAt?: string;
    }[]
  >([]);

  useEffect(() => {
    fetch('/api/confirmation', { cache: 'no-store' })
      .then((response) => response.json())
      .then((data) => {
        setListUser(data.users);
      });

    fetch('/api/blessing', { cache: 'no-store' })
      .then((response) => response.json())
      .then((data) => {
        setListBlessing(data.blessings);
      });
  }, []);

  // Return the JSX code for the UI
  return (
    <>
      <h1>Danh sách xác nhận</h1>
      <table
        // make a nice table with tailwind css
        // https://tailwindcss.com/docs/tables
        // className='table-auto border-collapse border border-green-800'
        className='table-auto border-collapse overflow-y-auto border border-green-800'
      >
        <thead>
          <tr
            // make a nice table
            // https://tailwindcss.com/docs/tables
            // className='bg-green-500 text-white'
            className='bg-green-200 text-white'
          >
            <th className='px-4'>No</th>
            <th className='px-4'>Name</th>
            <th className='px-4'>Phone</th>
            <th className='px-4'>Attendence</th>
            <th className='px-4'>Confirmation</th>
            <th className='px-4'>Number of Guests</th>
            <th className='px-4'>Created At</th>
          </tr>
        </thead>
        <tbody>
          {listUser.map((user, index) => (
            <tr key={index}>
              <td className='px-4'>{index + 1}</td>
              <td className='px-4'>{user.name}</td>
              <td className='px-4'>{user.phone}</td>
              <td className='px-4'>
                {user.isMale ? 'Nhà trai ' : ''}{' '}
                {user.isFemale ? 'Nhà gái' : ''}
              </td>
              <td className='px-4'>
                {user.confirmChoice === 1
                  ? 'Có'
                  : user.confirmChoice === 2
                    ? 'Không'
                    : 'Không biết'}
              </td>
              <td className='px-4'>{user.numberOfGuests}</td>
              <td className='px-4'>{user.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1>Danh sách blessing</h1>
      <table
        // make a nice table with tailwind css
        // https://tailwindcss.com/docs/tables
        // className='table-auto border-collapse border border-green-800'
        className='table-auto border-collapse overflow-y-auto border border-green-800'
      >
        <thead>
          <tr
            // make a nice table
            // https://tailwindcss.com/docs/tables
            // className='bg-green-500 text-white'
            className='bg-rose-200 text-white'
          >
            <th className='px-4'>No</th>
            <th className='px-4'>Name</th>
            <th className='px-4'>Content</th>
            <th className='px-4'>Created At</th>
          </tr>
        </thead>
        <tbody>
          {listBlessing.map((blessing, index) => (
            <tr key={index}>
              <td className='px-4'>{index + 1}</td>
              <td className='px-4'>{blessing.name}</td>
              <td className='px-4'>{blessing.content}</td>
              <td className='px-4'>{blessing.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

// Export the component as the default export
export default List;
