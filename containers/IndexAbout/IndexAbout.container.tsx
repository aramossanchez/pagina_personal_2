import { ButtonComponent } from '@/components/Button.component';
import style from './IndexAbout.module.css';
import Image from 'next/image';
import { basePath } from '../../config/config';
import { TitleComponent } from '@/components/Title.component';
import { SocialMediaLinksIconsComponent } from '@/components/SocialMediaIconsLinks.component';

export function IndexAboutContainer() {

  return (
    <section id='About' className='
      z-10 w-[100vw] relative overflow-x-hidden flex flex-row justify-center pt-20 pb-48 h-full
    '>
      <div className='
        mt-10 flex items-start gap-20
        min-[1023px]:flex-row flex-col
        min-[1280px]:w-[1000px] w-[90vw]
      '>
        {/* FOTO Y TEXTO */}
        <div className='
          min-[1023px]:w-4/12 w-full
        '>
          {/* TITULO PARA VERSION MOVIL */}
          <div className='
            w-full flex-row mb-16 justify-center
            min-[1023px]:hidden flex
          '>
            <TitleComponent text='Sobre mí' />
          </div>
          <div className='
            w-full flex flex-row
            min-[1023px]:pl-0
            // min-[1023px]:justify-start justify-center
          '>
            <div className='relative'>
              <Image
                src={`${basePath}images/profile.jpg`}
                alt='Profile Image'
                width={300}
                height={310}
                className='
                  z-30 relative rounded-lg
                  min-[428px]:w-[300px] w-[270px]
                  min-[428px]:h-[310px] h-[280px]
                '
              />
              <div className='
              flex flex-row items-center justify-center rounded-lg z-10 absolute bg-gradient-to-r from-primaryColor1 to-primaryColor2
              min-[428px]:w-[300px] w-[270px]
              min-[428px]:h-[310px] h-[280px]
              min-[428px]:top-9 top-7
              min-[428px]:left-9 left-7
              '>
                <div
                  className={`${style.width_height_photo_border} rounded-lg z-20 bg-backgroundColor`}>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='
          mt-7
          min-[1023px]:w-8/12 w-full
        '>
          <div className='w-full flex flex-col items-start justify-start gap-8'>
            {/* TITULO PARA VERSION WEB */}
            <div className='
              min-[1023px]:block hidden
            '>
              <TitleComponent text='Sobre mi' />
            </div>
            <div className='w-full flex flex-col gap-3'>
              <p>Llevo trabajando como desarrollador <span className='text-titleFontColor font-medium'>desde el 2022</span>, enfocado en la parte <span className='text-titleFontColor font-medium'>Frontend</span> del desarrollo (aunque también tengo <span className='text-titleFontColor font-medium'>conocimientos sólidos</span> en la parte <span className='text-titleFontColor font-medium'>Backend</span>).</p>
              <p>Presto mucha atención a los <span className='text-titleFontColor font-medium'>detalles</span>, y me encanta explorar las <span className='text-titleFontColor font-medium'>multiples posibilidades</span> que ofrece la parte frontend de una aplicación (notificaciones, validaciones de input para usuarios, ajustes de contenido y diseño para distintos tamaños de pantalla, efectos y animaciones en elementos de la web, etc).</p>
              <p>He descubierto que me encanta formar parte de un equipo donde las <span className='text-titleFontColor font-medium'>ideas</span> y <span className='text-titleFontColor font-medium'>soluciones</span> vienen <span className='text-titleFontColor font-medium'>de todas las partes</span> implicadas en el desarrollo. Estos grupos en los que el diálogo es promovido, todo el mundo es escuchado y todas las opiniones cuentan, en mi experiencia, alcanzan los <span className='text-titleFontColor font-medium'>mejores resultados</span>.</p>
              <p>Puedes echarle un ojo a mis redes sociales por si quieres cotillear un poco sobre otras cosas de mí. También puedes ver mis repositorios en mi perfil de github.</p>
              <SocialMediaLinksIconsComponent />
            </div>
            <div className='
              flex flex-col items-center gap-6
              w-full           
              min-[1023px]:justify-start justify-center
              min-[379px]:text-[16px] text-[13px]
            '>
              <a href={`${basePath}#Contact`} className=''>
                <ButtonComponent text='CONTACTA CONMIGO' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}