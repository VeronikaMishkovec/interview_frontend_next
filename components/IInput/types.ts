import {ChangeEventHandler} from "react";

export type IInputType = {
  label: string
  value: string
  onChange(e: any): void

  type?: string
  style?: string
  isError?: boolean
  isSuccess?: boolean
  endIcon?: React.ReactNode
  onClickEndIcon?(): void
}
