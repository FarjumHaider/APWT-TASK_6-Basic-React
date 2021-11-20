
import { Component } from "react/cjs/react.production.min";

class Contact extends Component{
    constructor(){
        super()
        this.state = {
            message: 'Welcome to Contact page'
        }
    }
    changeMessage(){
        this.setState({
            message: 'Thanks for clicking'
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>Click</button>               
            </div>

        )
    }
}



export default Contact;