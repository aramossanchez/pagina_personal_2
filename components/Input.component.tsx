

export function InputComponent({ placeholder = '', setHook = (e: string) => {}}) {

  return (
    <div className='flex flex-col gap-2 w-full'>
      {/* <span className=' text-titleFontColor p-0 m-0'>{placeholder}</span> */}
      <input onChange={(e) => setHook(e.target.value)} placeholder={placeholder} id={placeholder} type="text" className='focus:border-0 focus:outline-0 w-full p-0 m-0 bg-backgroundColor py-2 px-2 rounded-md' />
    </div>
  )
}