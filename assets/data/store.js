import { configureStore } from '@reduxjs/toolkit'
import cityReducer from '@/assets/reducers/citySlice'
import loginReducer from '@/assets/reducers/loginSlice'

export default configureStore({
  reducer: {
    city: cityReducer,
    login: loginReducer,
  },
})