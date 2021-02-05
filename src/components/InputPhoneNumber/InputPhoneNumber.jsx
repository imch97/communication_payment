import './InputPhoneNumber.sass'
import { useState, useEffect } from 'react'
import classNames from 'class-names'

const normalizeInput = (value, previousValue) => {
	if (!value) return value

	const currentValue = value.replace(/[^\d]/g, '')
	const currentValueLength = currentValue.length
	// ---------
	if (currentValueLength < previousValue.length && currentValueLength < 4)
		return currentValue

	if (currentValueLength < previousValue.length && currentValueLength < 7)
		return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3)}`

	if (currentValueLength < previousValue.length && currentValueLength < 9)
		return `(${currentValue.slice(0, 3)}) ${currentValue.slice(
			3,
			6
		)}-${currentValue.slice(6, 8)}`

	if (currentValueLength < previousValue.length)
		return `(${currentValue.slice(0, 3)}) ${currentValue.slice(
			3,
			6
		)}-${currentValue.slice(6, 8)}-${currentValue.slice(8, 10)}`
	// ---------
	if (!previousValue || value.length > previousValue.length) {
		if (currentValueLength < 4) return currentValue

		if (currentValueLength < 7)
			return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3)}`

		if (currentValueLength < 9)
			return `(${currentValue.slice(0, 3)}) ${currentValue.slice(
				3,
				6
			)}-${currentValue.slice(6, 8)}`

		return `(${currentValue.slice(0, 3)}) ${currentValue.slice(
			3,
			6
		)}-${currentValue.slice(6, 8)}-${currentValue.slice(8, 10)}`
	}
}

const InputPhoneNumber = ({ updatePhone }) => {
	const [phoneNumber, setPhoneNumber] = useState('')
	const [error, setError] = useState('')

	const handleChange = (event) => {
		setPhoneNumber(normalizeInput(event.target.value, phoneNumber))
		validateInput(phoneNumber)
	}

	useEffect(() => {
		updatePhone(phoneNumber)
	}, [updatePhone, phoneNumber])

	const validateInput = (value) => {
		if (!value) setError('Required!')
		else if (value.length !== 15)
			setError('Invalid phone format. ex: (900) 123-45-67')
		else if (value.length === 15) setError('')
	}

	return (
		<div className={classNames({ input_phone_number: true })}>
			<input
				type="tel"
				required
				value={phoneNumber || ''}
				onChange={(e) => handleChange(e)}
				placeholder="(900) 123-45-67"
			/>
			{error && <p className="errors">{error}</p>}
		</div>
	)
}

export default InputPhoneNumber
