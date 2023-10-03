import { basePath } from '../config/config';
import Image from 'next/image';
import Link from 'next/link';

export function HardSkillComponent({ key = 0, url = '', image = '', text = '' }) {

  return (
    <Link
      key={key}
      className='flex flex-col items-center gap-1 text-titleFontColor hover:brightness-[0.9] hover:scale-[97%] hover:text-primaryColor2 ease-in-out duration-200'
      href={url}
      target='_blank'
    >
      <Image
        src={`${basePath}${image}`}
        width={80}
        height={80}
        alt="Logo"
        className='w-[80px] h-[80px]'
      />
      <span className='text-xl'>{text}</span>
    </Link>
  )
}