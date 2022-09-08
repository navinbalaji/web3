import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Meetdetails = {
  summary: string;
  dateTime: string;
  hangoutLink: string;
};

type Details = {
  details: Meetdetails[];
};

const initialState: Details = {
  details: [],
};

const googleCalenderSlice = createSlice({
  name: "googleCalenderSlice",
  initialState,
  reducers: {
    setEvents(state, action: PayloadAction<Array<Meetdetails> | []>) {
      state.details = action.payload;
    },
  },
});

export const { setEvents } = googleCalenderSlice.actions;

export default googleCalenderSlice.reducer;
