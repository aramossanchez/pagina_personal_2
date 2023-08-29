import Image from 'next/image';
import { basePath } from '../../config/config';
import { ButtonComponent } from '@/components/Button.component';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IconMenu2, IconX } from '@tabler/icons-react';
import style from './MenuTop.module.css'

export function MenuTopContainer() {

  const [scrolled, setScrolled] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={`${scrolled > 0 ? 'bg-backgroundColor' : 'bg-transparent'} fixed w-full z-50 ease-in-out duration-300`}>
      <div className='
        flex-row justify-center py-2
        min-[1023px]:hidden flex
      '>
        <Image
          src={`${basePath}images/logo.png`}
          width={30}
          height={30}
          alt="Logo"
          className='w-[30px] h-[30px] absolute left-2'
        />
        {menuOpen ?
          <IconX onClick={() => setMenuOpen(false)} color='var(--primaryColor2)' size={30} className='cursor-pointer'/>
          :
          <IconMenu2 onClick={() => setMenuOpen(true)} color='var(--primaryColor2)' size={30} className='cursor-pointer' />
        }
        <div className='absolute right-2'>
          <ButtonComponent text='CONTACT' withPadding={false} />
        </div>
      </div>
      <div className={`
        flex flex-row w-full items-center px-10 justify-between
        ${scrolled > 0 ? 'py-1' : 'py-3'}
        ${scrolled > 0 ? style.menu_top_down : 'py-2 ease-in-out duration-300'}
        ${menuOpen ? style.menu_top_down : style.menu_top_down_closed}
        ${menuOpen ? '' : ''}
        ${scrolled > 0 ? ' min-[1023px]:bg-backgroundColor bg-slate-900' : 'min-[1023px]:bg-transparent bg-slate-900'}
        min-[1023px]:flex-row flex-col
        min-[1023px]:rounded-none rounded-lg
      `}>
        <Image
          src={`${basePath}images/logo.png`}
          width={50}
          height={50}
          alt="Logo"
          className={`
            ${scrolled > 0 ? 'w-[40px] h-[40px]' : 'w-[50px] h-[50px]'}
            ease-in-out duration-300
            min-[1023px]:block hidden
          `}
        />
        {/* CONTENEDOR ENLACES Y BOTÓN */}
        <div className='flex flex-row items-center gap-20 '>
          {/* ENLACES */}
          <div className={`
            ${menuOpen ? 'gap-10' : 'gap-0'}
            min-[1023px]:flex-row flex-col
            min-[1023px]:gap-x-20 gap-x-0
            min-[1023px]:justify-end justify-start
            min-[1023px]:text-normalFontColor text-titleFontColor
            flex items-center font-medium
          `}>
            <Link href={'/'}>
              <span className='cursor-pointer hover:text-primaryColor2 ease-in-out min-[1023px]:duration-500 duration-0'>
                HOME
              </span>
            </Link>
            <Link href={'/'}>
              <span className='cursor-pointer hover:text-primaryColor2 ease-in-out min-[1023px]:duration-500 duration-0'>
                ABOUT ME
              </span>
            </Link>
            <Link href={'/'}>
              <span className='cursor-pointer hover:text-primaryColor2 ease-in-out min-[1023px]:duration-500 duration-0'>
                SKILLS
              </span>
            </Link>
            <Link href={'/'}>
              <span className='cursor-pointer hover:text-primaryColor2 ease-in-out min-[1023px]:duration-500 duration-0'>
                EXPERIENCE
              </span>
            </Link>
            <Link href={'/'}>
              <span className='cursor-pointer hover:text-primaryColor2 ease-in-out min-[1023px]:duration-500 duration-0'>
                STUDIES
              </span>
            </Link>
            <Link href={'/'}>
              <span className='cursor-pointer hover:text-primaryColor2 ease-in-out min-[1023px]:duration-500 duration-0'>
                PORTFOLIO
              </span>
            </Link>
          </div>
          <div className='min-[1023px]:block hidden'>
            <ButtonComponent text='CONTACT' withPadding={scrolled > 0 ? false : true} />
          </div>
        </div>
      </div>
    </section>
  )
}