import { ButtonComponent } from '@/components/Button.component';
import { InputComponent } from '@/components/Input.component';
import { TextareaComponent } from '@/components/TextArea/Textarea.component';
import { TitleComponent } from '@/components/Title.component';
import style from './IndexContact.module.css';

import { useState } from 'react';

export function IndexContactContainer() {

  const [nameToEmail, setNameToEmail] = useState('');
  const [emailToEmail, setEmailToEmail] = useState('');
  const [bodyToEmail, setBodyToEmail] = useState('');

  function sendMail() {
    const mailtoLink = `mailto:armandoramossanchez@gmail.com?subject=${encodeURIComponent(nameToEmail)}&body=${encodeURIComponent(bodyToEmail)}`;
    window.location.href = mailtoLink;
  }

  return (
    <section id='Contact' className='
      z-10 w-[100vw] relative overflow-x-hidden flex flex-col justify-center items-center h-full mt-[22vh] pt-10 pb-10
    '>
      <div className='w-full flex-row mb-16 justify-center flex'>
        <TitleComponent text='Contact' />
      </div>
      <div className='
        flex flex-col items-center justify-center
        min-[1023px]:w-auto w-[90%] gap-8
      '>
        <div className='flex flex-col gap-3'>
          <span className='text-2xl text-titleFontColor text-center'>
            Drop me a message
          </span>
          <p className='text-center'>
            Send me an email through this form.
          </p>
        </div>
        <div className={`${style.form} flex flex-col items-center gap-5 md:w-[500px] w-[350px] p-5 bg-gradient-to-r from-primaryColor2 to-primaryColor1 rounded-lg`}>
          <InputComponent placeholder='Name' setHook={setNameToEmail} />
          <InputComponent placeholder='Email' setHook={setEmailToEmail} />
          <TextareaComponent placeholder='Message' setHook={setBodyToEmail} />
          <button
            onClick={sendMail}
            className='px-3 py-1 text-titleFontColor font-medium bg-backgroundColor rounded-lg cursor-pointer hover:brightness-125 ease-in-out duration-300 flex flex-row items-center gap-2'
          >
            Send
          </button>
        </div>
      </div>
    </section>
  )
}