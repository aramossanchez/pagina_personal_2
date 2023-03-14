import Image from 'next/image';
import Link from 'next/link';
import style from './profile.module.scss';
import { IconBrandGithub, IconBrandInstagram } from '@tabler/icons-react';


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
                    <Link href={'https://github.com/aramossanchez'} passHref>
                        <IconBrandGithub color='#ffffff' />
                    </Link>
                    <Link href={'https://github.com/aramossanchez'} passHref>
                        <IconBrandInstagram color='#ffffff' />
                    </Link>
                </div>
                <div className={style.information_profile_buttons_container}>
                    <Link href={'https://github.com/aramossanchez'} passHref>
                        <span>Descargar CV</span>
                        <span className="material-icons">cloud_download</span>
                    </Link>
                    <Link href={'https://github.com/aramossanchez'} passHref>
                        <span>Mi Linkedin</span>
                        <span className="material-icons">cloud_download</span>
                    </Link>
                </div>
            </div>
        </section>
    )
}