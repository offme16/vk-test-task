import { createSlice } from '@reduxjs/toolkit';
import { groupService } from '../service/groupService';
import { GetGroupsResponseSchema } from '../type/type';

const initialState: GetGroupsResponseSchema = {
    result: 0,
    error: undefined,
    isLoading: false,
    data: undefined
};

export const GroupSlice = createSlice({
    name: 'community',
    initialState,
    reducers: { },
    extraReducers: (builder) => {
        builder
            .addCase(groupService.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(groupService.fulfilled, (state, action) => {
                state.isLoading = false;
                state.result = 1;
                state.data = action.payload;
            })
            .addCase(groupService.rejected, (state, action) => {
                state.isLoading = false;
                state.result = 0;
                state.error = typeof action.payload === 'string' ? action.payload : 'Произошла ошибка';
            });
    },
});

export const { actions: GroupActions } =  GroupSlice;
export const { reducer: GroupReducer } =  GroupSlice;