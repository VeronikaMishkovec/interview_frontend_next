import {LayoutType} from "./types";
import style from './style.module.scss';
import IButton from "../IButton";
import Link from "next/link";
import {ROUTES} from "../../constants/routes";

const Layout = ({children}: LayoutType) => {
  return (
    <div>
      <header className={style.headerContainer}>
        <Link href={ROUTES.MAIN}>
          <img
            width={50}
            height={50}
            src={'https://upload.wikimedia.org/wikipedia/commons/b/bf/Front-end-logo-color%402x.png'}
            alt={'FE-logo'}
          />
        </Link>
        <div className={style.buttonContainer}>
          <Link href={ROUTES.LOGIN}>
            <IButton title={'Login'} className={style.loginButton} onClick={()=>{}}/>
          </Link>
          <Link href={ROUTES.REGISTRATION}>
            <IButton title={'Registration'} className={style.registrationButton} onClick={()=>{}}/>
          </Link>
          <IButton title={'Logout'} className={style.logoutButton} onClick={()=>{}}/>
        </div>
      </header>
      <main className={style.mainContainer}>
        {children}
      </main>
    </div>
  )
}

export default Layout

