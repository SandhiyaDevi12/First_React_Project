import React, { Component } from 'react'

class ControlledForm extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         firstName : null,
         lastName : null,
         age : null,
         contactNo : null,
         Email : null
      }
    }

    updateFirstName(event){
        console.log(event);
        this.setState({
            firstName : event.target.value
        })
    }

    submitForm(event){
        event.preventDefault();
        console.log(this.state.firstName+" "+this.state.lastName);
    }

    render() {
        return (
            <>
                <h2>Controlled Form</h2>
                <form>
                    <div>
                        <label>First Name : </label>
                        <input type='text' name='firstName' onChange={this.updateFirstName.bind(this)} />
                    </div>
                    <div>
                        <label>Last Name : </label>
                        <input type='text' name='lastName' onChange={ (event) => { this.setState({ lastName : event.target.value }) } } />
                    </div>
                    <button onClick={this.submitForm.bind(this)}>Submit</button>
                </form>
            </>
        )
    }
}

export default ControlledForm