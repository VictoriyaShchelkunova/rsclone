import React, { Component } from "react";
import { Timer } from "./Timer";

export default class TimeCounter extends Component {
    constructor(props){
        super(props);
        this.state = {
            seconds: 0,
            minutes: 0
        }
    }
    componentDidMount() {
        
        let timer = setInterval(() => {
            if(!this.props.isTimer) {
                clearInterval(timer);
            } else {
                let minutes = this.state.minutes;
                let seconds = this.state.seconds;
                if(seconds === 59) {
                    seconds = -1;
                    minutes += 1;
                };
                this.setState(() => {
                    return {
                        seconds: seconds + 1,
                        minutes: minutes,
                    }
                }) 
            }            
        }, 1000);
        
    }

    render() {
        return (
            <div className="timer">
               <Timer minutes={this.state.minutes} seconds={this.state.seconds}/>
            </div>
        );
    }
}