import style from './index.module.scss';
import MenuNavBarComponent from '../components/menuNavBar/menuNavBar.component';
import ProfileComponent from '../components/profile/profile.component';

export default function IndexContainer() {
  return (
    <>
      <main className={style.index_container}>
        <MenuNavBarComponent />
        <ProfileComponent />
        <section>información</section>
      </main>
    </>
  )
}