import { basePath } from '../config/config';
import Image from 'next/image';
import Link from 'next/link';

export function HardSkillComponent({ key = 0, image = '', text = ''}) {

  return (
    <div
      key={key}
      className='z-10 relative flex flex-col items-center gap-1 text-titleFontColor hover:brightness-[1.1] hover:text-primaryColor2 ease-in-out duration-200'
    >
      <Image
        src={`${basePath}${image}`}
        width={80}
        height={80}
        alt="Logo"
        className='min-[768px]:w-[80px] w-[70px] min-[768px]:h-[80px] h-[70px] relative z-10'
      />
      <span className='min-[768px]:text-xl text-lg'>{text}</span>
    </div>
  )
}