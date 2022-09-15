import Header from "./components/header"
import Footer from "./components/footer"

class AppContainer extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<div className="content">
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default AppContainer