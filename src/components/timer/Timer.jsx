import { Component } from "react";
import TimerDisplay from "../timerDisplay/timerDisplay";

class Timer extends Component{
    constructor(props){
        super(props);
        this.state = {
            time: new Date()
        }
    }
    componentDidMount(){
        this.ProcessID = this.stepper();
    }
    render(){
        return (
            <div>
                <TimerDisplay value={this.state.time.getHours()}/>:
                <TimerDisplay value={this.state.time.getMinutes()}/>:
                <TimerDisplay value={this.state.time.getSeconds()}/>
            </div>
        )
    }
    stepper(){
        return (setInterval(() => {
            this.setState({
                time: new Date()
            })
        }, 1000))
    }
}

export default Timer;