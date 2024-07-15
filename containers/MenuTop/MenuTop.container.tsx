import Image from 'next/image';
import { basePath } from '../../config/config';
import { ButtonComponent } from '@/components/Button.component';
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
    <section className={`${scrolled > 0 ? 'bg-backgroundColor' : 'bg-transparent'} fixed w-[100vw] z-50 ease-in-out duration-300`}>
      <div className={`${menuOpen ? '' : 'shadow-custom'}
        flex-row justify-center py-2 fixed top-0 w-[100vw] bg-backgroundColor z-50
        min-[1023px]:hidden flex
      `}>
        <Image
          src={`${basePath}images/logo.png`}
          width={30}
          height={30}
          alt="Logo"
          className='w-[30px] h-[30px] absolute left-2'
        />
        {menuOpen ?
            <IconX className={`${style.menu_top_close} cursor-pointer`} onClick={() => setMenuOpen(false)} color='var(--primaryColor2)' size={30} />
          :
            <IconMenu2 className={`${style.menu_top_open} cursor-pointer`} onClick={() => setMenuOpen(true)} color='var(--primaryColor2)' size={30} />
        }
        <a href={`${basePath}#Contact`}>
          <div className='absolute right-2'>
            <ButtonComponent text='CONTACTA' withPadding={false} />
          </div>
        </a>
      </div>
      <div className={`
        flex flex-row items-center px-10 justify-between
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
        <div className='flex flex-row items-center
        min-[1280px]:gap-20 min-[1023px]:gap-10'>
          {/* ENLACES */}
          <div className={`
            ${menuOpen ? 'gap-10' : 'gap-0'}
            min-[1023px]:flex-row flex-col
            min-[1280px]:gap-x-20 min-[1023px]:gap-x-10 gap-x-0
            min-[1023px]:justify-end justify-start
            min-[1023px]:text-normalFontColor text-titleFontColor            
            flex items-center font-medium
          `}>
            <a href={`${basePath}#Home`} onClick={() => setMenuOpen(false)}>
              <span className='cursor-pointer hover:text-primaryColor2 ease-in-out min-[1023px]:duration-300 duration-0'>
                INICIO
              </span>
            </a>
            <a href={`${basePath}#Experience`} onClick={() => setMenuOpen(false)}>
              <span className='cursor-pointer hover:text-primaryColor2 ease-in-out min-[1023px]:duration-300 duration-0'>
                EXPERIENCIA
              </span>
            </a>
            {/* <a href={`${basePath}#Portfolio`} onClick={() => setMenuOpen(false)}>
              <span className='cursor-pointer hover:text-primaryColor2 ease-in-out min-[1023px]:duration-300 duration-0'>
                PORTFOLIO
              </span>
            </a> */}
            <a href={`${basePath}#About`} onClick={() => setMenuOpen(false)}>
              <span className='cursor-pointer hover:text-primaryColor2 ease-in-out min-[1023px]:duration-300 duration-0'>
                SOBRE MÍ
              </span>
            </a>
            <a href={`${basePath}#Skills`} onClick={() => setMenuOpen(false)}>
              <span className='cursor-pointer hover:text-primaryColor2 ease-in-out min-[1023px]:duration-300 duration-0'>
                SKILLS
              </span>
            </a>
          </div>
          <a href={`${basePath}#Contact`} onClick={() => setMenuOpen(false)}>
            <div className='min-[1023px]:block hidden'>
              <ButtonComponent text='CONTACTA' withPadding={scrolled > 0 ? false : true} />
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}