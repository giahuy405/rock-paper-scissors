import Swal from 'sweetalert2'

const initialState = {
    listBet: [
        { ma: 'keo', img: "./assets/keo.png", bet: true },
        { ma: 'bao', img: "./assets/bao.png", bet: false },
        { ma: 'bua', img: "./assets/bua.png", bet: false },
    ],
    result: '',
    gameWin: 0,
    totalGame: 0,
    computer: { ma: 'bua', img: "./assets/bua.png" },
}

export const TuXiReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case "BET": {
            let listBet = [...state.listBet];
            listBet = listBet.map(item => {
                if (payload.ma === item.ma) {
                    return { ...item, bet: true }
                }
                return { ...item, bet: false };
            })

            return { ...state, listBet }
        }
        case "PLAY": {
            let randomNumber = Math.floor(Math.random() * 3);
            state.computer = state.listBet[randomNumber];

            return { ...state };
        }
        case "END": {
            let player = state.listBet.find(item => item.bet);
            console.log(player)
            let computer = state.computer.ma;
            state.totalGame++
            switch (player.ma) {
                case "bua": {
                    if (computer === 'bua') {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'warning',
                            title: 'Anh m nhường đấy 😎',
                            showConfirmButton: false,
                            timer: 1400
                        })
                        state.result = 'HÒA 😎!!!';
                    }
                    else if (computer === 'keo') {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Mấy này cơ bản 😙',
                            showConfirmButton: false,
                            timer: 1400
                        })
                        state.result = "THẮNG 🤣!!!";

                        state.gameWin++
                    }
                    else {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'error',
                            title: 'Nhường 1 ván đó 😤',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        state.result = "THUA 😭 "
                    }
                } break;
                case "keo": {
                    if (computer === 'bua') {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'error',
                            title: 'Mới khởi động thôi 😤',
                            showConfirmButton: false,
                            timer: 1400
                        })
                        state.result = "THUA 😭 "
                    }
                    else if (computer === 'keo') {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'warning',
                            title: 'Anh m nhường đấy 😎',
                            showConfirmButton: false,
                            timer: 1400
                        })
                        state.result = 'HÒA 😎!!!';
                    }
                    else {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Game là dễ 😝',
                            showConfirmButton: false,
                            timer: 1400
                        })
                        state.result = "THẮNG 🤣!!!"
                        state.gameWin++
                    }
                } break;
                default:
                    if (computer === 'bua') {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Đừng bao giờ <br> coi thường người khác 🤣',
                            showConfirmButton: false,
                            timer: 1400
                        })
                        state.result = "THẮNG 🤣!!!"
                        state.gameWin++
                    }
                    else if (computer === 'keo') {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'error',
                            title: 'Loose 😭',
                            showConfirmButton: false,
                            timer: 1400
                        })
                        state.result = "THUA 😭 "
                    }
                    else {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'warning',
                            title: 'Anh m nhường đấy 😎',
                            showConfirmButton: false,
                            timer: 1400
                        })
                        state.result = 'HÒA 😎!!!';
                    }
            }
            return { ...state };
        }
        default:
            return state
    }
}
