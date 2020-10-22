import React from 'react';
import {client} from './client'

class App extends React.Component {
	
	state = {
		articles : []
	}

	componentDidMount () {
		client.getEntries().then((response) => {
			console.log(response);
		}).catch(console.error)
	}
	
	render () {
		return (
			<div className="App">
				<div className="container">
					<header>
						<div className="wrapper">
							<span>React and Contentful</span>
						</div>
					</header>
					<main>
						<div className="wrapper">
							
						</div>
					</main>
				</div>
			</div>
		)
	}

}

export default App;
