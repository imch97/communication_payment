import './InputAmount.sass'
import { useState, useEffect } from 'react'
import classNames from 'class-names'

const InputAmount = ({ updateAmount }) => {
	const [amount, setAmount] = useState(0)

	const handleChange = (event) => {
		setAmount(event.target.value.replace(/[^\d]/g, ''))
	}

	useEffect(() => {
		updateAmount(amount)
	}, [updateAmount, amount])

	return (
		<div className={classNames({ amount: true })}>
			<input
				required
				type="number"
				onChange={(e) => handleChange(e)}
				value={amount}
			/>
		</div>
	)
}

export default InputAmount
