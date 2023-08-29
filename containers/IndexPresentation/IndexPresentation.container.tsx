import { ButtonComponent } from '@/components/Button.component';

export function IndexPresentationContainer() {

  return (
    <section className='z-10 w-[100vw] h-[100vh] '>
      <div className='flex flex-col items-start justify-center h-full pl-16'>
        <span className='text-normalFontColor text-6xl mb-3'>I'm a</span>
        <span className='text-titleFontColor text-9xl'>FULL STACK</span>
        <span className='text-titleFontColor text-9xl'>DEVELOPER<span className='text-primaryColor2 text-9xl'>.</span></span>
        <div className='text-xl mt-5'>
        <ButtonComponent text='Contact with me'/>
        </div>
      </div>
    </section>
  )
}