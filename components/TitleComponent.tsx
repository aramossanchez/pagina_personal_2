export function TitleComponent({
  text = 'Título',
}: {
  text?: string;
}) {

  return (
    <div className='flex flex-col items-start'>
      <span className='text-titleFontColor text-6xl'>
        {text}
      </span>
      <span className='w-11/12 h-[6px] bg-gradient-to-r from-primaryColor1 to-primaryColor2 rounded-full mt-1 opacity-70'></span>
    </div>
  )
}