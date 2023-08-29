import Image from 'next/image';
import { basePath } from '../config/config';
import { ButtonComponent } from '@/components/Button.component';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IconMenu2 } from '@tabler/icons-react'

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
    <section className='fixed w-full z-50 bg-backgroundColor'>
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
        <IconMenu2 color='var(--primaryColor2)' className='cursor-pointer' size={34}/>
        <div className='absolute right-2'>
          <ButtonComponent text='CONTACT' withPadding={false} />
        </div>
      </div>
      <div className={`
        ${scrolled > 0 ? 'shadow-sm shadow-shadowColor py-1' : 'py-3'}
        flex flex-row w-full items-center px-10  justify-between ease-in-out duration-300
        
      `}>
        <Image
          src={`${basePath}images/logo.png`}
          width={50}
          height={50}
          alt="Logo"
          className={`${scrolled > 0 ? 'w-[40px] h-[40px]' : 'w-[50px] h-[50px]'} ease-in-out duration-300`}
        />
        {/* CONTENEDOR ENLACES Y BOTÓN */}
        <div className='flex flex-row items-center gap-20'>
          {/* ENLACES */}
          <div className='flex flex-row items-center font-medium gap-x-20 justify-end'>
            <Link href={'/'}>
              <span className='cursor-pointer ease-in-out duration-500 hover:text-primaryColor2 m-0 p-0'>
                HOME
              </span>
            </Link>
            <Link href={'/'}>
              <span className='cursor-pointer ease-in-out duration-500 hover:text-primaryColor2'>
                ABOUT ME
              </span>
            </Link>
            <Link href={'/'}>
              <span className='cursor-pointer ease-in-out duration-500 hover:text-primaryColor2'>
                PORTFOLIO
              </span>
            </Link>
            <Link href={'/'}>
              <span className='cursor-pointer ease-in-out duration-500 hover:text-primaryColor2'>
                EXPERIENCE
              </span>
            </Link>
            <Link href={'/'}>
              <span className='cursor-pointer ease-in-out duration-500 hover:text-primaryColor2'>
                STUDIES
              </span>
            </Link>
            <Link href={'/'}>
              <span className='cursor-pointer ease-in-out duration-500 hover:text-primaryColor2'>
                SERVICES
              </span>
            </Link>
          </div>
          <div>
            <ButtonComponent text='CONTACT' withPadding={scrolled > 0 ? false : true} />
          </div>
        </div>
      </div>
    </section>
  )
}