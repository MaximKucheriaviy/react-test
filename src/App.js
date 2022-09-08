import { Component } from "react"
import css from "./app-style.module.css"

import PersonList from "./components/SWAPI/personsList/PresonList"
import LoadigScreen from "./components/loadingScreen/loadingScreen";
import MainPage from "./components/SWAPI/mainPage/MainPage";
import Header from "./components/SWAPI/header/header";
import PlanetList from "./components/SWAPI/planetList/PlanetList";
import PeopleInfo from "./components/SWAPI/peopleInfo/PeopleInfo";
import PlanetInfo from "./components/SWAPI/PlanetInfo/PlanetInfo";


class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            pageUrl: null,
            pageType: "main",
            prewioursPage: []
        }
        this.enableLoading = this.enableLoading.bind(this);
        this.disableLoading = this.disableLoading.bind(this);
        this.setPageType = this.setPageType.bind(this);
        this.setStateCallback = this.setStateCallback.bind(this);
        this.pageTypeList = [
            "main",
            "PersonList",
            "PlanetList",
            "PeopleInfo",
        ]
    }
    render(){
        return (
            <div className={css.app}>
                <Header callback={this.setStateCallback} mainState = {this.state}/>
                {this.state.pageType === "main" && <MainPage setPageType={this.setPageType}/>}
                {this.state.pageType === "PersonList" && <PersonList 
                                                            enableLoading={this.enableLoading} 
                                                            disableLoading={this.disableLoading} 
                                                            mainState = {this.state}  
                                                            setMainState = {this.setStateCallback}  
                                                        />
                }
                {this.state.pageType === "PlanetList" && <PlanetList 
                                                            enableLoading={this.enableLoading} 
                                                            disableLoading={this.disableLoading} 
                                                            mainState = {this.state}  
                                                            setMainState = {this.setStateCallback}  
                                                        />
                }
                {this.state.pageType === "PeopleInfo" && <PeopleInfo 
                                                            enableLoading={this.enableLoading} 
                                                            disableLoading={this.disableLoading}
                                                            mainState = {this.state}       
                                                            setMainState = {this.setStateCallback}                                 
                                                        />                
                }
                {this.state.pageType === "PlanetInfo" && <PlanetInfo 
                                                            enableLoading={this.enableLoading} 
                                                            disableLoading={this.disableLoading}
                                                            mainState = {this.state}       
                                                            setMainState = {this.setStateCallback}                                 
                                                        />                
                }
                                                            
                {this.state.loading && <LoadigScreen/>}
            </div>
        )
    }
    enableLoading(){
        this.setState({
            loading: true
        })
    }
    disableLoading(){
        this.setState({
            loading: false
        })
    }
    setPageType(param){
        console.log(param);
        this.setState({
            pageType: this.pageTypeList[param]
        })
    }
    setStateCallback(obj){
        this.setState(obj);
    }
}

export default App;


