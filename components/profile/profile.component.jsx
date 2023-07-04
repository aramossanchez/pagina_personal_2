import Image from 'next/image';
import style from './profile.module.scss';
import { IconBrandDiscord, IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandSteam, IconBrandTwitter, IconRollerSkating } from '@tabler/icons-react';
import { useEffect, useRef, useState } from 'react';

// TODO --> Hacer una manera de cerrar el selector de temas sin tener que hacer click en un tema diferente al actual
// TODO: --> Buscar combinaciones de colores más bonitas
//TODO --> Cambiar las imágenes de fondo
//TODO --> Añadir los enlaces correctos
//TODO --> Cambiar el estilo de los botones de abajo
export default function ProfileComponent() {

    const myRef = useRef(null);

    const [activeTheme, setActiveTheme] = useState('primary_theme');
    const [openedThemeSelector, setOpenedThemeSelector] = useState(null);

    const themes = ['primary_theme', 'light_theme', 'desert_theme', 'rainy_theme', 'eight_theme'];
    const backgroundProfileImages = ['/images/background_image_profile_1.jpg', '/images/background_image_profile_2.jpg', '/images/background_image_profile_3.jpg'];

    const [activeBackgroundProfileImage, setActiveBackgroundProfileImage] = useState('');

    useEffect(() => {
        changeBackgroundImage();
    }, []);

    const changeBackgroundImage = () => {
        let counter = Math.floor(Math.random() * (backgroundProfileImages.length));
        setActiveBackgroundProfileImage(backgroundProfileImages[counter]);
        setInterval(() => {
            counter === backgroundProfileImages.length - 1 ? counter = 0 : counter++;
            setActiveBackgroundProfileImage(backgroundProfileImages[counter]);
        }, 30000);
    }

    const handleThemeChangeTheme = (theme) => {
        themes.forEach(themeOfArray => {
            if (themeOfArray !== theme) {
                document.body.classList.remove(themeOfArray);
            }
        });
        document.body.classList.toggle(theme);
        setActiveTheme(theme);
    };

    return (
        <section className={style.profile_container}>
            <div className={style.open_selector_theme} onClick={() => setOpenedThemeSelector(true)}>
                <span className='material-icons'>brush</span>
            </div>
            <div className={`${style.color_selector} ${openedThemeSelector === null ? '' : openedThemeSelector ? style.selector_open : style.selector_close}`}>
                {themes.map((theme) => {
                    return (
                        <div
                            key={theme}
                            className={`${style.color_button_selector} ${style[theme]} ${theme === activeTheme ? style.theme_selected : ''}`}
                            onClick={() => { handleThemeChangeTheme(theme); setOpenedThemeSelector(false) }}>
                        </div>
                    )
                })}
            </div>
            {backgroundProfileImages.map((image) => {
                return (
                    <div ref={myRef} className={`
                            ${style.background_image_container}
                            ${activeBackgroundProfileImage !== image ? style.background_image_container_out : style.background_image_container_in}
                        `} style={{ backgroundImage: `url(${image})` }}>
                    </div>
                )
            })}
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
                <span className={style.information_profile_role}>Frontend Developer</span>
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