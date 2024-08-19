import  Sidebar  from './components/Sidebar';
import  Footer  from './components/Footer';
import  Header  from './components/Header';
import ListenMusic from './components/ListenMusic';
import MadeFor from './components/MadeFor';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
         <Header />
          <ListenMusic />
            <MadeFor />
        </main>
      </div>
    <Footer/>
    </div>
  );
}
