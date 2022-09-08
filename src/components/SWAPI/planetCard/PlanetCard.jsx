import { Component } from "react";
import css from "./style.module.scss";

class PlanetCard extends Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         name: this.props.name,
    //         population: this.props.population
    //     }
    // }
    render(){
        return(this.props.climate && this.props.name && (
            <div className={css.planetCard}>
                <h3>{this.props.name}</h3>
                <p><span>Rotation period: </span> {this.props.climate}</p>
            </div>)
        )
    }
}

export default PlanetCard;