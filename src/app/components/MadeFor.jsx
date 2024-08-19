import React from 'react';
import Image from 'next/image';
import ListDaily from '@/app/components/ListDaily';

const MadeFor = () => {
  return (
    <>
      <h2 className="font-semibold text-2xl mt-10">Made for Felps Henrique</h2>

      <div className="grid grid-cols-7 gap-4 mt-4">
        <ListDaily />
      </div>
    </>
  );
};

export default MadeFor;
