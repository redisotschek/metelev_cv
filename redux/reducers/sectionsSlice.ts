import {createSlice} from '@reduxjs/toolkit';


const sectionsSlice = createSlice({
    name: 'sections',
    initialState: {
        currSection: 'Home',
        sections: [
            {
              title: 'Home',
              id: 'home',
            },
            {
              title: 'Experience',
              id: 'experience',
            },
            {
              title: 'Projects',
              id: 'projects',
            },
            {
              title: 'Contacts',
              id: 'contacts',
            },
        ]
    },
    reducers: {
        SET_NAME: (state, action) => {
            state.currSection = action.payload
        }
}})

export const {SET_NAME} = sectionsSlice.actions;
export default sectionsSlice.reducer;