"use client"

import { IndexAboutContainer } from '@/containers/IndexAbout/IndexAbout.container'
import { IndexExperienceContainer } from '@/containers/IndexExperience/IndexExperience.container'
import { IndexPortfolioContainer } from '@/containers/IndexPortfolio/IndexPortfolio.container'
import { IndexPresentationContainer } from '@/containers/IndexPresentation/IndexPresentation.container'
import { IndexSkillsContainer } from '@/containers/IndexSkills/IndexSkills.container'
import { MenuTopContainer } from '@/containers/MenuTop/MenuTop.container'
import { OrnamentsContainer } from '@/containers/Ornaments/Ornaments.container'

export default function Index() {
  return (
    <div className='relative overflow-x-hidden z-0'>
      <OrnamentsContainer />
      <main className='w-[100vw] overflow-x-hidden'>
        <MenuTopContainer />
        <IndexPresentationContainer />
        <IndexExperienceContainer />
        <IndexAboutContainer />
        <IndexPortfolioContainer />
        <IndexSkillsContainer />
      </main>
    </div>
  )
}
