import React from "react"

class Classprop extends React.Component {

    constructor(){
        super()
    }
    render(){
        return <div>
            <h1> Rahul { this.props.nam } </h1>
        </div>
    }

}

export default Classprop