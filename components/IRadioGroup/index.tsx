import {FormControlLabel, Radio, RadioGroup} from "@mui/material";
import {IRadioGropeType} from "./types";
import {ChangeEvent, useState} from "react";

const IRadioGroup = ({ radioList }: IRadioGropeType) => {

  return (
    <RadioGroup
      row
      aria-labelledby="demo-radio-buttons-group-label"
      defaultValue="female"
      name="radio-buttons-group"
    >
      {radioList.map(radio =>
        <FormControlLabel
          key={radio.id}
          value={radio.value}
          control={<Radio />}
          label={radio.title}
          style={{
            fontFamily: 'Montserrat-Regular, sans-serif !important'
          }}
        />
      )}
    </RadioGroup>
  )
}

export default IRadioGroup
