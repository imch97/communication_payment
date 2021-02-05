import './LinkPayment.sass'
import TelecommunicationsOperator from '../../TelecommunicationsOperator/TelecommunicationsOperator.jsx'
import Balance from '../../Balance/Balance.jsx'
import InputPhoneNumber from '../../InputPhoneNumber/InputPhoneNumber.jsx'
import InputAmount from '../../InputAmount/InputAmount.jsx'
import ButtonPay from '../../ButtonPay/ButtonPay.jsx'
import Toast from '../../Toast/Toast.jsx'
import classNames from 'class-names'
import { useState } from 'react'

const LinkPayment = () => {
	const [operator, setOperator] = useState()
	const [phone, setPhone] = useState()
	const [amount, setAmount] = useState()

	const [list, setList] = useState([])
	const [position, setPosition] = useState('bottom-right')
	let [checkValue, setCheckValue] = useState(true)
	const [autoDeleteTime, setAutoDeleteTime] = useState(0)
	let toastProperties = null

	const showToast = (type) => {
		const id = Math.floor(Math.random() * 101 + 1)

		switch (type) {
			case 'success':
				toastProperties = {
					id,
					title: 'Success',
					description: `Pay ${Number(amount)} on ${phone}`,
					backgroundColor: '#5cb85c',
					icon: '/images/assets/check.svg',
				}
				break
			case 'danger':
				toastProperties = {
					id,
					title: 'Danger',
					description: 'Error Pay',
					backgroundColor: '#d9534f',
					icon: '/images/assets/error.svg',
				}
				break
			case 'info':
				toastProperties = {
					id,
					title: 'Info',
					description: 'This is an info toast component',
					backgroundColor: '#5bc0de',
					// icon: infoIcon,
				}
				break
			case 'warning':
				toastProperties = {
					id,
					title: 'Warning',
					description: 'This is a warning toast component',
					backgroundColor: '#f0ad4e',
					// icon: warningIcon,
				}
				break

			default:
				setList([])
		}

		setList([...list, toastProperties])
	}

	const onCheckBoxChange = () => {
		checkValue = !checkValue
		setCheckValue(checkValue)
		setList([])
	}

	// const onInputChange = (e) => {
	// 	const time = parseInt(e.target.value, 10)
	// 	setDismissTime(time)
	// }

	return (
		<div className={classNames({ link_payment: true })}>
			<Balance toast={showToast} />

			<div className={classNames({ input_operator_phone: true })}>
				<TelecommunicationsOperator updateOperator={setOperator} />
				<InputPhoneNumber updatePhone={setPhone} />
			</div>
			<div className={classNames({ form_pay: true })}>
				<InputAmount updateAmount={setAmount} />
				<ButtonPay amount={amount} toast={showToast} phones={phone} />
			</div>
			<Toast
				toastList={list}
				position={position}
				autoDelete={checkValue}
				autoDeleteTime={autoDeleteTime}
				dismissTime={5000}
			/>
		</div>
	)
}

export default LinkPayment
