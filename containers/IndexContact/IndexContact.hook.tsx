import { useState } from "react";

export function UseIndexContact() {

  const [nameToEmail, setNameToEmail] = useState('');
  const [emailToEmail, setEmailToEmail] = useState('');
  const [bodyToEmail, setBodyToEmail] = useState('');
  
  const [nameToEmailCorrect, setNameToEmailCorrect] = useState(true);
  const [emailToEmailCorrect, setEmailToEmailCorrect] = useState(true);
  const [bodyToEmailCorrect, setBodyToEmailCorrect] = useState(true);

  const checkForm = () => {
    
    const normalTextRgx = /^.{3,}$/;
    const textareaRgx = /^[\s\S]{3,}$/
    ;
    
    const emailRgx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    setNameToEmailCorrect(normalTextRgx.test(nameToEmail));
    setEmailToEmailCorrect(emailRgx.test(emailToEmail));
    setBodyToEmailCorrect(textareaRgx.test(bodyToEmail));

  }
  
  // function sendMail() {
  //   const mailtoLink = `mailto:armandoramossanchez@gmail.com?subject=${encodeURIComponent(nameToEmail)}&body=${encodeURIComponent(bodyToEmail)}`;
  //   window.location.href = mailtoLink;
  // }

  return {
    nameToEmail,
    bodyToEmail,
    setNameToEmail,
    setEmailToEmail,
    setBodyToEmail,
    nameToEmailCorrect,
    emailToEmailCorrect,
    bodyToEmailCorrect,
    checkForm
  }
}