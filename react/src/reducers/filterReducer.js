import {createSlice} from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'filter',
  initialState: 'ALL',
  reducers: {
    filterChange(state, action) {
      return action.payload
    }
  }
})

export const { filterChange } = filterSlice.actions
const filterReducer = filterSlice.reducer
export default filterReducer