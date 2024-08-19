import React from 'react'
import Image from 'next/image';
import  ListMusic  from './ListMusic';

const ListenMusic = () => {
  return (
    <>
    <div className='grid grid-cols-3 gap-4 mt-4'>
            <ListMusic />
      </div>
    </>
  )
}

export default ListenMusic
