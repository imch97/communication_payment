import { configureStore } from '@reduxjs/toolkit'
import BalanceSlice from './components/Balance/BalanceSlice.js'


export default configureStore({
  reducer: {
    balance: BalanceSlice
  }
})