import style from './Textarea.module.css';

export function TextareaComponent({ placeholder = '', setHook = (e: string) => {} }) {

  return (
    <div className='flex flex-col gap-2 w-full'>
      {/* <span className=' text-titleFontColor p-0 m-0'>{placeholder}</span> */}
      <textarea onChange={(e) => setHook(e.target.value)} placeholder={placeholder} id={placeholder}
      className={`${style.textarea} min-h-[150px] resize-none focus:border-0 focus:outline-0 w-full p-0 m-0 bg-backgroundColor py-2 px-2 rounded-md`}
      />
    </div>
  )
}