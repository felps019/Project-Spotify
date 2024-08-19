import React from 'react';
import Image from 'next/image';

const ListDaily = () => {
  return (
    <>
      <a
        href=""
        className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10"
      >
        <Image
          src="/djonga.jpg"
          className="w-full"
          width={150}
          height={150}
          alt="O menino queria ser Deus"
        />
        <strong className="font-semibold">Daily Mix 1</strong>
        <span className="text-sm text-zinc-400">Djonga</span>
      </a>

      <a
        href=""
        className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10"
      >
        <Image
          src="/mcig.jpg"
          className="w-full"
          width={150}
          height={150}
          alt="Todo Mundo odeia o IG, Mc IG"
        />
        <strong className="font-semibold">Daily Mix 2</strong>
        <span className="text-sm text-zinc-400">
          Todo Mundo odeia o IG, Mc IG
        </span>
      </a>

      <a
        href=""
        className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10"
      >
        <Image
          src="/mcph.jpeg"
          className="w-full"
          width={150}
          height={150}
          alt="O cara do momento, Mc PH"
        />
        <strong className="font-semibold">Daily Mix 3</strong>
        <span className="text-sm text-zinc-400">O cara do momento, Mc PH</span>
      </a>

      <a
        href=""
        className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10"
      >
        <Image
          src="/album-kyan.jpeg"
          className="w-full"
          width={150}
          height={150}
          alt="Quebrada Inteligente, Kyan"
        />
        <strong className="font-semibold">Daily Mix 4</strong>
        <span className="text-sm text-zinc-400">
          Quebrada Inteligente, Kyan
        </span>
      </a>

      <a
        href=""
        className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10"
      >
        <Image
          src="/mckevin.jpeg"
          className="w-full"
          width={150}
          height={150}
          alt="Fênix, MC Kevin"
        />
        <strong className="font-semibold">Daily Mix 5</strong>
        <span className="text-sm text-zinc-400">Fênix, MC Kevin</span>
      </a>

      <a
        href=""
        className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10"
      >
        <Image
          src="/kayblack.jpeg"
          className="w-full"
          width={150}
          height={150}
          alt="Contradições, Kayblack"
        />
        <strong className="font-semibold">Daily Mix 6</strong>
        <span className="text-sm text-zinc-400">Melhor só, Kayblack</span>
      </a>

      <a
        href=""
        className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10"
      >
        <Image
          src="/pumpjl.jpg"
          className="w-full"
          width={150}
          height={150}
          alt="Naturalidade"
        />
        <strong className="font-semibold">Daily Mix 7</strong>
        <span className="text-sm text-zinc-400">Naturalidade,Pumpjl</span>
      </a>
    </>
  );
};

export default ListDaily;
