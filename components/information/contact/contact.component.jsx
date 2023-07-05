import { IconMail, IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import style from './contact.module.scss';
//TODO --> Añadir todos los enlaces
const links = [
  {
    icon: <IconMail />,
    title: 'Dirección de correo electrónico',
    text: 'Puedes contactar conmigo a través de mi dirección de correo electrónico de Gmail. ¡Te contestaré lo más rápido posible!',
  },
  {
    icon: <IconBrandGithub />,
    title: 'Perfil en GitHub',
    text: 'Puedes ver todos mis repositorios en GitHub. ¡No dudes en echarles un vistazo!',
  },
  {
    icon: <IconBrandLinkedin />,
    title: 'Perfil en Linkedin',
    text: "Te invito a visitar mi perfil de Linkedin, y visualizar todos los detalles de mis experiencias laborales y académicas.",
  },
];

export default function ContactComponent() {
  
  return (
    <article className={style.article}>
      <div className={style.title_article}>Contacto</div>
      <div className={style.text_article}>Aquí te dejo todos los enlaces a mis redes. ¡No dudes en contactar conmigo!</div>
      <div className={style.cards_link_container}>
        {links.map((link, index) => {
          return (
            <div className={style.card_link} key={`link-${index}`}>
              {link.icon}
              <div>
                <div className={style.title_card_link}>{link.title}</div>
                <div>{link.text}</div>
              </div>
            </div>
          )
        })}
      </div>
    </article>
  )
}