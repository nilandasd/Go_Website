//GAME LOGIC FOR GO
const getGroup = (row, col, board) => {
    const groupColor = board[row][col];
    const group = [];

    const search = (r, c) => {
        if (
            r < 0 ||
            c < 0 ||
            board.length < r ||
            board.length < c  ||
            group.find(index => index[0] === r && index[1] === c) ||
            board[r][c] !== groupColor
        ) {
            return;
        } else {
            group.push([r,c]);
        }
        search(board[r-1][c]);
        search(board[r+1][c]);
        search(board[r][c-1]);
        search(board[r][c+1]);
    }

    search(row, col);

    return [group, groupColor]
}

const getAllGroups = (board) => {
    const groups = [];
    const searchedIndexes = new Set();
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board.length; col++) {
            if (!searchedIndexes.has(`${row}${col}`)) {
                const result = getGroup(row, col, board);
                result[0].forEach((i) => searchedIndex.add(`${i[0]}${i[1]}`));
                groups.push(result);
            }
        }
    }
    return groups;
}

const alive = (group, board) => {
    for(let i = 0; i< group.length; i++){
        let row, col = group[i];
        if(col - 1 >= 0 && board[col - 1][col] === 0) 
            return true;
        if (col - 1 >= 0 && board[col][col - 1] === 0) 
            return true;
        if (col + 1 < board.length && [col + 1][col] === 0)
            return true;
        if (col + 1 < board.length && board[col][col + 1] === 0)
            return true;
    }
    return false;
}

const capturePieces = (gameState) => {
    //Eventually add logic that allow so called capturing from "suicide moves"
    const deadGroups = getAllGroups(gameState.board).filter(
        (group) => group[1] !== 0 && alive(group[0])
    );

    deadGroups.forEach((group) => {
          if (group[1] === 1) {
              gameState.blackCaptures += group[0].length;
          } else {
              gameState.whiteCaptures += group[0].length;
          }
          group.forEach((i) => (gameState.board[i] = 0));
    });
};

const gameOver = (board) => {
    const emptyGroups = getAllGroups(board).filter(group => group[1] === 0);

    let stopFlag = false;
    emptyGroups.forEach(group => {
        let groupOwner = group[1];
        group[0].forEach(index =>{
            let row, col = index;
            if (row - 1 >= 0 && board[row - 1][col] !== 0)
                if (groupOwner === 0) 
                    groupOwner = board[row - 1][col];
                else if (groupOwner !== board[row - 1][col]) {
                    stopFlag = true;
                    break;
                }
                    
            if (col - 1 >= 0 && board[row][col - 1] !== 0)
                if (groupOwner === 0) 
                    groupOwner = board[row][col - 1];
                else if (groupOwner !==  board[row][col - 1]) {
                    stopFlag = true;
                    break;
                }

            if (row + 1 < board.length && board[row + 1][col] !== 0)
                if (groupOwner === 0) 
                    groupOwner = board[row + 1][col];
                else if (groupOwner !== board[row + 1][col]) {
                    stopFlag = true;
                    break;
                }

            if (col + 1 < board.length && board[row][col + 1] !== 0)
                if (groupOwner === 0) 
                    groupOwner = board[row][col + 1];
                else if (groupOwner !== board[row][col + 1]) {
                    stopFlag = true;
                    break;
                }


        });
        if(stopFlag)
            break;
    })

    if(stopFlag)
        return false;
    else
        return true;
}

const updateGame = (gameState, move) => {
    if(move === "pass") {
        gameState.turn = "white";
        gameState.moves += 1;
        return;
    }
        
    if(gameState.turn === "black"){
        gameState.board[move[0]][move[1]] = 1;
        gameState.turn = "white";
        gameState.moves += 1;
    } else {
        gameState.board[move[0]][move[1]] = 2;
        gameState.turn = "black";
        gameState.moves += 1;
    }
    
    capturePieces(gameState);
    
    if(gameOver(gameState)){
        gameState.winner = calculateWinner(gameState);
        gameState.status = "finished";
    }
}