import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';
import {
  DateSelectArg,
} from '@fullcalendar/core';
export interface DateSelectState  {

  selectInfo:DateSelectArg|null
}
const initialState: DateSelectState  = {
  selectInfo:null
};
export const dateSelectSlice = createSlice({
  name: 'dateSelect',
  initialState,
  reducers: {
    setDateSelect: (state, action: PayloadAction<DateSelectArg|any>) => {
      state.selectInfo = action.payload;
    },
  },
});

export const { setDateSelect } = dateSelectSlice.actions;
export const dateSelector = (state: RootState) => state.dateReducer;
export default dateSelectSlice.reducer;
