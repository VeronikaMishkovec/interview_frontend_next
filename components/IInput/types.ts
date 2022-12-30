import {ChangeEventHandler} from "react";

export type IInputType = {
  label: string
  value: string
  onChange(e: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>): void

  type?: string
  style?: string
  isError?: boolean
  isSuccess?: boolean
  endIcon?: React.ReactNode
  onClickEndIcon?(): void
}
