import { useEffect } from 'react';
import style from './Ornaments.module.css';
import { UseOrnament } from './Ornaments.hook';

export function OrnamentsContainer() {

  const { totalVhHook } = UseOrnament();

  return (
    <>
      {totalVhHook >= 15 &&
        <span className={`
          ${style.bubble_animated_index_presentation_first}
          min-[1023px]:w-[10vw] w-[120px] min-[1023px]:h-[10vw] h-[120px]
          absolute rounded-full bg-gradient-to-r from-primaryColor1 to-primaryColor2 right-[-2%] top-[15vh] leading-none opacity-50 origin-center -rotate-[20deg]
        `}></span>
      }

      {totalVhHook >= 95 &&
        <span className={`
        ${style.square_animated_index_presentation_first}
        min-[1023px]:w-[10vw] w-[100px] min-[1023px]:h-[10vw] h-[100px]
        absolute bg-gradient-to-r from-primaryColor1 to-primaryColor2 left-[-4%] top-[95vh] leading-none opacity-50 origin-center -rotate-[20deg]
      `}></span>
      }
      {totalVhHook >= 90 &&
        <span className='absolute w-[20vw] h-[20vw] border-8 border-primaryColor2 right-[-10%] top-[90vh] leading-none origin-center -rotate-[40deg]'></span>
      }
      {totalVhHook >= 150 &&
        <span className={`
          ${style.triangle_animated_index_presentation_first}
          min-[1023px]:w-[10vw] w-[20vw] min-[1023px]:h-[10vw] h-[20vw] absolute bg-gradient-to-r from-primaryColor1 to-primaryColor2 left-[-6%] top-[150vh] leading-none opacity-50 origin-center -rotate-[20deg]
        `}></span>
      }
      {totalVhHook >= 250 &&
        <span className={`
          ${style.bubble_animated_index_presentation_second}
          w-[10vw] h-[10vw] rounded-full absolute min-[1023px]:border-8 border-4 border-primaryColor2 right-[-3%] top-[250vh] opacity-50 leading-none origin-center -rotate-[20deg]
        `}></span>
      }
      {totalVhHook >= 350 &&
        <span className={`
          ${style.square_animated_index_presentation_second}
          w-[20vw] h-[20vw] absolute min-[1023px]:border-8 border-4 border-primaryColor2 left-[-10%] top-[350vh] leading-none origin-center -rotate-[20deg] opacity-50
        `}></span>
      }
      {totalVhHook >= 550 &&
        <span className={`
          ${style.bubble_animated_index_presentation_third}
          w-[10vw] h-[10vw] rounded-full absolute bg-gradient-to-r from-primaryColor1 to-primaryColor2 left-[-6%] top-[550vh] leading-none opacity-50 origin-center -rotate-[20deg]
        `}></span>
      }
      {totalVhHook >= 705 &&
        <span className={`
          ${style.square_animated_index_presentation_third}
          min-[1023px]:w-[10vw] w-[100px] min-[1023px]:h-[10vw] h-[100px]
          absolute bg-gradient-to-r from-primaryColor1 to-primaryColor2 right-[-4%] top-[705vh] leading-none opacity-50 origin-center -rotate-[20deg]
        `}></span>
      }
      {totalVhHook >= 900 &&
        <span className={`
          ${style.square_animated_index_presentation_fourth}
          min-[1023px]:w-[10vw] w-[40vw] min-[1023px]:h-[10vw] h-[40vw] border-4 border-primaryColor2 absolute left-[-6%] top-[900vh] opacity-30 leading-none origin-center -rotate-[20deg]
        `}></span>
      }
      {totalVhHook >= 1050 &&
        <span className={`
          ${style.triangle_animated_index_presentation_second}
          w-[20vw] h-[20vw] absolute bg-gradient-to-r from-primaryColor1 to-primaryColor2 right-[-6%] top-[1050vh] leading-none opacity-50 origin-center -rotate-[20deg]
        `}></span>
      }
    </>
  )
}