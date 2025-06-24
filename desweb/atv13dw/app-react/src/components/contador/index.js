import React from 'react'
import './style.css'

export default class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: this.props.value
        }
    }

    addVal = (v) =>{
        this.setState({
            value: parseInt(this.state.value) + v
        })
    }

    render() {
        return(
            <div>
                <hr />
                <button onClick={() => this.addVal(-1)} className="botao">-</button>
                <h1 style={{display: 'inline'}}>{this.state.value}</h1>
                <button onClick={() => this.addVal(1)} className="botao">+</button>
                <hr />
            </div>
        )
    }
}