import React from 'react';
import { TooltipComponent } from './Tooltip/Tooltip.component';
import Link from 'next/link';
import { IconBrandInstagram, IconBrandLinkedin, IconBrandX } from '@tabler/icons-react';


export function SocialMediaLinksIconsComponent () {

  return (
    <div className='flex flex-row items-start gap-6 flex-wrap justify-start w-full'>
      <TooltipComponent label={'Linkedin'}>
        <Link href={'https://es.linkedin.com/in/armando-ramos-s%C3%A1nchez-0b678b102'} target='_blank'>
          <div className='text-titleFontColor hover:text-primaryColor2 ease-in-out duration-300'>
            <IconBrandLinkedin size={29} />
          </div>
        </Link>
      </TooltipComponent>
      <TooltipComponent label={'X (Twitter)'}>
        <Link href={'https://twitter.com/aramos_dev'} target='_blank'>
          <div className='text-titleFontColor hover:text-primaryColor2 ease-in-out duration-300'>
            <IconBrandX size={29} />
          </div>
        </Link>
      </TooltipComponent>
      {/* <TooltipComponent label={'Instagram'}>
        <Link href={'https://www.instagram.com/armandohyeah/'} target='_blank'>
          <div className='text-titleFontColor hover:text-primaryColor2 ease-in-out duration-300'>
            <IconBrandInstagram size={29} />
          </div>
        </Link>
      </TooltipComponent> */}
    </div>
  )
}