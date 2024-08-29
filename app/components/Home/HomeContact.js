import Link from 'next/link';
import React from 'react';



const HomeContact = () => {
  return (
    <section className='h-fit'>
      <div className="heading w-full flex flex-col">
        <h4 className='uppercase text-ag-ash'>ag / 2024</h4>
        <div className="w-full flex items-center justify-between">
          <h2 className='uppercase'>latest</h2>
          <Link href='/contact font-lato'>see all</Link>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;