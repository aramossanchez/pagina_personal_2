import { InputComponent } from '@/components/Input.component';
import { TextareaComponent } from '@/components/TextArea/Textarea.component';
import { TitleComponent } from '@/components/Title.component';
import style from './IndexContact.module.css';

import { UseIndexContact } from './IndexContact.hook';

export function IndexContactContainer() {

  const {
    setNameToEmail,
    setEmailToEmail,
    setBodyToEmail,
    nameToEmailCorrect,
    emailToEmailCorrect,
    bodyToEmailCorrect,
    checkForm
  } = UseIndexContact();

  return (
    <section id='Contact' className='
      z-10 w-[100vw] relative overflow-x-hidden flex flex-col justify-center items-center h-full mt-[22vh] pt-10 pb-10
    '>
      <div className='w-full flex-row mb-16 justify-center flex'>
        <TitleComponent text='Contacto' />
      </div>
      <div className='
        flex flex-col items-center justify-center
        min-[1023px]:w-auto w-[90%] gap-8
      '>
        <div className='flex flex-col gap-3'>
          <span className='text-2xl text-titleFontColor text-center'>
            Déjame un mensaje
          </span>
          <p className='text-center'>
            Envíame un correo electrónico a través de este formulario.
          </p>
        </div>
        <div className={`${style.form} flex flex-col items-center gap-1 md:w-[500px] w-[350px] p-5 bg-gradient-to-r from-primaryColor2 to-primaryColor1 rounded-lg`}>
          <div className='w-full flex flex-col'>
            <InputComponent placeholder='Nombre' setHook={setNameToEmail} correct={nameToEmailCorrect} />
            <span className={`${nameToEmailCorrect ? 'text-transparent' : 'text-black'} font-semibold px-2 text-sm`}>El campo necesita un mínimo de 3 caracteres.</span>
          </div>
          <div className='w-full flex flex-col'>
            <InputComponent placeholder='Email' setHook={setEmailToEmail} correct={emailToEmailCorrect} />
            <span className={`${emailToEmailCorrect ? 'text-transparent' : 'text-black'} font-semibold px-2 text-sm`}>El email no tiene un formato correcto.</span>
          </div>
          <div className='w-full flex flex-col'>
            <TextareaComponent placeholder='Mensaje' setHook={setBodyToEmail} correct={bodyToEmailCorrect} />
            <span className={`${bodyToEmailCorrect ? 'text-transparent' : 'text-black'} font-semibold px-2 text-sm`}>El campo necesita un mínimo de 3 caracteres.</span>
          </div>
          <button
            onClick={() => checkForm()}
            className='px-3 py-1 text-titleFontColor font-medium bg-backgroundColor rounded-lg cursor-pointer hover:brightness-125 ease-in-out duration-300 flex flex-row items-center gap-2'
          >
            Enviar
          </button>
        </div>
      </div>
    </section>
  )
}