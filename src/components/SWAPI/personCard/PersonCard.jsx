import { Component } from "react";
import css from "./style.module.scss";

class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: this.props.name,
            gender: this.props.gender
        }
    }
    // componentDidMount(){
    //     const url = 'https://swapi.dev/api/people/1/';
    //     fetch(url)
    //     .then(response => response.json())
    //     .then(data => {
    //         this.setState({
    //             name: data.name,
    //             gender: data.gender
    //         })
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })
    // }
    render(){
        return(this.state.gender && this.state.name && (
            <div className={css.personCard}>
                <h3>{this.state.name}</h3>
                <p><span>Gender:</span> {this.state.gender}</p>
            </div>)
        )
    }
}

export default PersonCard;