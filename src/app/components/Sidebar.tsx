import { HomeIcon, Search, Library } from "lucide-react"
import Playlist from './Playlist';

const Sidebar = () => {
  return (
    <>
  <aside className="w-72 bg-zinc-950 p-6">
    {/* space-y-4 -> coloca um espacamento entre os elementos */}
    <div className='flex items-center gap-2'>
    <div className='w-3 h-3 bg-red-500 rounded-full'/>
    <div className='w-3 h-3 bg-yellow-500 rounded-full'/>
    <div className='w-3 h-3 bg-green-500 rounded-full'/>
    </div>
    <nav className='space-y-5 mt-10'> 
    <a href="" className='flex items-center gap-2 text-sm font-bold text-zinc-200 '>
      <HomeIcon />
      Home</a>
    <a href="" className='flex items-center gap-2 text-sm font-bold text-zinc-200 '>
      <Search />
      Search</a>
    <a href="" className='flex items-center gap-2 text-sm font-bold text-zinc-200 '>
      <Library />
      Your Library</a>
    </nav>
  <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
    <Playlist Text={'Hot Hits Brasil'}/>
    <Playlist Text={'Melhores Sertanejos 2024'}/>
    <Playlist Text={'Melhores funks 2024'}/>
    <Playlist Text={'My Playlist'}/>
    <Playlist Text={'Top Brasil'}/>
    <Playlist Text={'Rock 2024'}/>
    <Playlist Text={'Rap 2024'}/>
    <Playlist Text={'Mais tocados'}/>
    <Playlist Text={'Aniversario'}/>
  </nav>
    </aside>
    </>
  );
};
export default Sidebar;