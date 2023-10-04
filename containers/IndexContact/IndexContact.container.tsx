import { ButtonComponent } from '@/components/Button.component';
import { InputComponent } from '@/components/Input.component';
import { IconBrandInstagram, IconBrandLinkedin, IconBrandX } from '@tabler/icons-react';
import { Montserrat } from 'next/font/google';

const Montse = Montserrat({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export function IndexContactContainer() {

  return (
    <section className='
      z-10 w-[100vw] relative overflow-x-hidden flex flex-col justify-center items-center h-full mt-[22vh] pt-10 pb-10
    '>
      <div className='w-full flex-row mb-16 justify-center flex'>
        <span className={`${Montse.className}
          text-titleFontColor
          min:[360px]:text-6xl text-5xl
        `}>
          Contact
        </span>
      </div>
      <div className='
        flex  gap-10
        min-[1023px]:flex-row flex-col
        min-[1023px]:items-start items-center
      '>
        <div className='w-6/12'>
          <div>
            <span className='text-2xl text-titleFontColor'>Drop me a message</span>
            <p>Contacta conmigo en cualquiera de mis redes sociales, o mándame un mensaje directamente.</p>
          </div>
          <div className='flex flex-col items-start gap-6'>
            <ButtonComponent withPadding={false} text='Linkedin' icon={<IconBrandLinkedin />} />
            <ButtonComponent withPadding={false} text='Twitter' icon={<IconBrandX />} />
            <ButtonComponent withPadding={false} text='Instagram' icon={<IconBrandInstagram />} />
          </div>
        </div>
        <div className='w-6/12'>
          <form action="" className='flex flex-col items-start gap-5 w-[300px]'>
            <InputComponent />
            <InputComponent />            
            <textarea name="" id="" cols="30" rows="10" className='w-full'></textarea>
            <button></button>
          </form>
        </div>
      </div>
    </section>
  )
}