import { ButtonComponent } from '@/components/Button.component';
import { IconDownload } from '@tabler/icons-react';
import Link from 'next/link';

export function IndexPresentationContainer() {

  return (
    <section id='Home' className='z-10 w-[100vw] h-[100vh] '>
      <div className='
      flex flex-col items-start h-full justify-center w-[100vw]
      min-[673px]:pl-16 pl-5
      '>
        <span className='
          text-normalFontColor mb-1
          min-[1023px]:text-6xl min-[673px]:text-5xl min-[366px]:text-4xl text-3xl
        '>
          I'm a
        </span>
        <span className='
          text-titleFontColor
          min-[1023px]:text-9xl min-[673px]:text-8xl min-[366px]:text-6xl text-5xl
        '>
          FULL STACK
        </span>
        <span className='
          text-titleFontColor
          min-[1023px]:text-9xl min-[673px]:text-8xl min-[366px]:text-6xl text-5xl
        '>
          DEVELOPER
          <span className='
            text-primaryColor2
            min-[1023px]:text-9xl min-[673px]:text-8xl min-[366px]:text-6xl text-5xl
          '>
            .
          </span>
        </span>
        <div className='text-xl mt-5'>
          <Link href={'https://drive.google.com/file/d/1HjOEI5h0eapkYHm0vgba8I2JVEZ-5Hdl/view?usp=drive_link'} target='_blank'>
            <ButtonComponent text='Download my CV' icon={<IconDownload />} />
          </Link>
        </div>
      </div>
    </section>
  )
}