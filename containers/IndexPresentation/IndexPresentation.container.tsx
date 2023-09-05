import { ButtonComponent } from '@/components/Button.component';
import { IconDownload } from '@tabler/icons-react';

export function IndexPresentationContainer() {

  return (
    <section className='z-10 w-[100vw] h-[100vh] '>
      <div className='
      flex flex-col items-start h-full justify-center w-[100vw]
      min-[673px]:pl-16 pl-5
      '>
        <span className='
          text-normalFontColor mb-3
          min-[1023px]:text-6xl min-[673px]:text-5xl text-4xl
        '>
          I'm a
        </span>
        <span className='
          text-titleFontColor
          min-[1023px]:text-9xl min-[673px]:text-8xl text-6xl
        '>
          FULL STACK
        </span>
        <span className='
          text-titleFontColor
          min-[1023px]:text-9xl min-[673px]:text-8xl text-6xl
        '>
          DEVELOPER
          <span className='
            text-primaryColor2
            min-[1023px]:text-9xl min-[673px]:text-8xl text-6xl
          '>
            .
          </span>
        </span>
        <div className='text-xl mt-5'>
        <ButtonComponent text='Download my CV' icon={<IconDownload />}/>
        </div>
      </div>
    </section>
  )
}