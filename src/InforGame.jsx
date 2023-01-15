import React, { Component } from 'react';
import { connect } from "react-redux"
class InforGame extends Component {
    render() {
        const { result, gameWin, totalGame } = this.props;
        return (
            <div className='infoGame'>
                <h1 className='text-warning'>{result}</h1>
                <h1
                    className='text-info'
                >Bàn thắng : <span>{gameWin}</span> </h1>
                <h1
                    className='text-primary'
                >Tổng số bàn chơi : <span>{totalGame}</span> </h1>
            </div>
        );
    }
}

const MSTP = state => {
    return {
        result: state.TuXiReducer.result,
        gameWin: state.TuXiReducer.gameWin,
        totalGame: state.TuXiReducer.totalGame,
    }
}
export default connect(MSTP)(InforGame)