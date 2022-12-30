import {InputAdornment, TextField, TextFieldProps} from "@mui/material";
import {IInputType} from "./types";
import {styled} from "@mui/system";
import styles from './style.module.scss';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


const CssTextField = styled(TextField)({
  '& .MuiFormControl-root': {
    margin: '7px 0'
  },
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
    fontSize: '13px',
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

const IInput = ({ label, type, style, value, onChange, isError, isSuccess, endIcon, onClickEndIcon }: IInputType) => {
  return (
    <div className={styles.container}>
      <CssTextField
        className={`${styles.inputContainer} ${style}`}
        id="standard-basic"
        label={label}
        variant="outlined"
        type={type}
        size={'small'}
        value={value}
        onChange={onChange}
        InputProps={{
          endAdornment: (
            <>
              {!!endIcon &&
                <InputAdornment position="end" onClick={onClickEndIcon} style={{ cursor: 'pointer' }}>
                  {endIcon}
                </InputAdornment>
              }
            </>
          ),
        }}
      />
      {isSuccess &&
        <div className={styles.errorContainer}>
          <HighlightOffIcon className={styles.errorIcon} />
          <div>{'Error message'}</div>
        </div> }
      {isError &&  <CheckCircleOutlineIcon className={styles.successIcon} />}
    </div>
  )
}

export default IInput
