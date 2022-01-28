import React, { useState } from 'react';
import { FaToggleOff, FaToggleOn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ReactComponent as ContactImg } from '../assets/contact.svg';

const Contact = ({ showContactHandler }) => {
  const [email, setEmail] = useState(true);
  const [wa, setWa] = useState(false);
  const [formData, setFormData] = useState('');

  return (
    <div className='py-6 px-4 h-screen bg-neutral-200 flex flex-col'>
      <header className='mb-4'>
        <h1 className='text-4xl font-bold'>Contact Me</h1>
      </header>

      <main className='flex flex-col'>
        <ContactImg
          className='self-center'
          style={{ width: '240px', height: '240px' }}
        />
        <form className='mb-4'>
          <div className='flex items-center justify-between'>
            {' '}
            <label htmlFor='message'>Send Me a Message</label>{' '}
            {email && (
              <button
                onClick={() => {
                  setWa(true);
                  setEmail(false);
                }}
              >
                <FaToggleOff className='text-2xl text-blue-600' />
              </button>
            )}
            {wa && (
              <button
                onClick={() => {
                  setWa(false);
                  setEmail(true);
                }}
              >
                {' '}
                <FaToggleOn className='text-2xl text-green-600' />
              </button>
            )}
          </div>

          <textarea
            className='w-full rounded shadow-md p-2 my-4 outline-none focus:outline-2 focus:outline-neutral-400'
            rows='8'
            placeholder='Hai'
            value={formData}
            onChange={(e) => setFormData(e.target.value)}
          />
          {email && (
            <a
              href={`mailto:althafdemiandra@gmail.com?Subject=Hai Althaf nice to meet you&body=${formData}`}
              className='bg-blue-400 text-blue-50 font-semibold px-2 py-1 rounded-lg block text-center'
            >
              Send to Email
            </a>
          )}
          {wa && (
            <a
              href={`https://wa.me/89660606763?text=${formData}`}
              target='_blank'
              rel='noreferrer'
              className='bg-green-400 text-blue-50 font-semibold px-2 py-1 rounded-lg block text-center'
            >
              Send to Whatsapp
            </a>
          )}
        </form>
        <Link
          className='self-end py-1 px-2 hover:bg-neutral-300 p-2 duration-200 hover:rounded hover:shadow'
          to='/'
        >
          Home
        </Link>
      </main>
    </div>
  );
};

export default Contact;
