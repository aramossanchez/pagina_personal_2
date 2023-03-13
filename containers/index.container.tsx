import style from './index.module.scss';
import MenuNavBarComponent from '../components/menuNavBar/menuNavBar.component';
import ProfileComponent from '../components/profile/profile.component';
import InformationComponent from '../components/information/information.component';

export default function IndexContainer() {
  return (
    <>
      <main className={style.index_container}>
        <MenuNavBarComponent />
        <ProfileComponent />
        <InformationComponent />
      </main>
    </>
  )
}