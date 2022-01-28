import React from 'react';

const Footer = () => {
  const todayYear = new Date().getFullYear();

  return (
    <div className='mt-auto pb-2 text-sm text-center'>
      Copyright Althaf Demiandra {todayYear}
    </div>
  );
};

export default Footer;
