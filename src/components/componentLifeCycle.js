import React, { Component } from 'react'

class ComponentLifeCycle extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         didMountCount : 0,
         willMountCount : 0,
         count : 0
      }
    }

    componentWillMount(){
        alert("Component Mounting Started.....")
        this.setState({
            willMountCount : 1
        })
    }

    componentDidMount(){
        alert("Component Mounting Completed....")
        this.setState({
            didMountCount : 1
        })
    }

    increaseCount(){
        this.setState({
            count : 4
        })
    }

    shouldComponentUpdate(){
        alert("Condition Checking for Updation.....")
        if(this.props.roleName == "STUDENT"){
            return false;
        } else if(this.props.roleName == "STAFF"){
            return true;
        }

    }

    render() {
        return (
            <>
                <h2>ComponentLifeCycle</h2>
                <h4>Will Mount : {this.state.willMountCount}</h4>
                <h4>Did Mount : {this.state.didMountCount}</h4>
                <h4>Count : {this.state.count}</h4>
                <button onClick={this.increaseCount.bind(this)}>Increase</button>
            </>
        )
    }

    componentWillUpdate(){
        alert("Component Update Started......")
    }

    componentDidUpdate(){
        alert("Component Updated Completed......")
    }

    componentWillUnmount(){
        alert("Component Destroyed.....")
    }

    
}

export default ComponentLifeCycle