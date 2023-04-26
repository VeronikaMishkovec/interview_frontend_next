import {useState} from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import IButton from "../components/IButton";
import IInput from "../components/IInput";
import Layout from "../components/Layout";
import ru from "../translation/ru.json";

import style from "../styles/registration.module.scss";

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Layout>
      <div className={style.container}>
        <div className={style.header}>{ru.Login}</div>
        <IInput
          label={'Email'}
          style={style.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          isError={false}
          isSuccess={false}
        />
        <IInput
          style={style.input}
          label={'Password'}
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          endIcon={showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
          onClickEndIcon={() => setShowPassword(!showPassword)}
        />
        <IButton title={'Login'} onClick={() => {}} className={style.registrationButton}/>
      </div>
    </Layout>
  )
}

export default Login
