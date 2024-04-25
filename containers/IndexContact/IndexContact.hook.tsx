import { useEffect, useState } from "react";

export function UseIndexContact() {

  const [nameToEmail, setNameToEmail] = useState('');
  const [bodyToEmail, setBodyToEmail] = useState('');
  
  const [nameToEmailCorrect, setNameToEmailCorrect] = useState<boolean>();
  const [bodyToEmailCorrect, setBodyToEmailCorrect] = useState<boolean>();

  useEffect(() => {
    if (nameToEmailCorrect && bodyToEmailCorrect) {
      sendMail();
    }
  }, [nameToEmailCorrect, bodyToEmailCorrect]);

  const checkForm = async () => {
    
    const normalTextRgx = /^.{3,}$/;
    const textareaRgx = /^[\s\S]{3,}$/;

    setNameToEmailCorrect(normalTextRgx.test(nameToEmail));
    setBodyToEmailCorrect(textareaRgx.test(bodyToEmail));

  }
  
  const sendMail = () => {
    const mailtoLink = `mailto:armandoramossanchez@gmail.com?subject=Mensaje desde la web de ${encodeURIComponent(nameToEmail)}&body=${encodeURIComponent(bodyToEmail)}`;
    window.open(mailtoLink, '_blank');
    setNameToEmailCorrect(undefined);
    setBodyToEmailCorrect(undefined);
  }

  return {
    setNameToEmail,
    setBodyToEmail,
    nameToEmailCorrect,
    bodyToEmailCorrect,
    checkForm
  }
}