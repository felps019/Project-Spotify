import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react';

  const Header = () => {
    return (
      <>
    <div className='flex items-center gap-4'>
  <button className='rounded-full bg-black/40 p-1'>
    <ChevronLeft />
  </button>
  <button className='rounded-full bg-black/40 p-1'>
    <ChevronRight />
  </button>
</div>
<h1 className='font-semibold text-4xl mt-10'>Good Afternoon</h1>
      </>
    );
  };
  
export default Header;
