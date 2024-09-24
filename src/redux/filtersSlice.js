import { createSlice } from "@reduxjs/toolkit";

export const nameFilters = (state) => state.filters.name;

const slise = createSlice({
    name: "filters",
    initialState: {
        name: "",
    },
    reducers: {
        changeFilter: (state, action) => {
            state.name = action.payload;
        },
    }

});


export const {changeFilter } = slise.actions;
export default slise.reducer;
