import './ButtonPay.sass'
import { useDispatch } from 'react-redux'
import classNames from 'class-names'
import { incrementByAmount } from '../Balance/BalanceSlice.js'

const ButtonPay = ({ amount, phones, toast }) => {
	const dispatch = useDispatch()
	const handleButtont = (event) => {
		if (!amount > 0 || phones.length < 15) {
			toast('danger')
			return
		}

		const ansewr = new Promise((resolve, reject) => {
			Math.random() < 0.5 ? resolve() : reject()
		})
			.then(() => {
				dispatch(incrementByAmount(Number(amount)))
				toast('success')
			})
			.catch(() => toast('danger'))
		// dispatch(incrementByAmount(Number(amount)))
		// toast('success')
	}

	return (
		<div className={classNames({ button_pay: true })}>
			<button onClick={handleButtont}>PAY</button>
		</div>
	)
}
export default ButtonPay
