import React, {Component} from "react";
import './Result.css';
import { shuffleResults } from "./getResults";

export class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: "visible"
        }
    }
    dragStart = (e) => {
        e.preventDefault();
    }    

    mouseDown = (event) => {
        const result = event.currentTarget;
        let currentDroppable = null;

        let shiftX = event.clientX - result.getBoundingClientRect().left;
        let shiftY = event.clientY - result.getBoundingClientRect().top;

        result.style.position = 'absolute';
        result.style.zIndex = 1000;

        moveAt(event.pageX, event.pageY);

        function moveAt(pageX, pageY) {
            result.style.left = pageX - shiftX + 'px';
            result.style.top = pageY - shiftY + 'px';
        }

        const  onMouseMove = (e) =>  {
            moveAt(e.pageX, e.pageY);

            this.setState({
                hidden: "hidden"
            })
            let elemBelow = document.elementFromPoint(e.clientX, e.clientY);
            this.setState({
                hidden: "visible"
            })

            if (!elemBelow) return;

            let droppableBelow = elemBelow.closest('.droppable');
            if (currentDroppable != droppableBelow) {
                if (currentDroppable) { 
                    this.leaveDroppable(currentDroppable);
                }
                currentDroppable = droppableBelow;
                if (currentDroppable) { 
                    this.enterDroppable(currentDroppable);
                }
            }
        }

        document.addEventListener('mousemove', onMouseMove);

        result.onmouseup = function () {
            document.removeEventListener('mousemove', onMouseMove);
            result.onmouseup = null;
        };
    }
    
    enterDroppable(elem) {
        elem.style.background = 'pink';
    }

    leaveDroppable(elem) {
        elem.style.background = '';
    }

    render () {
        const result = [];
        for (let i = 0; i < 11; i++) {
            result.push(<div className="result" style={{visibility: this.state.hidden}} key={i} onDragStart={this.dragStart} onMouseDown={this.mouseDown} >
                <span>{shuffleResults[i]}</span>
            </div>);
        }
        return result;
    }
    
}




