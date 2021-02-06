function streetFighterSelection(fighters, position, moves) {
    const resultArr = []
    const arrFighters = fighters[0].concat(fighters[1])
    for (let i = 0; i < moves.length; ++i) {
        let currMove;
        let currPosition = position
        if (moves[i] === 'up' && currPosition[0] !== 0) {
            currPosition[0] = currPosition[0] - 1
        }
        if (moves[i] === 'down' && currPosition[0] !== 1) {
            currPosition[0] = currPosition[0] + 1
        }
        if (moves[i] === 'right') {
            currPosition[1] = currPosition[1] + 1
            if (currPosition[1] === 6) {
                currPosition[1] = 0
            }
        }
        if (moves[i] === 'left') {
            currPosition[1] = currPosition[1] - 1
            if (currPosition[1] === -1) {
                currPosition[1] = 5
            }
        }
        resultArr.push(arrFighters[currPosition[0] * 6 + currPosition[1]])

    }
    console.log(resultArr)
}

const fighters = [
    ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
    ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
]
let moves = ['right', 'down', 'left', 'left', 'left', 'left', 'right']
const initial_position = [0, 0]
streetFighterSelection(fighters, initial_position, moves)