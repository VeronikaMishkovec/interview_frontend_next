import Layout from "../components/Layout";
import style from "../styles/registration.module.scss";
import ru from "../translation/ru.json";
import IInput from "../components/IInput";
import {useState} from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import IButton from "../components/IButton";

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
