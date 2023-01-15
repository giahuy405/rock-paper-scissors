import React, { Component } from 'react';
import { connect } from "react-redux"
class Player extends Component {
    render() {
        const { listBet, dispatch } = this.props;
        return (
            <div>
                <div className="think">
                    {listBet.map(item=>{
                        if(item.bet){
                        return <img key={item.ma} className='mt-3' width={70} src={item.img} alt={item.img} />
                        }
                    })}
                </div>
                <div className="speech-bubble"></div>
                <img width={180} className='ThePlayer' src="./assets/player.png" alt="" />
                <div className="d-flex justify-content-center ms-4 ms-md-0">

                    {listBet.map(item => {
                        let border = {};
                        if (item.bet) {
                            border = { border: "4px solid green" }
                        }
                        return (
                            <button
                                onClick={() => dispatch({
                                    type: "BET",
                                    payload: item
                                })}
                                key={item.ma} style={border} className='rounded mx-1' >
                                <img width={42} src={item.img} alt={item.img} />
                            </button>
                        )
                    })}
                </div>
            </div>
        );
    }
}

const MSTP = state => {
    return {
        listBet: state.TuXiReducer.listBet,

    }
}
export default connect(MSTP)(Player)