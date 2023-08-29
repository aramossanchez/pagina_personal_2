export function ButtonComponent({text = 'Botón', withPadding = true}) {

  return (
    <div className={`
      ${withPadding ? 'px-7 py-3' : 'px-3 py-1'}
      text-titleFontColor font-medium bg-gradient-to-r from-primaryColor2 to-primaryColor1 w-full h-full rounded-lg cursor-pointer hover:brightness-125 ease-in-out duration-500
    `}>
      {text}
    </div>
  )
}