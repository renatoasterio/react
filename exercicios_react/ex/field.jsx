import React, {Component} from 'react'

class Field extends Component{

    constructor(props){
        super(props);
        this.state = {value: props.initialValue};
        this.handleChange = this.handleChange.bind(this)
    }


    handleChange(event){
        this.setState({value: event.target.value})
    }

    render(){
        return(
            <div>
                <label htmlFor="txt">{this.state.value}</label>
                <input id='txt' onChange={this.handleChange} value={this.state.value} />
            </div>
        )
    }

}

export default Field