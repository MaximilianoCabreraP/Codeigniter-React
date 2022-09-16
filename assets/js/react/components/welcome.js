
import AppContainer from "../AppContainer"
import Variable from './Variable'

const Welcome = () => {
	const variablesObject = [{
		0: {
			make: 'Ford',
			model: 'Mustang',
			year: 1969
		},
		1: {
			make: 'Ford',
			model: 'F-150',
			year: 1970
		}
	}];
	const variables = Object.values(variablesObject[0]);

	const [loading, setLoading] = React.useState(true)

	const handleLoading = () => {
		setLoading(false)
	}

	setTimeout(() => {
		handleLoading()
	}, 1);

	if (loading) return "Cargando"
	return (
		<AppContainer>
			<div>welcome</div>
			{
				variables.map((variable) => {
					return (
						<Variable
							key={variable.model}
							variable={variable}
						/>
					)
				})
			}
		</AppContainer>
	)
}

export default Welcome