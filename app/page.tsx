"use client"

import { IndexAboutContainer } from '@/containers/IndexAbout/IndexAbout.container'
import { IndexPresentationContainer } from '@/containers/IndexPresentation/IndexPresentation.container'
import { MenuTopContainer } from '@/containers/MenuTop.container'
import { OrnamentsContainer } from '@/containers/Ornaments/Ornaments.container'

export default function Index() {
  return (
    <main className='w-[100vw]'>
      <OrnamentsContainer />
      <MenuTopContainer />
      <IndexPresentationContainer />
      <IndexAboutContainer />
    </main>
  )
}
