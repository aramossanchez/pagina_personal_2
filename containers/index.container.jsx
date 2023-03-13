import style from './index.module.scss';
import MenuNavBarComponent from '../components/menuNavBar/menuNavBar.component';

export default function IndexContainer() {
  return (
    <>
      <main className={style.index_container}>
        <MenuNavBarComponent />
        <section>perfil</section>
        <section>información</section>
      </main>
    </>
  )
}