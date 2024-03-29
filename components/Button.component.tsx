export function ButtonComponent({
  text = 'Botón',
  withPadding = true,
  icon = null,
}: {
  text?: string;
  withPadding?: boolean;
  icon?: React.ReactNode;
}) {

  return (
    <div className={`
      ${withPadding ? 'px-7 py-3' : 'px-3 py-1'}
      text-titleFontColor font-medium bg-gradient-to-r from-primaryColor2 to-primaryColor1 rounded-lg cursor-pointer hover:brightness-125 ease-in-out duration-300 flex flex-row items-center gap-2
    `}>
      {text}
      {icon &&
       <span>{icon}</span>
       }
    </div>
  )
}