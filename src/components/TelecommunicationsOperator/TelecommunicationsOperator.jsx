import './TelecommunicationsOperator.sass'
import classNames from 'class-names'
import { useState, useEffect } from 'react'
import Select from 'react-select'

const options = [
	{
		value: 'MegaFon',
		label: (
			<div>
				<img
					src={'/images/link_operator/megafon.svg'}
					height="30px"
					alt="megafon"
				/>
			</div>
		),
	},
	{
		value: 'MTS',
		label: (
			<div>
				<img src={'/images/link_operator/mts.svg'} height="30px" alt="mts" />
			</div>
		),
	},
	{
		value: 'BeeLine',
		label: (
			<div>
				<img
					src={'/images/link_operator/beeline.svg'}
					height="30px"
					alt="beeline"
				/>
			</div>
		),
	},
]

const customStyles = {
	menu: (provided, state) => ({
		...provided,
		width: state.selectProps.width,
		borderBottom: '1px dotted pink',
		color: state.selectProps.menuColor,
		// padding: 20,
	}),

	option: (provided, state) => {
		const backgroundColor = state.isSelected ? '#c7c7c7' : 'white'

		return { ...provided, backgroundColor }
	},

	control: (_, { selectProps: { width } }) => ({
		width: width,
		display: 'flex',
		// justifyContent: 'center',
	}),

	valueContainer: (provided, state) => {
		const justifyContent = 'center'
		return { ...provided, justifyContent }
	},

	singleValue: (provided, state) => {
		const opacity = state.isDisabled ? 0.5 : 1
		const transition = 'opacity 300ms'

		return { ...provided, opacity, transition }
	},
}

const TelecommunicationsOperator = ({ updateOperator }) => {
	const [selectedOption, setSelectedOption] = useState(options[0])

	const handleChange = (selectedOption) => {
		setSelectedOption(selectedOption)
	}

	useEffect(() => {
		updateOperator(selectedOption.value)
	}, [updateOperator, selectedOption])

	return (
		<div className={classNames({ telecommunucations_operator: true })}>
			<Select
				styles={customStyles}
				value={selectedOption}
				options={options}
				onChange={handleChange}
				placeholder="Выбирете оператора"
				width="150px"
			/>
		</div>
	)
}

export default TelecommunicationsOperator
