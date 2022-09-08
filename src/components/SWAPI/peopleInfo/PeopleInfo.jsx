import { Component } from 'react';
//import css from './PeopleInfo.module.scss';

class PeopleInfo extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    componentDidMount(){
        this.props.enableLoading();
        fetch(this.props.mainState.pageUrl)
        .then(response => response.json())
        .then(data => this.getPlanetName(data))
        .then(data => this.getFilm(data))
        .then(data => {this.setState(data)})
        .catch(e => {console.log(e)})
        .finally(() => {this.props.disableLoading()})
    }
    render(){
        return(
            <section>
                <h2>{this.state.name}</h2>
                <ul>
                    <li>
                        <span>Height: </span> {this.state.height}
                    </li>
                    <li>
                        <span>Mass: </span> {this.state.mass}
                    </li>
                    <li>
                        <span>Skin color: </span> {this.state.skin_color}
                    </li>
                    <li>
                        <span>Eye color: </span> {this.state.eye_color}
                    </li>
                    <li>
                        <span>Birth year: </span> {this.state.birth_year}
                    </li>
                    <li>
                        <span>Gender: </span> {this.state.gender}
                    </li>
                    <li>
                        <span>Homeworld: </span> {this.state.homeworld}
                    </li>
                    <li>
                        <span>Films: </span> {this.state.films}
                    </li>
                </ul>
            </section>
        )
    }
    async getPlanetName(data){
        const response = await fetch(data.homeworld);
        const planet = await response.json();
        data.homeworld = planet.name;
        return data;
    }
    async getFilm(data){
         const result = await Promise.all(data.films.map(item => {
            return fetch(item)
            .then(response => response.json())
            .then(data => data.title)
         }));
         data.films = result.join(", "); 
         return data;
    }
}

export default PeopleInfo;