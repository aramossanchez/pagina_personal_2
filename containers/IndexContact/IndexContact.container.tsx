import { InputComponent } from '@/components/Input.component';
import { TextareaComponent } from '@/components/TextArea/Textarea.component';
import { TitleComponent } from '@/components/Title.component';
import style from './IndexContact.module.css';
import { UseIndexContact } from './IndexContact.hook';
import { SocialMediaLinksIconsComponent } from '@/components/SocialMediaIconsLinks.component';

export function IndexContactContainer() {

  const {
    setNameToEmail,
    setBodyToEmail,
    nameToEmailCorrect,
    bodyToEmailCorrect,
    checkForm
  } = UseIndexContact();

  return (
    <section id='Contact' className='
      z-10 w-[100vw] relative overflow-x-hidden flex flex-col justify-center items-center h-full pt-20 pb-10
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
            Puedes contactar conmigo a través del correo electrónico, simplemente rellenando este formulario.
          </p>
        </div>
        <div className={`${style.form} flex flex-col items-center gap-1 sm:w-[500px] w-[95%] p-5 bg-gradient-to-r from-primaryColor2 to-primaryColor1 rounded-lg`}>
          <div className='w-full flex flex-col'>
            <InputComponent placeholder='Nombre' setHook={setNameToEmail} correct={nameToEmailCorrect} />
            <span className={`${nameToEmailCorrect !== false ? 'text-transparent' : 'text-black'} font-semibold px-2 text-sm`}>El campo necesita un mínimo de 3 caracteres.</span>
          </div>
          <div className='w-full flex flex-col'>
            <TextareaComponent placeholder='Mensaje' setHook={setBodyToEmail} correct={bodyToEmailCorrect} />
            <span className={`${bodyToEmailCorrect !== false ? 'text-transparent' : 'text-black'} font-semibold px-2 text-sm`}>El campo necesita un mínimo de 3 caracteres.</span>
          </div>
          <button
            onClick={() => { checkForm() }}
            className='px-3 py-1 text-titleFontColor font-medium bg-backgroundColor rounded-lg cursor-pointer hover:brightness-125 ease-in-out duration-300 flex flex-row items-center gap-2'
          >
            Enviar
          </button>
        </div>
        <span className='text-center'>También puedes dejarme un mensaje por cualquiera de mis redes sociales, si lo prefieres.</span>
        <div className='flex flex-row justify-center'>
          <SocialMediaLinksIconsComponent />
        </div>
      </div>
    </section>
  )
}