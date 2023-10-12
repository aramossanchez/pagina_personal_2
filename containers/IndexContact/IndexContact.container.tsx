import { ButtonComponent } from '@/components/Button.component';
import { InputComponent } from '@/components/Input.component';
import { TextareaComponent } from '@/components/TextArea/Textarea.component';
import { TitleComponent } from '@/components/Title.component';
import { IconBrandInstagram, IconBrandLinkedin, IconBrandX } from '@tabler/icons-react';
import style from './IndexContact.module.css';
import Link from 'next/link';
import { useState } from 'react';

export function IndexContactContainer() {

  const [emailSubject, setEmailSubject] = useState();
  const [emailBody, setEmailBody] = useState();

  return (
    <section id='Contact' className='
      z-10 w-[100vw] relative overflow-x-hidden flex flex-col justify-center items-center h-full mt-[22vh] pt-10 pb-10
    '>
      <div className='w-full flex-row mb-16 justify-center flex'>
        <TitleComponent text='Contact' />
      </div>
      <div className='
        flex
        min-[1023px]:flex-row flex-col
        min-[1023px]:w-auto w-[90%]
        min-[1023px]:gap-10 gap-20
      '>
        <div className='
          flex flex-col gap-9
          min-[1023px]:w-6/12 w-full
          min-[1023px]:items-start items-center
        '>
          <div className='flex flex-col gap-3'>
            <span className='
              text-2xl text-titleFontColor
              min-[1023px]:text-left text-center
            '>
              Look at my social networks
            </span>
            <p className='
              min-[1023px]:text-left text-center
            '>Cotillea mis aficiones e inquietudes en cualquiera de mis redes sociales.</p>
          </div>
          <div className='flex flex-row items-start gap-6 flex-wrap justify-center'>
            <Link href={'https://es.linkedin.com/in/armando-ramos-s%C3%A1nchez-0b678b102'} target='_blank'>
              <ButtonComponent withPadding={false} text='Linkedin' icon={<IconBrandLinkedin />} />
            </Link>
            <Link href={'https://twitter.com/aramos_dev'} target='_blank'>
              <ButtonComponent withPadding={false} text='Twitter' icon={<IconBrandX />} />
            </Link>
            <Link href={'https://www.instagram.com/armandohyeah/'} target='_blank'>
              <ButtonComponent withPadding={false} text='Instagram' icon={<IconBrandInstagram />} />
            </Link>
          </div>
        </div>
        <div className='
          flex flex-col gap-9
          min-[1023px]:w-6/12 w-full
          min-[1023px]:items-start items-center
        '>
          <div className='flex flex-col gap-3'>
            <span className='
              text-2xl text-titleFontColor
              min-[1023px]:text-left text-center
            '>
              Drop me a message
            </span>
            <p className='
              min-[1023px]:text-left text-center
            '>Mándame un correo electrónico a través de este formulario.</p>
          </div>
          <div className={`${style.form} flex flex-col items-start gap-5 w-[350px] p-5 bg-gradient-to-r from-primaryColor2 to-primaryColor1 rounded-lg`}>
            <InputComponent placeholder='Name' />
            <TextareaComponent placeholder='Message' />
            <Link href={`mailto:armandoramossanchez@gmail.com?subject=${emailSubject}&body=${emailBody}`} >
              <span className='px-3 py-1 text-titleFontColor font-medium bg-backgroundColor rounded-lg cursor-pointer hover:brightness-125 ease-in-out duration-300 flex flex-row items-center gap-2'>Send</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}