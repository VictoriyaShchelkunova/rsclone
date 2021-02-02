import React from "react";
import "./SnakeBody.css";
import { connect } from 'react-redux';


const SnakeBody = ({bodyResultSnake}) => {
    return (
        <>
            {
                bodyResultSnake.map((fragment, index) => {
                    let background;
                    if(fragment.status) background = "yellowgreen"; 
                    return <div key={index} className={fragment.class} style={{background: background}}></div>
                })
            }
        </>
    )
}

export default connect(mapStateToProps)(SnakeBody);

function mapStateToProps(state) {
  return {
    bodyResultSnake: state.bodyResultSnake
  };
};