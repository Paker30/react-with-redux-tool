import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    kitchen: {
        chairs: 0,
        tables: 0
    },
    rooms: {
        chairs: 0,
        beds: 0,
        cupboards: 0
    }
};

export const furniture = createSlice({
    name: 'furniture',
    initialState,
    reducers: {
        addKitchenChairs: (state) => {
            state.kitchen.chairs += 1;
        },
        addKitchenTables: (state) => {
            state.kitchen.tables += 1;
        },
        addRoomsChairs: (state) => {
            state.rooms.chairs += 1;
        },
        addRoomsBeds: (state) => {
            state.rooms.beds += 1;
        },
        addRoomCupboards: (state) => {
            state.rooms.cupboards += 1;
        },
    }
});

export const { addKitchenChairs, addKitchenTables, addRoomsChairs, addRoomsBeds, addRoomCupboards } = furniture.actions;

export default furniture .reducer;