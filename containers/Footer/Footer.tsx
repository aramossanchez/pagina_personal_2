export function FooterContainer() {

  const year = new Date().getFullYear();

  return (
    <section className='
      z-10 w-[100vw] relative overflow-x-hidden flex flex-col justify-center items-center h-full mt-[10vh] pt-10 pb-3
    '>
      <div className='flex flex-col items-center justify-center w-full'>
        <hr className='
          border-top-[1px] border-normalFontColor
          min-[1280px]:w-[1000px] w-[90%]
        '/>
        <span className='pt-5 pb-1 text-center px-5'>{year} - Armando Ramos Sánchez </span>
      </div>
    </section>
  )
}