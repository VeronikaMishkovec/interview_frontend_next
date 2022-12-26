import Layout from "../components/Layout";
import IInput from "../components/IInput";
import style from '../styles/registration.module.scss';

const Registration = () => {
  return (
    <Layout>
      <div className={style.container}>
        <div className={style.header}>Registration</div>
        <IInput label={'Email'} />
        <IInput label={'Password'} type={'password'}/>
        <IInput label={'Repeat password'} type={'password'}/>
        <IInput label={'Username'} />
        <IInput label={'First name'} />
        <IInput label={'Second name'} />
        <IInput label={'What do you do?'} />
        <IInput label={'What is your degree?'} />
        <IInput label={'Which technologies do you want to train?'} />
      </div>
    </Layout>
  )
}

export default Registration
