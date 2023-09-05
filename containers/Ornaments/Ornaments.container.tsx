import style from './Ornaments.module.css';

export function OrnamentsContainer() {

  return (
    <>
      <span className={`
        ${style.bubble_animated_index_presentation_first}
        min-[1023px]:w-[10vw] w-[120px] min-[1023px]:h-[10vw] h-[120px]
        absolute rounded-full bg-gradient-to-r from-primaryColor1 to-primaryColor2 right-[-2%] top-[15vh] leading-none opacity-50 origin-center -rotate-[20deg]
      `}></span>
      <span className={`
        ${style.square_animated_index_presentation_first}
        min-[1023px]:w-[10vw] w-[100px] min-[1023px]:h-[10vw] h-[100px]
        absolute bg-gradient-to-r from-primaryColor1 to-primaryColor2 left-[-4%] top-[95vh] leading-none opacity-50 origin-center -rotate-[20deg]
      `}></span>
      <span className='absolute w-[20vw] h-[20vw] border-8 border-primaryColor2 right-[-10%] top-[90vh] leading-none origin-center -rotate-[40deg]'></span>
    </>
  )
}