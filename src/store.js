import {configureStore} from '@reduxjs/toolkit'
import {weatherData} from './Slices/weatherSlice'
import devToolsEnhancer from 'remote-redux-devtools';

const store = configureStore({reducer:{
    weatherData:weatherData.reducer,
    enhancers: [devToolsEnhancer({ realtime: true, port: 3000 })],
}})

export default store