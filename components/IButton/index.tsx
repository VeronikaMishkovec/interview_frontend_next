import { Button } from "@mui/material";
import { IButtonType } from "./types";

const IButton = ({ title, className, onClick }: IButtonType) => {
  return (
    <Button
      variant={'outlined'}
      className={`${className}`}
      onClick={onClick}
    >
      {title}
    </Button>
  )
}

export default IButton
