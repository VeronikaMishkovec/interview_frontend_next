import {TextField} from "@mui/material";
import {IInputType} from "./types";
import {styled} from "@mui/system";
import style from './style.module.scss'

const IInput = ({ label, type }: IInputType) => {
  const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: '#002357',
      fontFamily: 'Montserrat-Medium, sans-serif',

    },
    '& label': {
      fontFamily: 'Montserrat-Regular, sans-serif',
      fontSize: '13px'
    },
    '& input': {
      fontFamily: 'Montserrat-Regular, sans-serif',
      fontSize: '13px'
    },
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: '#002357',
        borderWidth: '2px',
        fontFamily: 'Montserrat-Regular, sans-serif'
      },
      '&.Mui-focused fieldset': {
        borderColor: '#002357',
      },
    },
  });

  return (
    <CssTextField
      className={style.inputContainer}
      id="standard-basic"
      label={label}
      variant="outlined"
      type={type}
      size={'small'}
    />
  )
}

export default IInput
