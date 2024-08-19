import { Heart, Shuffle, SkipBack, Play, SkipForward, Repeat, Mic2, MonitorSmartphone, ListMusic, Volume2, Maximize2 } from "lucide-react";
import Image from 'next/image';

const Footer = () => {
  return (    
  <>
  <footer className="bg-zinc-900 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
    <div className='flex items-center gap-3'>
      <Image src="/queiroz.jpeg" width={56} height={56} alt="O menino queria ser Deus" />
      <div className='flex flex-col gap-0.5'>
        <strong className='font-normal'>Ô Queiroz - Ao Vivo</strong>
        <span className='text-xs text-zinc-400'>Grupo Revelação</span>
      </div>
      <div>
        <Heart/>
      </div>
    </div>

    <div className='flex flex-col items-center gap-2'>
    <div className='flex items-center gap-6'>
      <Shuffle size={20} className='text-zinc-200'/>
      <SkipBack size={20} className='text-zinc-200'/>

      <button className='w-8 h-8 flex items-center justify-center pl-0.5 rounded-full bg-white text-black'>
            <Play size={20} fill='bg-black' className='text-zinc-200'/>
      </button>

      <SkipForward size={20} className='text-zinc-200'/>
      <Repeat size={20} className='text-zinc-200'/>
    </div>
    
    <div className='flex items-center gap-2'>
      <span className='text-xs text-zinc-400'>0:52</span>
      <div className='h-1 rounded-full w-96 bg-zinc-600 '>
        <div className='bg-zinc-200 w-40 h-1 rounded-full '>
        </div>
      </div>
      <span className='text-xs text-zinc-400'> 2:55</span>
    </div>
  </div>
  <div className='flex items-center gap-4'>
    <Mic2 size={20}/>
    <ListMusic size={20}/>
    <MonitorSmartphone size={20}/>
    <div className='flex items-center gap-2'>
    <Volume2 size={20} />
    <div className='h-1 rounded-full w-24 bg-zinc-600 '>
        <div className='bg-zinc-200 w-10 h-1 rounded-full '>
        </div>
      </div>
    </div>
    <Maximize2 size={20} />
  </div>
  </footer>
  </>
  );
};
export default Footer;