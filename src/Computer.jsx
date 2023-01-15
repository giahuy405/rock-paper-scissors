import React, { Component } from 'react';
import { connect } from "react-redux";
class Computer extends Component {
    render() {
        const {computer} = this.props;
        let keyframe = `@keyframes randomItem${Date.now()}{
            0% {top:-50px},
            25% {top:500px},
            50% {top:-50px},
            75% {top:500px},
            100% {top:0},
        }`
        return (
            <div>
                <style>
                    {keyframe}
                </style>
                <div className="think" style={{position:"relative"}}>
                    <img style={{position:"absolute",left:"34%",animation:`randomItem${Date.now()} 0.5s`}} className='mt-3' width={70} src={computer.img} alt="" />
                </div>
                <div className="speech-bubble"></div>
                <img className='ThePlayer' width={180} src="./assets/playerComputer.png" alt="" />
                
            </div>
        );
    }
}

const MSTP = state => {
    return {
        computer:state.TuXiReducer.computer,
    }
}
export default connect(MSTP)(Computer)