import './Balance.sass'
import classNames from 'class-names'
import { useSelector } from 'react-redux'
import { selectBalance } from './BalanceSlice.js'

const Balance = () => {
	const balace = useSelector(selectBalance)

	return (
		<div className={classNames({ balance: true })}>
			<label className={classNames({ balace_label: true })}>
				Balance: {balace}
			</label>
		</div>
	)
}
export default Balance
