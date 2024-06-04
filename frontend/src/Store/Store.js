import {configureStore} from '@reduxjs/toolkit'
import authSlice from './AuthSlice'
const stores=configureStore(
    {
       reducer:{
           users:authSlice.reducer
       }
    }
)
export default stores