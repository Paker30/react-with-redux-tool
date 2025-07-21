import { createSelector } from "@reduxjs/toolkit";

export const selectFurniture = state => state.furniture;
export const selectKitchen = createSelector(selectFurniture, (furniture) => furniture.kitchen);
export const selectRooms = createSelector(selectFurniture, (furniture) => furniture.rooms);
export const selectRoomsChairs = createSelector(selectRooms, (rooms) => rooms.chairs);
export const selectRoomsBeds = createSelector(selectRooms, (rooms) => rooms.beds);
export const selectRoomsCupboards = createSelector(selectRooms, (rooms) => rooms.cupboards);
export const selectKitchenChairs = createSelector(selectKitchen, (kitchen) => kitchen.chairs);
export const selectKitchenTables = createSelector(selectKitchen, (kitchen) => kitchen.tables);