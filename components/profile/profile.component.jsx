import Image from 'next/image';
import style from './profile.module.scss';
import { IconBrandDiscord, IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandSteam, IconBrandTwitter, IconRollerSkating } from '@tabler/icons-react';


export default function ProfileComponent() {
    return (
        <section className={style.profile_container}>
            <div className={style.background_image_container}>
            </div>
            <div className={style.profile_photo_container}>
                <Image
                    width={500}
                    height={500}
                    alt={'Imagen de perfil'}
                    src={'/images/perfil.jpg'}
                />
            </div>
            <div className={style.information_profile_container}>
                <span className={style.information_profile_name}>Armando Ramos</span>
                <span className={style.information_profile_role}>Front-end Developer</span>
                <div className={style.information_profile_social_networks_container}>
                    <a target="_blank" href='https://github.com/aramossanchez' rel="noopener noreferrer">
                        <IconBrandGithub />
                    </a>
                    <a href={'https://github.com/aramossanchez'} target='_blank'>
                        <IconBrandLinkedin />
                    </a>
                    <a href={'https://github.com/aramossanchez'} target='_blank'>
                        <IconBrandTwitter />
                    </a>
                    <a href={'https://github.com/aramossanchez'} target='_blank'>
                        <IconBrandInstagram />
                    </a>
                    <a href={'https://github.com/aramossanchez'} target='_blank'>
                        <IconBrandDiscord />
                    </a>
                    <a href={'https://github.com/aramossanchez'} target='_blank'>
                        <IconRollerSkating />
                    </a>
                    <a href={'https://github.com/aramossanchez'} target='_blank'>
                        <IconBrandSteam />
                    </a>
                </div>
                <div className={style.information_profile_buttons_container}>
                    <a href={'https://github.com/aramossanchez'} target='_blank'>
                        <span>Descargar CV</span>
                        <span className="material-icons">cloud_download</span>
                    </a>
                    <a href={'https://github.com/aramossanchez'} target='_blank'>
                        <span>Mi Linkedin</span>
                        <span className="material-icons">cloud_download</span>
                    </a>
                </div>
            </div>
        </section>
    )
}