"use client"

import { IndexAboutContainer } from '@/containers/IndexAbout/IndexAbout.container'
import { IndexPresentationContainer } from '@/containers/IndexPresentation/IndexPresentation.container'
import { MenuTopContainer } from '@/containers/MenuTop/MenuTop.container'
import { OrnamentsContainer } from '@/containers/Ornaments/Ornaments.container'

export default function Index() {
  return (
    <div className='relative overflow-x-hidden z-0'>
      <OrnamentsContainer />
      <main className='w-[100vw] overflow-x-hidden'>
        <MenuTopContainer />
        <IndexPresentationContainer />
        <IndexAboutContainer />
      </main>
    </div>
  )
}
