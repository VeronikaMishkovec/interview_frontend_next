import {Button} from "@mui/material";
import {IButtonType} from "./types";
import style from './style.module.scss';

const IButton = ({title, className, onClick}: IButtonType) => {
  return (
    <Button
      variant={'outlined'}
      className={`${style.buttonContainer} ${className}`}
      onClick={onClick}
    >
      {title}
    </Button>
  )
}

export default IButton
