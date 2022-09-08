import { Component } from 'react';
//import css from './PeopleInfo.module.scss';

class PlanetInfo extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    componentDidMount(){
        this.props.enableLoading();
        fetch(this.props.mainState.pageUrl)
        .then(response => response.json())
        // .then(data => this.getFilm(data))
        .then(data => this.getPeople(data))
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
                        <span>rotation_period: </span> {this.state.rotation_period}
                    </li>
                    <li>
                        <span>orbital_period: </span> {this.state.orbital_period}
                    </li>
                    <li>
                        <span>climate: </span> {this.state.climate}
                    </li>
                    <li>
                        <span>gravity: </span> {this.state.gravity}
                    </li>
                    <li>
                        <span>terrain: </span> {this.state.terrain}
                    </li>
                    <li>
                        <span>surface_water: </span> {this.state.surface_water}
                    </li>
                    <li>
                        <span>population: </span> {this.state.population}
                    </li>
                    <li>
                        <span>residents: </span> {this.state.residents && this.state.residents.map(item => <button key={item.name} type='button' onClick={this.peopleClickHendler.bind({props: this.props, url: item.url})}>{item.name}</button>)}
                    </li>
                    {/* <li>
                        <span>films: </span> {this.state.films}
                    </li> */}
                </ul>
            </section>
        )
    }
    async getPeople(data){
        const result = await Promise.all(data.residents.map(item => {
            return fetch(item)
            .then(response => response.json())
         }));
         data.residents = result;
         return data;
    }
    // async getFilm(data){
    //      const result = await Promise.all(data.films.map(item => {
    //         return fetch(item)
    //         .then(response => response.json())
    //         .then(data => data.title)
    //      }));
    //      data.films = result.join(", "); 
    //      return data;
    // }
    peopleClickHendler(){
        const prePage = this.props.mainState.prewioursPage;
        prePage.push({
            pageUrl: this.props.mainState.pageUrl,
            pageType: this.props.mainState.pageType,
        })
        this.props.setMainState({
            pageUrl: this.url,
            pageType: "PeopleInfo",
            prewioursPage: prePage
        })
    }
}

export default PlanetInfo;