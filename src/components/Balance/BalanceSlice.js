import { createSlice } from '@reduxjs/toolkit'

export const BalanceSlice = createSlice({
	name: 'balance',
	initialState: {
		value: 0,
	},
	reducers: {
		incrementByAmount: (state, action) => {
			state.value += action.payload
		},
	},
})

export const selectBalance = (state) => state.balance.value

export const { incrementByAmount } = BalanceSlice.actions

export default BalanceSlice.reducer
