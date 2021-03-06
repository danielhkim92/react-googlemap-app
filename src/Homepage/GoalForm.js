import React, { Component } from 'react';

class GoalForm extends Component {
	constructor(){
		super();
		this.state  = {
			step: "",
			description: "",
		}
	this.handleStep = this.handleStep.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}

  	handleStep(event) {
    this.setState({step: event.target.value});
  	}

 	handleDescription(event) {
    this.setState({description: event.target.value});
  	}

	handleSubmit = (e) => {
		this.props.grabbingSteps(this.state.step, this.state.description);
		
	}
	render(){
	
		return(
			<div className="container">
				<div className="row col s12">
					<div className="card blue-grey darken-1">
						<div className="card-content white-text">
							<h3 className="center-align">Steps to Finishing</h3>
								<form className="center-align" onSubmit={this.handleSubmit}>
									<label>Make A Step:</label>
									<input type='text' onChange={this.handleStep} placeholder="Enroll into General Assembly"/>
									<label>Description of Step!:</label>
									<input type ='text' onChange={this.handleDescription} placeholder="Figure out how can I afford this??"/>
									<input className="black-text" type='submit' value='Submit'/>
								</form>
						</div>
					</div>
				</div>
			</div>
			)
	}
}

export default GoalForm;