import Layout from "../components/Layout";
import IInput from "../components/IInput";
import style from '../styles/registration.module.scss';
import {useState} from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {FormLabel} from "@mui/material";
import IRadioGroup from "../components/IRadioGroup";
import {DEGREES, SPECIALISATIONS, TECHNOLOGIES} from "../constants/specialisations";
import IButton from "../components/IButton";

const Registration = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showRepeatPassword, setShowRepeatPassword] = useState(false)
  const [username, setUsername] = useState('')
  const [firstName, setFirstName] = useState('')
  const [secondName, setSecondName] = useState('')

  return (
    <Layout>
      <div className={style.container}>
        <div className={style.header}>Registration</div>
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
        <IInput
          label={'Repeat password'}
          type={showRepeatPassword ? 'text' : 'password'}
          value={repeatPassword}
          style={style.input}
          onChange={(e) => setRepeatPassword(e.target.value)}
          onClickEndIcon={() => setShowRepeatPassword(!showRepeatPassword)}
          endIcon={showRepeatPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
        />
        <IInput
          style={style.input}
          label={'Username'}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <IInput
          style={style.input}
          label={'First name'}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <IInput
          style={style.input}
          label={'Second name'}
          value={secondName}
          onChange={(e) => setSecondName(e.target.value)}
        />
        <FormLabel className={style.label} id="demo-radio-buttons-group-label">
          {'What is your specialisation?'}
        </FormLabel>
        <IRadioGroup radioList={SPECIALISATIONS}/>
        <FormLabel className={style.label} id="demo-radio-buttons-group-label">
          {'What is your degree?'}
        </FormLabel>
        <IRadioGroup radioList={DEGREES}/>
        <FormLabel className={style.label} id="demo-radio-buttons-group-label">
          {'Which technologies do you want to train?'}
        </FormLabel>
        <IRadioGroup radioList={TECHNOLOGIES}/>
        <IButton title={'Registration'} onClick={() => {}} className={style.registrationButton}/>
      </div>
    </Layout>
  )
}

export default Registration
