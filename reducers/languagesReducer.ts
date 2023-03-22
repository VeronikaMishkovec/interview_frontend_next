import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../store"

type LanguageType = {
  code: string
}


const initialState: LanguageType = {
  code: 'en'
}

export const languageSlice = createSlice({
    name: 'currentLanguage',
    initialState,
    reducers: {
        currentLanguage: (state, action: PayloadAction<string>) => {
            state.code = action.payload
        },
}})

// actions
export const { currentLanguage } = languageSlice.actions 

// // selectors
export const selectCurrentLanguage= (state: RootState) => state.currentLanguage.code

export default languageSlice.reducer