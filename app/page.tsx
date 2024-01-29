"use client"

import { FooterContainer } from '@/containers/Footer/Footer'
import { IndexAboutContainer } from '@/containers/IndexAbout/IndexAbout.container'
import { IndexContactContainer } from '@/containers/IndexContact/IndexContact.container'
import { IndexExperienceContainer } from '@/containers/IndexExperience/IndexExperience.container'
import { IndexPortfolioContainer } from '@/containers/IndexPortfolio/IndexPortfolio.container'
import { IndexPresentationContainer } from '@/containers/IndexPresentation/IndexPresentation.container'
import { IndexSkillsContainer } from '@/containers/IndexSkills/IndexSkills.container'
import { MenuTopContainer } from '@/containers/MenuTop/MenuTop.container'
import { OrnamentsContainer } from '@/containers/Ornaments/Ornaments.container'

export default function Index() {
  return (
    <div className='relative overflow-x-hidden overflow-y-hidden z-0'>
      <OrnamentsContainer />
      <main className='w-[100vw] overflow-x-hidden'>
        <MenuTopContainer />
        <IndexPresentationContainer />
        <IndexExperienceContainer />
        <IndexPortfolioContainer />
        <IndexAboutContainer />
        <IndexSkillsContainer />
        <IndexContactContainer />
        <FooterContainer />
      </main>
    </div>
  )
}
