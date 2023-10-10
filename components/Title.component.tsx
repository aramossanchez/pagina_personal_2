import { Montserrat } from 'next/font/google';

const Montse = Montserrat({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export function TitleComponent({
  text = 'Título',
}: {
  text?: string;
}) {

  return (
    <div className='flex flex-col items-start'>
      <span className={`${Montse.className}
        text-titleFontColor
        min:[360px]:text-6xl text-5xl
      `}>
        {text}
      </span>
      <span className='w-11/12 h-[6px] bg-gradient-to-r from-primaryColor1 to-primaryColor2 rounded-full mt-1 opacity-70'></span>
    </div>
  )
}