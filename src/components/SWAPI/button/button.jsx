import { Component } from "react";
import css from "./style.module.scss";

class Button extends Component{
    constructor(props){
        super(props);
        this.handlerClick = this.handlerClick.bind(this);
    }
    render(){
        return(
            <>
                <button className={css.button} onClick={this.handlerClick} type="button">{this.props.text}</button>
            </>
        )
    }
    handlerClick(){
        this.props.callback(this.props.arguments);
    }
}

export default Button;

