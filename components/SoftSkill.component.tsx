import { useState } from 'react';
import { basePath } from '../config/config';
import Image from 'next/image';

export function SoftSkillComponent({ key = 0, image = '', text = '', label = '' }) {

  const [hover, setHover] = useState(false);

  return (
    <div
      key={key}
      className='relative cursor-help w-auto h-auto flex flex-col items-center justify-center gap-1 text-titleFontColor hover:brightness-[0.9] hover:text-primaryColor2 ease-in-out duration-200'
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={`${hover ? 'block' : 'hidden'} absolute top-[-4em] w-[200px] text-sm bg-black border-[1px] border-primaryColor2 text-white px-2 py-1`}>
        <span className=''>{label}</span>
      </div>
      <Image
        src={`${basePath}${image}`}
        width={80}
        height={80}
        alt="Logo"
        className='min-[768px]:w-[80px] w-[50px] min-[768px]:h-[80px] h-[50px]'
      />
      <span className='min-[768px]:text-xl text-lg'>{text}</span>
    </div>
  )
}