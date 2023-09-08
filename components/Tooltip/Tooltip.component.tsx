import style from './Tooltip.module.css';

export function TooltipComponent({
  children, label
}: {
  children: React.ReactNode, label: string
}) {

  return (
    <div className={`${style.tooltip_container} relative flex flex-row justify-center`}>
      <span className='text-sm bg-black border-[1px] border-primaryColor2 text-white px-2 py-1'>{label}</span>
      {children}
    </div>
  )
}