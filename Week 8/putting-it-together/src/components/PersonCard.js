import React, { Component} from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personAge: this.props.age 
        };
    }
    

    render(){
        const {firstName, lastName, hairColor} = this.props;    
        return (
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {this.state.personAge}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={ () => {this.setState({personAge: this.state.personAge +1})}}>Birthday Button for {firstName} {lastName}</button>

            </div>
        )

    }
}
export default PersonCard;