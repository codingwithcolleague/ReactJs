import React from "react"

class ClassSatate extends React.Component {
    constructor(){
        super()
        this.updateName = this.updateName.bind(this)
        this.state = { name:'Sonu'}
    }

    updateName(){
        this.setState({ name:'Rahul' })
    }

    render(){
        return (
            <div>
                <h1> Hello { this.state.name } </h1>
                <button onClick={this.updateName}  > Click Here </button>
            </div>)
    }
}

export default ClassSatate