import { Component } from "react";
import css from "./MainPage.module.scss";
import Button from "../button/button";

class MainPage extends Component{
    render(){
        return(
            <section className={css.mainPage}>
                <ul>
                    <li>
                        <Button text="People" callback={this.props.setPageType} arguments={1}/>
                    </li>
                    <li>
                        <Button text="Planets" callback={this.props.setPageType} arguments={2}/>
                    </li>
                </ul>
            </section>
        )
    }
}

export default MainPage;