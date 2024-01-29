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
      <span className={`
        ${style.triangle_animated_index_presentation_first}
        w-[20vw] h-[20vw] absolute bg-gradient-to-r from-primaryColor1 to-primaryColor2 left-[-6%] top-[150vh] leading-none opacity-50 origin-center -rotate-[20deg]
      `}></span>
      <span className={`
        ${style.bubble_animated_index_presentation_second}
        w-[10vw] h-[10vw] rounded-full absolute border-8 border-primaryColor2 right-[-3%] top-[250vh] leading-none origin-center -rotate-[20deg]
      `}></span>
      <span className={`
        ${style.square_animated_index_presentation_second}
        w-[20vw] h-[20vw] absolute border-8 border-primaryColor2 left-[-10%] top-[350vh] leading-none origin-center -rotate-[20deg]
      `}></span>
      <span className={`
        ${style.bubble_animated_index_presentation_third}
        w-[10vw] h-[10vw] rounded-full absolute bg-gradient-to-r from-primaryColor1 to-primaryColor2 left-[-6%] top-[550vh] leading-none opacity-50 origin-center -rotate-[20deg]
      `}></span>
      <span className={`
        ${style.square_animated_index_presentation_third}
        min-[1023px]:w-[10vw] w-[100px] min-[1023px]:h-[10vw] h-[100px]
        absolute bg-gradient-to-r from-primaryColor1 to-primaryColor2 right-[-4%] top-[705vh] leading-none opacity-50 origin-center -rotate-[20deg]
      `}></span>
      <span className={`
        ${style.square_animated_index_presentation_fourth}
        w-[40vw] h-[40vw] border-4 border-primaryColor2 absolute left-[-6%] top-[900vh] opacity-30 leading-none origin-center -rotate-[20deg]
      `}></span>
      <span className={`
        ${style.triangle_animated_index_presentation_second}
        w-[20vw] h-[20vw] absolute bg-gradient-to-r from-primaryColor1 to-primaryColor2 right-[-6%] top-[1050vh] leading-none opacity-50 origin-center -rotate-[20deg]
      `}></span>
    </>
  )
}