import {createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

let initialState = {
    cityName: "",
    data: [],
  };

export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async (arg, { getState }) => {
        const state = getState();
        console.log(state, 'STATE')
      const api = "b85e1e72aab3b05793864ded202153d5"
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${state?.weatherData?.cityName}&units=metric&appid=${api}`).then(
      (data) => data.json()
    )
    return res
  })

export const weatherData = createSlice({
    name:"weather",
    initialState:initialState,
    reducers:{
        getName(state,action)  {
            console.log(action.payload)
            console.log(state, 'state')
            state.cityName = action.payload
        },
        // getData:(state,action) => {
        //     console.log(action)
        //     const api = "b85e1e72aab3b05793864ded202153d5"
        //     const response =  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${state.cityName}&units=metric&appid=${api}`)
        //     .then((response) => {
        //         // console.log(response.json())
        //         return response.json()
        //     }).then((res) => {
        //         console.log(res, 'res')
        //         console.log(action.payload, 'AAAA')
        //         //state.data = action.payload;
        //         state.data = [{test: '1'}];

        //         // let stateData = [...initialState.data];
        //         // stateData = res;
        //         // console.log(stateData)
        //         // stateData = res
        //     })
        //     // const movies =  response.json()
        // }
    },
    extraReducers: {
        [getPosts.pending]: (state) => {
          state.loading = true
        },
        [getPosts.fulfilled]: (state, { payload }) => {
          state.loading = false
          state.data = payload
        },
        [getPosts.rejected]: (state) => {
          state.loading = false
        },
      },
})

export const {getName,getData} = weatherData.actions
export default weatherData.reducer
console.log(weatherData)