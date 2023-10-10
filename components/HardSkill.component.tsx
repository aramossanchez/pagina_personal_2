import { basePath } from '../config/config';
import Image from 'next/image';
import Link from 'next/link';

export function HardSkillComponent({ key = 0, url = '', image = '', text = '', open = '', setOpen = (arg:string) => {} }) {

  return (
    <div
      className='z-10 cursor-pointer relative flex flex-col items-center gap-1 text-titleFontColor hover:brightness-[1.1] hover:text-primaryColor2 ease-in-out duration-200'
      onMouseEnter={() => setOpen(text)}
      onMouseLeave={() => setOpen('')}
    >
      <div className={`${open === text ? 'flex' : 'hidden'} flex-col items-center z-50 bg-backgroundColor cursor-auto absolute top-[-5.7em] w-[200px] text-sm bg-black border-[1px] border-primaryColor2 text-white px-2 pt-1 pb-3`}>
        <span className='text-center'>Do you want to visite {text} official page?</span>
        <div className='flex flex-row items-center justify-center gap-3 mt-2 w-full'>
          <Link
            className='bg-gradient-to-r from-primaryColor2 to-primaryColor1 px-2 hover:brightness-125 ease-in-out duration-300 rounded-sm'
            key={key}
            href={url}
            target='_blank'
          >
            Visit page
          </Link>
        </div>
      </div>
      <Image
        src={`${basePath}${image}`}
        width={80}
        height={80}
        alt="Logo"
        className='w-[80px] h-[80px] relative z-10'
      />
      <span className='text-xl'>{text}</span>
    </div>
  )
}