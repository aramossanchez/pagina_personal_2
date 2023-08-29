"use client"

import { IndexAboutContainer } from '@/containers/IndexAbout/IndexAbout.container'
import { IndexPresentationContainer } from '@/containers/IndexPresentation/IndexPresentation.container'
import { MenuTopContainer } from '@/containers/MenuTop/MenuTop.container'

export default function Index() {
  return (
    <main className='w-[100vw]'>
      <MenuTopContainer />
      <IndexPresentationContainer />
      <IndexAboutContainer />
    </main>
  )
}
