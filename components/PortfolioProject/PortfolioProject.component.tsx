import Image from 'next/image';
import { basePath } from '../../config/config';
import { IconArrowNarrowRight } from '@tabler/icons-react';
import Link from 'next/link';
import style from './PortfolioProject.module.css';

export function PortfolioProjectComponent({ key = 0, projectNumber = 0, projectName = '', explanation = '', image = '', url = '', orientation = '' }) {

  return (
    <div key={key} className='
          flex flex-col
          min-[1280px]:w-[1000px] w-[90vw]
        '>
      <div className='
          flex gap-9
          min-[1023px]:flex-row flex-col
        '>
        <div className={`
          flex flex-col gap-3
          min-[1023px]:w-6/12 w-full
          ${orientation === 'right' ? 'min-[1023px]:order-2 order-1 min-[1023px]:pl-10 pl-0' : ''}
          `}>
          <span className=' text-primaryColor2 text-2xl'>Project {projectNumber}</span>
          <span className=' text-titleFontColor text-2xl'>{projectName}</span>
          <p>{explanation}</p>
          <Link href={url} className='flex flex-row gap-3 hover:text-primaryColor2 ease-in-out duration-300'>
            <IconArrowNarrowRight />
            <span>Read more</span>
          </Link>
        </div>
        <div className={`
          flex flex-col gap-3
          min-[1023px]:w-6/12 w-full
          ${orientation === 'right' ? 'min-[1023px]:order-1 order-2' : ''}
          `}>
          <div className='
            w-full flex flex-row
            min-[1023px]:pl-0
          '>
            <div className='
              relative
              w-full
            '>
              <Image
                src={`${basePath}${image}`}
                alt='Profile Image'
                width={600}
                height={310}
                objectFit='fill'
                className='
                      grayscale-0 z-30 relative rounded-lg hover:grayscale ease-in-out duration-300 cursor-pointer
                      min-[1023px]:w-full w-11/12
                      min-[1023px]:h-[300px] h-[50vw]
                    '/>
              <div className='
                    flex flex-row items-center justify-center rounded-lg z-10 absolute bg-gradient-to-r from-primaryColor1 to-primaryColor2
                    min-[1023px]:w-full w-11/12
                    min-[1023px]:h-[300px] h-[50vw]
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
      </div>
    </div>
  )
}