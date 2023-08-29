import style from './Ornaments.module.css';

export function OrnamentsContainer() {

  return (
    <section className='w-[100vw] overflow-x-hidden'>
      <span className={`
        ${style.bubble_animated_index_presentation_first}
        absolute rounded-full w-[10vw] h-[10vw] bg-gradient-to-r from-primaryColor1 to-primaryColor2 right-[-2%] top-[15%] leading-none opacity-50 origin-center -rotate-[20deg]
      `}></span>
      <span className={`
        ${style.square_animated_index_presentation_first}
        absolute w-[10vw] h-[10vw] bg-gradient-to-r from-primaryColor1 to-primaryColor2 left-[-4%] bottom-[-2%] leading-none opacity-50 origin-center -rotate-[20deg]
      `}></span>
      <span className='absolute w-[30vw] h-[30vw] border-8 border-primaryColor2 right-[-10%] bottom-[-20%] leading-none origin-center -rotate-[40deg]'></span>
    </section>
  )
}