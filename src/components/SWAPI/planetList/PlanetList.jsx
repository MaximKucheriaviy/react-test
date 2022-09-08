import { Component } from "react";
import css from "./style.module.scss";
import PlanetCard from "../planetCard/PlanetCard";
import Button from "../button/button";

class PlanetList extends Component{
    constructor(props){
        super(props);
        this.state = {
            listOfPerson: [],
            prewPage: "",
            nextPage: ""
        }
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
    }

    componentDidMount(){
        this.props.enableLoading();
        const url = 'https://swapi.dev/api/planets/?page=1';
        fetch(url)
        .then(response => response.json())
        .then(data => {
            this.setState({
                current: url,
                listOfPerson: data.results,
                prewPage: data.previous,
                nextPage: data.next
            })
        })
        .finally(() => {
            this.props.disableLoading();
        })
    }

    render(){
        return(
            <section>
                <h2>Planets</h2>
                <ul className={css.listOfPerson}>
                    {this.state.listOfPerson.map(item => {
                        return(
                            <li key={item.name} onClick={this.showInfo.bind({props: this.props, url: item.url})}>
                                <PlanetCard name={item.name} climate={item.rotation_period}/>
                            </li>
                        )
                    })}
                </ul>
                <Button text="Previous" callback={this.previousPage}/>
                <Button text="Next" callback={this.nextPage}/>
            </section>
        )
    }
    nextPage(){
        if(this.state.nextPage){
            this.props.enableLoading();
            fetch(this.state.nextPage)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    listOfPerson: data.results,
                    prewPage: data.previous,
                    nextPage: data.next
                })
            })
            .finally(() => {
                this.props.disableLoading();
            })
        }
    }
    previousPage(){
        if(this.state.prewPage){
            this.props.enableLoading();
            fetch(this.state.prewPage)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    listOfPerson: data.results,
                    prewPage: data.previous,
                    nextPage: data.next
                })
            })
            .finally(() => {
                this.props.disableLoading();
            })
        }
    }
    showInfo(){
        const prePage = this.props.mainState.prewioursPage;
        prePage.push({
            pageUrl: this.props.mainState.pageUrl,
            pageType: this.props.mainState.pageType,
        })
        this.props.setMainState({
            pageUrl: this.url,
            pageType: "PlanetInfo",
            prewioursPage: prePage
        })
    }
}

export default PlanetList; 