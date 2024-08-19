import React from 'react'
import Image from 'next/image';
import Button from './Button';

const ListMusic = () => {
  return (
    <>
    <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
        <Image src="/djonga.jpg" width={90} height={90} alt="O menino queria ser Deus" />
        <strong>O menino queria ser Deus</strong>
        <Button />
    </a>

    <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
    <Image src="/queiroz.jpeg" width={90} height={90} alt="O menino queria ser Deus" />
    <strong>Ô Queiroz - Grupo Revelação</strong>
    <Button />
</a>

<a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
    <Image src="/yunk.jpeg" width={90} height={90} alt="O menino queria ser Deus" />
    <strong>Leans Pt.2</strong>
    <Button />
</a>

<a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
    <Image src="/sabotage.jpeg" width={90} height={90} alt="O menino queria ser Deus" />
    <strong>Rap é compromisso</strong>
    <Button />
</a>

<a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
    <Image src="/racionais.jpeg" width={90} height={90} alt="O menino queria ser Deus" />
    <strong>Nada como um dia após o outro</strong>
    <Button />
</a>

<a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
    <Image src="/kyan.jpeg" width={90} height={90} alt="O menino queria ser Deus" />
    <strong>BRAZIL</strong>
    <Button />
</a>

</>
  )
}

export default ListMusic;
