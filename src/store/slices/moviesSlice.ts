import {IMovieInfo} from "../../interfaces";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";
import {AxiosError} from "axios";

interface IState {
    moviesArr: IMovieInfo[],
    chosenMovie: IMovieInfo,
    maxPages: number
}

const initialState: IState = {
    moviesArr: null,
    chosenMovie: null,
    maxPages: null,
}

const getMovieById = createAsyncThunk<IMovieInfo, {id: number}> (
    "moviesSlice/getMovieById",
        async ({id}, {rejectWithValue}) => {
            try {
                const {data} = await movieService.getById(id);
                return data;
            } catch(e) {
                const error = e as AxiosError
                return rejectWithValue(error.response?.data)
            }
        }
)

const moviesSlice = createSlice({
    name: "moviesSlice",
    initialState,
    reducers:{},
    extraReducers: builder =>
        builder
            .addCase(getMovieById.fulfilled, (state, action) => {
                state.chosenMovie = action.payload
            })
})

const {reducer: moviesReducer, actions} = moviesSlice;
const moviesActions = {
    ...actions,
    getMovieById
}

export {
    moviesReducer,
    moviesActions
}