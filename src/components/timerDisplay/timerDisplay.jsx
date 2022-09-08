import { Component } from "react";
import css from "./style.module.css";

class TimerDisplay extends Component{
    render(){
        return(
            <div className={css.container}>
                <span className={css.numpberSpan}>{(this.props.value - this.props.value % 10) / 10}</span>
                <span className={css.numpberSpan}>{this.props.value % 10}</span>
            </div>  
        )
    }
}

export default TimerDisplay;