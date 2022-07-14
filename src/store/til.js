
import { createSlice } from "@reduxjs/toolkit";

const tilSlice = createSlice({
    name: "til",
    initialState: {
        til_list: [{title: "11", content: "22", time: "3"}]
    },
    reducers: {
        add: (state, action) => {
            console.log(action);
            // 어떤 변경 작업을 해!
            state.til_list.push(action.payload.til_data);
        }
    }
})

export const {add} = tilSlice.actions;
export default tilSlice.reducer;