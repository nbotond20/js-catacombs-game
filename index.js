/* 
!IMPORTANT
TODO Green circle css 
TODO Implement saving/loading
TODO Animation (cells/players)
TODO Next treasure selection
TODO Treasure sticking to cell
*/

/* CELL TYPES */
const oneWayLR = {
    T: 0,
    B: 0,
    L: 1,
    R: 1,
    img: "svg/1wayLR.svg",
};
const oneWayTB = {
    T: 1,
    B: 1,
    L: 0,
    R: 0,
    img: "svg/1wayTB.svg",
};
const twoWayLB = {
    T: 0,
    B: 1,
    L: 1,
    R: 0,
    img: "svg/2wayLB.svg",
};
const twoWayRB = {
    T: 0,
    B: 1,
    L: 0,
    R: 1,
    img: "svg/2wayRB.svg",
};
const twoWayTL = {
    T: 1,
    B: 0,
    L: 1,
    R: 0,
    img: "svg/2wayTL.svg",
};
const twoWayTR = {
    T: 1,
    B: 0,
    L: 0,
    R: 1,
    img: "svg/2wayTR.svg",
};
const threeWayLRB = {
    T: 0,
    B: 1,
    L: 1,
    R: 1,
    img: "svg/3wayLRB.svg",
};
const threeWayTLB = {
    T: 1,
    B: 1,
    L: 1,
    R: 0,
    img: "svg/3wayTLB.svg",
};
const threeWayTLR = {
    T: 1,
    B: 0,
    L: 1,
    R: 1,
    img: "svg/3wayTLR.svg",
};
const threeWayTRB = {
    T: 1,
    B: 1,
    L: 0,
    R: 1,
    img: "svg/3wayTRB.svg",
};
const oneWays = [oneWayLR, oneWayTB];
const twoWays = [twoWayLB, twoWayTL, twoWayTR, twoWayRB];
const threeWays = [threeWayLRB, threeWayTLB, threeWayTLR, threeWayTRB];

/* TABLE / CELLS */
const randomIndexes = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 3, 3, 3, 3, 3, 3,
];
const fixCellsArr = [
    twoWayRB,
    threeWayLRB,
    threeWayLRB,
    twoWayLB,
    threeWayTRB,
    threeWayTRB,
    threeWayLRB,
    threeWayTLB,
    threeWayTRB,
    threeWayTLR,
    threeWayTLB,
    threeWayTLB,
    twoWayTR,
    threeWayTLR,
    threeWayTLR,
    twoWayTL,
];
let rndCellsArr = [];
const tableIndexes = [
    [1, 0, 1, 0, 1, 0, 1],
    [0, 0, 0, 0, 0, 0, 0],
    [1, 0, 1, 0, 1, 0, 1],
    [0, 0, 0, 0, 0, 0, 0],
    [1, 0, 1, 0, 1, 0, 1],
    [0, 0, 0, 0, 0, 0, 0],
    [1, 0, 1, 0, 1, 0, 1],
];
let table = [[], [], [], [], [], [], []];
let tableArray = [];
let nextItem;
let tempNextItem;
let availableFields = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
];

/* PLAYERS */
class Player {
    nextTreasure;
    constructor(startPosition, currentPosition, collected, treasure, img) {
        this.startPosition = startPosition;
        this.currentPosition = currentPosition;
        this.collected = collected;
        this.treasure = treasure;
        this.img = img;
    }
}

let player1Treasure = [[], [], [], [], [], [], []];
let player2Treasure = [[], [], [], [], [], [], []];
let player3Treasure = [[], [], [], [], [], [], []];
let player4Treasure = [[], [], [], [], [], [], []];

let treasures = [
    player1Treasure,
    player2Treasure,
    player3Treasure,
    player4Treasure,
];

const playerIcons = [
    "img/knight_transparent1.png",
    "img/knight_transparent2.png",
    "img/knight_transparent3.png",
    "img/knight_transparent4.png",
    "img/knight_transparent5.png",
    "img/knight_transparent6.png",
    "img/knight_transparent7.png",
];
let playerIconIndexes = [];
let players = [];
let currentPlayer = 0;
const playerSpans = [
    document.querySelector("#players1>span:nth-of-type(1)"),
    document.querySelector("#players1>span:nth-of-type(2)"),
    document.querySelector("#players2>span:nth-of-type(1)"),
    document.querySelector("#players2>span:nth-of-type(2)"),
];

let names = ["Player1", "Player2", "Player3", "Player4"];
const bannedTreasurePlaces = ["00", "06", "60", "66"];
/* DOM ELEMENTS */
const menu = document.querySelector("#menu");
const gameContainer = document.querySelector("#container");
const winPage = document.querySelector("#win");
const gameField = document.querySelector("#game");
const playerNumber = document.querySelector("#player-number");
const treasureNumber = document.querySelector("#treasure-number");
const maxTreasureValue = document.querySelector("#max-treasure");
const playerOut = document.querySelector("#player-out");
const treasureOut = document.querySelector("#treasure-out");
const sliders = document.querySelector("#sliders");
const startBtn = document.querySelector("#start");
const backBtn = document.querySelector("#back");
const backBtn2 = document.querySelector("#back2");
const cells = document.querySelectorAll(".cell");
const fixCells = document.querySelectorAll(".fix");
const rndCells = document.querySelectorAll(".rnd");
const nextItemFrame = document.querySelector("#next-item");
const rotateBtn = document.querySelector("#rotate");
const upArrows = document.querySelectorAll(".up");
const leftArrows = document.querySelectorAll(".left");
const rightArrows = document.querySelectorAll(".right");
const downArrows = document.querySelectorAll(".down");
const winBackBtn = document.querySelector("#win-back");
const error = document.querySelector("#error");
const popup = document.querySelector("#popup");
const save = document.querySelector("#save");
const exit = document.querySelector("#exit");
const saveFileInput = document.querySelector("#save-file-name");
const savedGames = document.querySelector("#saved-games");
const load = document.querySelector("#load");
const saveGrid = document.querySelector("#save-grid");
const cancelBtn = document.querySelector("#cancel")

/* GAME LOOP */
const step = () => {
    drawTreasure(currentPlayer);
    drawCurrentPlayerFields();
};

function availableFieldsHandler(e) {
    if (e.target.matches(".path")) {
        let cur = players[currentPlayer];
        let nextCoordStr = cur.nextTreasure.x + "" + cur.nextTreasure.y;
        setNextTreasure(cur);
        cur.currentPosition = e.target.id;
        if (cur.currentPosition == cur.startPosition && cur.nextTreasure == 0) {
            win(names[currentPlayer] + " has won the game!");
        }
        if (cur.currentPosition == nextCoordStr) {
            cur.treasure[cur.currentPosition[1]][cur.currentPosition[0]] = 0;
            setNextTreasure(cur);
            cur.collected++;
        }

        playerSpans[currentPlayer].querySelector(
            ".collected"
        ).innerHTML = `Collected: ${cur.collected}/${treasureNumber.value}`;
        if (players[currentPlayer].nextTreasure != 0) {
            playerSpans[currentPlayer].querySelector(
                ".next-treasure"
            ).innerHTML = `x: ${cur.nextTreasure.x + 1}, y: ${
                cur.nextTreasure.y + 1
            }`;
        } else {
            let coord = genCoordFromStr(players[currentPlayer].startPosition);
            console.log(coord);
            playerSpans[currentPlayer].querySelector(
                ".next-treasure"
            ).innerHTML = `x: ${parseInt(coord.y) + 1}, y: ${
                parseInt(coord.y) + 1
            }`;
        }

        unDrawAvailableFields();
        nextPlayer();
        drawPlayers();
        step();
    }
}
/* UPDATE FUNCTIONS */
const updateMaxTreasureValue = (value) => {
    maxTreasureValue.innerHTML = 24 / value;
    treasureNumber.max = 24 / value;
    treasureNumber.value = treasureNumber.max / 2;
    updateOutPut();
};

const updateOutPut = () => {
    playerOut.innerHTML = playerNumber.value;
    treasureOut.innerHTML = treasureNumber.value;
};

/* BUTTON FUNCTIONS */
const start = () => {
    gameContainer.style.pointerEvents = "auto";
    menu.style.display = "none";
    gameContainer.style.display = "inline-flex";
    game.style.display = "block";
    backBtn.style.display = "block";
    currentPlayer = 0;
    document.querySelector("#players1 span img").classList.add("active");
    genRandomCells();
    genTable();
    drawCells();
    genPlayers();
    drawPlayerIcons();
    drawPlayers();
    step();
};

const back = () => {
    menu.style.display = "flex";
    game.style.display = "none";
    backBtn.style.display = "none";
    gameContainer.style.display = "none";
    winPage.style.display = "none";
    popup.style.display = "none";
    backBtn2.style.display = "none";
    savedGames.style.display = "none";
    document.querySelector("#players1>span:nth-of-type(1)").style.display =
        "none";
    document.querySelector("#players2>span:nth-of-type(1)").style.display =
        "none";
    document.querySelector("#players1>span:nth-of-type(2)").style.display =
        "none";
    document.querySelector("#players2>span:nth-of-type(2)").style.display =
        "none";
    let actives = document.querySelectorAll(".active");
    for (let i of actives) {
        i.classList.remove("active");
    }
    unDrawAvailableFields();
};

const cancelHandler = () => {
    gameContainer.style.pointerEvents = "auto";
    popup.style.display = "none";
}

const win = (msg) => {
    gameContainer.style.display = "none";
    winPage.style.display = "flex";
    backBtn.style.display = "none";
    winPage.querySelector("p").textContent = msg;
    winPage.querySelector("img").src = players[currentPlayer].img;
};
/* LOGIC FUNCTIONS */
const genTable = () => {
    let tempFix = [...fixCellsArr];
    let tempRnd = [...rndCellsArr];

    table = [[], [], [], [], [], [], []];
    for (let i = 0; i < tableIndexes.length; i++) {
        for (let j = 0; j < tableIndexes[i].length; j++) {
            if (tableIndexes[i][j] == 1) {
                table[i].push(tempFix.shift());
            } else {
                table[i].push(tempRnd.shift());
            }
        }
    }
    nextItem = tempRnd.shift();
};

const genRandomCells = () => {
    rndCellsArr = [];
    let currentIndex = randomIndexes.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [randomIndexes[currentIndex], randomIndexes[randomIndex]] = [
            randomIndexes[randomIndex],
            randomIndexes[currentIndex],
        ];
    }
    let rnd;
    for (let i = 0; i < randomIndexes.length; i++) {
        switch (randomIndexes[i]) {
            case 1:
                rnd = getRandomInt(oneWays.length - 1);
                rndCellsArr.push(oneWays[rnd]);
                break;
            case 2:
                rnd = getRandomInt(twoWays.length - 1);
                rndCellsArr.push(twoWays[rnd]);
                break;
            case 3:
                rnd = getRandomInt(threeWays.length - 1);
                rndCellsArr.push(threeWays[rnd]);
                break;
        }
    }
};

const genPlayers = () => {
    setTreasuresToZero();
    players = [];
    playerIconIndexes = [];
    let playerNumberValue = playerNumber.value;
    let playerTreasureValue = treasureNumber.value;
    let randomPlayerIconIndex;
    for (let i = 0; i < playerNumberValue; i++) {
        let strPos;
        let curPos;
        switch (i) {
            case 0:
                strPos = "00";
                curPos = "00";
                break;
            case 1:
                strPos = "66";
                curPos = "66";
                break;
            case 2:
                strPos = "06";
                curPos = "06";
                break;
            case 3:
                strPos = "60";
                curPos = "60";
                break;
        }
        for (let j = 0; j < playerTreasureValue; j++) {
            let tempCoord = getRandomInt(6) + "" + getRandomInt(6);
            let coord = genCoordFromStr(tempCoord);
            while (
                bannedTreasurePlaces.includes(tempCoord) ||
                treasures[i][coord.x][coord.y] == 1 ||
                treasures[i][coord.x][coord.y] == 1
            ) {
                tempCoord = getRandomInt(6) + "" + getRandomInt(6);
                coord = genCoordFromStr(tempCoord);
            }
            treasures[i][coord.x][coord.y] = 1;
        }

        /* Set player icon */
        randomPlayerIconIndex = getRandomInt(6);
        while (playerIconIndexes.includes(randomPlayerIconIndex)) {
            randomPlayerIconIndex = getRandomInt(6);
        }
        playerIconIndexes.push(randomPlayerIconIndex);
        let tempPlayer = new Player(
            strPos,
            curPos,
            0,
            treasures[i],
            playerIcons[randomPlayerIconIndex]
        );
        setNextTreasure(tempPlayer);
        players.push(tempPlayer);
    }
};

const genCoordFromStr = (str) => {
    return { x: str[0], y: str[1] };
};

const rotate = () => {
    let ind;
    if (nextItem.img.includes("1")) {
        ind = oneWays.indexOf(nextItem);
        if (ind + 1 > oneWays.length - 1) {
            ind = 0;
        } else {
            ind++;
        }
        nextItem = oneWays[ind];
    } else if (nextItem.img.includes("2")) {
        ind = twoWays.indexOf(nextItem);
        if (ind + 1 > twoWays.length - 1) {
            ind = 0;
        } else {
            ind++;
        }
        nextItem = twoWays[ind];
    } else {
        ind = threeWays.indexOf(nextItem);
        if (ind + 1 > threeWays.length - 1) {
            ind = 0;
        } else {
            ind++;
        }
        nextItem = threeWays[ind];
    }
    nextItemFrame.style.backgroundImage = `url(${nextItem.img})`;
};

const slide = (e) => {
    let element = e.target;
    if (element.matches(".arrow")) {
        element = element.parentElement;
    }
    if (element.matches(".entrance")) {
        let colNum;
        let rowNum;
        if (element.matches(".top")) {
            colNum = getCol(element);
            shiftDownwards(colNum);
        } else if (element.matches(".side-l")) {
            rowNum = getRow(element);
            shiftRight(rowNum);
        } else if (element.matches(".side-r")) {
            rowNum = getRow(element);
            shiftLeft(rowNum);
        } else {
            colNum = getCol(element);
            shiftUpwards(colNum);
        }
        drawCells();
        drawPlayers();
    }
    drawCurrentPlayerFields();
    drawTreasure(currentPlayer);
};

const shiftLeft = (rowNum) => {
    tempNextItem = table[rowNum][0];
    for (let i = 0; i < table.length - 1; i++) {
        table[rowNum][i] = table[rowNum][i + 1];
    }
    table[rowNum][table[rowNum].length - 1] = nextItem;
    nextItem = tempNextItem;

    /* Shift Players */
    for (let i = 0; i < players.length; i++) {
        if (players[i].currentPosition[1] == rowNum) {
            let newPos;
            if (players[i].currentPosition[0] == 0) {
                newPos =
                    parseInt(table.length) -
                    1 +
                    "" +
                    players[i].currentPosition[1];
            } else {
                newPos =
                    parseInt(players[i].currentPosition[0]) -
                    1 +
                    "" +
                    players[i].currentPosition[1];
            }
            players[i].currentPosition = newPos;
        }
    }
    shiftTreasuresLeft(rowNum);
};
const shiftTreasuresLeft = (rowNum) => {
    for (let i = 0; i < players.length; i++) {
        let tempTreasure = players[i].treasure[rowNum][0];
        for (let j = 0; j < players[i].treasure.length - 1; j++) {
            players[i].treasure[rowNum][j] = players[i].treasure[rowNum][j + 1];
        }
        players[i].treasure[rowNum][players[i].treasure[rowNum].length - 1] =
            tempTreasure;
    }
};

const shiftRight = (rowNum) => {
    tempNextItem = table[rowNum][table[rowNum].length - 1];
    for (let i = table.length - 1; i > 0; i--) {
        table[rowNum][i] = table[rowNum][i - 1];
    }
    table[rowNum][0] = nextItem;
    nextItem = tempNextItem;

    /* Shift players */
    for (let i = 0; i < players.length; i++) {
        if (players[i].currentPosition[1] == rowNum) {
            let newPos;
            if (players[i].currentPosition[0] == table.length - 1) {
                newPos = 0 + "" + players[i].currentPosition[1];
            } else {
                newPos =
                    parseInt(players[i].currentPosition[0]) +
                    1 +
                    "" +
                    players[i].currentPosition[1];
            }
            players[i].currentPosition = newPos;
        }
    }
    shiftTreasuresRight(rowNum);
};
const shiftTreasuresRight = (rowNum) => {
    for (let i = 0; i < players.length; i++) {
        let tempTreasure =
            players[i].treasure[rowNum][players[i].treasure[rowNum].length - 1];
        for (let j = players[i].treasure.length - 1; j > 0; j--) {
            players[i].treasure[rowNum][j] = players[i].treasure[rowNum][j - 1];
        }
        players[i].treasure[rowNum][0] = tempTreasure;
    }
};

const shiftDownwards = (colNum) => {
    tempNextItem = table[table.length - 1][colNum];
    for (let i = table.length - 1; i > 0; i--) {
        table[i][colNum] = table[i - 1][colNum];
    }
    table[0][colNum] = nextItem;
    nextItem = tempNextItem;

    /* Shift players */
    for (let i = 0; i < players.length; i++) {
        if (players[i].currentPosition[0] == colNum) {
            let newPos;
            if (players[i].currentPosition[1] == table[colNum].length - 1) {
                newPos = players[i].currentPosition[0] + "" + 0;
            } else {
                newPos =
                    players[i].currentPosition[0] +
                    "" +
                    (parseInt(players[i].currentPosition[1]) + 1);
            }
            players[i].currentPosition = newPos;
        }
    }
    shiftTreasuresDownwards(colNum);
};
const shiftTreasuresDownwards = (colNum) => {
    for (let i = 0; i < players.length; i++) {
        let tempTreasure =
            players[i].treasure[players[i].treasure.length - 1][colNum];
        for (let j = players[i].treasure.length - 1; j > 0; j--) {
            players[i].treasure[j][colNum] = players[i].treasure[j - 1][colNum];
        }
        players[i].treasure[0][colNum] = tempTreasure;
    }
};

const shiftUpwards = (colNum) => {
    tempNextItem = table[0][colNum];
    for (let i = 0; i < table.length - 1; i++) {
        table[i][colNum] = table[i + 1][colNum];
    }
    table[table.length - 1][colNum] = nextItem;
    nextItem = tempNextItem;

    /* Shift players */
    for (let i = 0; i < players.length; i++) {
        if (players[i].currentPosition[0] == colNum) {
            let newPos;
            if (players[i].currentPosition[1] == 0) {
                newPos =
                    players[i].currentPosition[0] +
                    "" +
                    (parseInt(table[colNum].length) - 1);
            } else {
                newPos =
                    players[i].currentPosition[0] +
                    "" +
                    (parseInt(players[i].currentPosition[1]) - 1);
            }
            players[i].currentPosition = newPos;
        }
    }
    shiftTreasuresUpwards(colNum);
};
const shiftTreasuresUpwards = (colNum) => {
    for (let i = 0; i < players.length; i++) {
        let tempTreasure = players[i].treasure[0][colNum];
        for (let j = 0; j < players[i].treasure.length - 1; j++) {
            players[i].treasure[j][colNum] = players[i].treasure[j + 1][colNum];
        }
        players[i].treasure[players[i].treasure.length - 1][colNum] =
            tempTreasure;
    }
};

const nextPlayer = () => {
    playerSpans[currentPlayer].querySelector("img").classList.toggle("active");
    if (currentPlayer + 1 <= players.length - 1) {
        currentPlayer++;
    } else {
        currentPlayer = 0;
    }
    playerSpans[currentPlayer].querySelector("img").classList.toggle("active");
};

let a = [];
const getNeighborFields = (i, j) => {
    let l = false;
    a = [];
    if (i - 1 >= 0 && table[i][j].T == 1 && table[i - 1][j].B == 1) {
        if (availableFields[i - 1][j] != 1) {
            a.push("up");
            l = true;
        }
    }
    if (
        i + 1 <= table.length - 1 &&
        table[i][j].B == 1 &&
        table[i + 1][j].T == 1
    ) {
        if (availableFields[i + 1][j] != 1) {
            a.push("down");
            l = true;
        }
    }
    if (j - 1 >= 0 && table[i][j].L == 1 && table[i][j - 1].R == 1) {
        if (availableFields[i][j - 1] != 1) {
            a.push("left");
            l = true;
        }
    }
    if (
        j + 1 <= table[0].length - 1 &&
        table[i][j].R == 1 &&
        table[i][j + 1].L == 1
    ) {
        if (availableFields[i][j + 1] != 1) {
            a.push("right");
            l = true;
        }
    }
    return l;
};

const getAvailableFields = (x, y) => {
    availableFields = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
    ];
    let i = y;
    let j = x;
    availableFields[i][j] = 1;
    let l = 0;
    while (l < 14) {
        for (let i = 0; i < availableFields.length; i++) {
            for (let j = 0; j < availableFields[i].length; j++) {
                if (availableFields[i][j] == 1) {
                    if (getNeighborFields(i, j)) {
                        if (a.includes("up")) {
                            availableFields[i - 1][j] = 1;
                        }
                        if (a.includes("down")) {
                            availableFields[i + 1][j] = 1;
                        }
                        if (a.includes("left")) {
                            availableFields[i][j - 1] = 1;
                        }
                        if (a.includes("right")) {
                            availableFields[i][j + 1] = 1;
                        }
                    }
                }
            }
        }
        l++;
    }
};

/* DRAWING FUNCTIONS */
const drawCells = () => {
    tableArray = [];
    tableArray = matrixToArray(table);

    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundImage = `url(${tableArray[i].img})`;
    }
    nextItemFrame.style.backgroundImage = `url(${nextItem.img})`;
};

const drawTreasure = (playerID) => {
    let treasureImageCells = document.querySelectorAll(".treasure-img");
    for (let img of treasureImageCells) {
        img.remove();
    }
    setNextTreasure(players[playerID]);
    if (players[playerID].nextTreasure != 0) {
        let coord = players[playerID].nextTreasure;
        document.getElementById(
            `${coord.x + "" + coord.y}`
        ).innerHTML += `<img class="treasure-img" src="img/treasure.png">`;
    }

    if (players[playerID].nextTreasure != 0) {
        playerSpans[playerID].querySelector(".next-treasure").innerHTML = `x: ${
            players[playerID].nextTreasure.x + 1
        }, y: ${players[playerID].nextTreasure.y + 1}`;
    } else {
        let coord = genCoordFromStr(players[playerID].startPosition);
        playerSpans[playerID].querySelector(".next-treasure").innerHTML = `x: ${
            parseInt(coord.y) + 1
        }, y: ${parseInt(coord.y) + 1}`;
    }
};

const drawPlayers = () => {
    let playerImageCells = document.querySelectorAll(".player-img");
    for (let img of playerImageCells) {
        img.remove();
    }
    for (let i = 0; i < players.length; i++) {
        document.getElementById(
            `${players[i].currentPosition}`
        ).innerHTML += `<img class="player-img" src="${players[i].img}">`;
    }
};

const drawPlayerIcons = () => {
    for (let i = 0; i < players.length; i++) {
        playerSpans[i].style.display = "flex";
        playerSpans[i].querySelector("img").src = players[i].img;
        playerSpans[i].querySelector(".player-name").innerHTML = names[i];
        playerSpans[i].querySelector(
            ".collected"
        ).innerHTML = `Collected: 0/${treasureNumber.value}`;
        playerSpans[i].querySelector(".next-treasure").innerHTML = `x: ${
            players[i].nextTreasure.x + 1
        }, y: ${players[i].nextTreasure.y + 1}`;
    }
};

const drawAvailableFields = () => {
    for (let i = 0; i < availableFields.length; i++) {
        for (let j = 0; j < availableFields[i].length; j++) {
            document.getElementById(`${j + "" + i}`).classList.remove("path");
            if (availableFields[i][j] == 1) {
                document
                    .getElementById(`${j + "" + i}`)
                    .classList.toggle("path");
            }
        }
    }
};

const unDrawAvailableFields = () => {
    for (let i = 0; i < availableFields.length; i++) {
        for (let j = 0; j < availableFields[i].length; j++) {
            document.getElementById(`${j + "" + i}`).classList.remove("path");
        }
    }
};

const drawCurrentPlayerFields = () => {
    let cur = players[currentPlayer];
    let i = cur.currentPosition[0];
    let j = cur.currentPosition[1];
    getAvailableFields(i, j);
    drawAvailableFields();
};
/* HELPER FUNCTIONS */
const getRandomInt = (max) => {
    return Math.floor(Math.random() * (max - 0 + 1));
};

const matrixToArray = (arrToConvert) => {
    let newArr = [];

    for (let i = 0; i < arrToConvert.length; i++) {
        newArr = newArr.concat(arrToConvert[i]);
    }
    return newArr;
};

const getCol = (element) => {
    if (element.matches(".col1")) {
        return 1;
    } else if (element.matches(".col3")) {
        return 3;
    } else {
        return 5;
    }
};

const getRow = (element) => {
    if (element.matches(".row1")) {
        return 1;
    } else if (element.matches(".row3")) {
        return 3;
    } else {
        return 5;
    }
};

const setTreasuresToZero = () => {
    for (let i = 0; i < table.length; i++) {
        for (let j = 0; j < table[i].length; j++) {
            player1Treasure[i][j] = 0;
            player2Treasure[i][j] = 0;
            player3Treasure[i][j] = 0;
            player4Treasure[i][j] = 0;
        }
    }
};

const calcNextTreasure = (t) => {
    for (let i = 0; i < t.length; i++) {
        for (let j = 0; j < t[i].length; j++) {
            if (t[i][j] == 1) {
                return { x: j, y: i };
            }
        }
    }
    return 0;
};

const setNextTreasure = (player) => {
    player.nextTreasure = calcNextTreasure(player.treasure);
};
/* SAVING/LOADING FUNCTIONS */
const saveToLocalStorage = (name) => {
    if (name.length > 15 || name.length < 3) {
        error.innerHTML =
            "Invalid! The file name must be 3-15 characters long!";
        return false;
    }
    if (/[^A-Za-z0-9]+/.test(name)) {
        error.innerHTML = "Invalid! No special characters!";
        return false;
    }
    if (name == "") {
        error.innerHTML = "The filename cannot be empty!";
        return false;
    }
    if (!localStorage.getItem("saveNames")) {
        let saveNames = [name];
        localStorage.setItem("saveNames", JSON.stringify(saveNames));
    } else {
        let saveNames = JSON.parse(localStorage.getItem("saveNames"));
        if (saveNames.includes(name)) {
            error.innerHTML = "That file name already exists!";
            return false;
        } else {
            saveNames.push(name);
        }
        localStorage.setItem("saveNames", JSON.stringify(saveNames));
    }

    let data = [];
    data.push(table);
    data.push(players);
    data.push(nextItem);
    data.push(currentPlayer);
    data.push(name);
    let dataStr = JSON.stringify(data);
    localStorage.setItem(name, dataStr);
    return true;
};

const loadFromLocalStorage = (name) => {
    if (!name) {
        alert("A save file name must specified!");
        return false;
    }
    if (!localStorage.getItem(name)) {
        alert("There is no such save file as: '" + name + "'!");
        return false;
    }

    let dataStr = localStorage.getItem(name);
    let data = JSON.parse(dataStr);
    table = data[0].slice(0);
    players = data[1].slice(0);
    nextItem = data[2];
    currentPlayer = data[3];

    for (let i = 0; i < playerSpans.length; i++) {
        playerSpans[i].style.display = "none";
    }

    drawCells();
    drawPlayers();
    drawPlayerIcons();
    drawTreasure(currentPlayer);
    drawCurrentPlayerFields();

    /* REMOVING ELEMENT */
    /* const index = saveNames.indexOf(name);
    if (index > -1) {
        saveNames.splice(index, 1);
    }
    if (saveNames.length == 0) {
        localStorage.removeItem("saveNames");
    } else {
        localStorage.setItem("saveNames", JSON.stringify(saveNames));
    }
    localStorage.removeItem(name); */
};

const deleteFromLocalStorage = (name) => {
    let saveNames = JSON.parse(localStorage.getItem("saveNames"));
    const index = saveNames.indexOf(name);
    if (index > -1) {
        saveNames.splice(index, 1);
    }
    if (saveNames.length == 0) {
        localStorage.removeItem("saveNames");
    } else {
        localStorage.setItem("saveNames", JSON.stringify(saveNames));
    }
    localStorage.removeItem(name);
};

const deleteHandler = (e) => {
    if (e.target.matches(".delete img")) {
        deleteFromLocalStorage(e.target.id);
        loadThumbnail();
    }
};

const saveHandler = () => {
    let name = saveFileInput.value;
    if (!saveToLocalStorage(name)) {
        return;
    }
    gameContainer.style.pointerEvents = "auto";
    error.innerHTML = "";
    back();
};

const openPopup = () => {
    gameContainer.style.pointerEvents = "none";
    popup.style.display = "flex";
    error.innerHTML = "";
    saveFileInput.value = "";
    saveFileInput.disabled = false;
    save.disabled = false;
    if (localStorage.getItem("saveNames")) {
        let temp = JSON.parse(localStorage.getItem("saveNames"));
        if (temp) {
            if (JSON.parse(localStorage.getItem("saveNames")).length >= 9) {
                saveFileInput.disabled = true;
                error.innerHTML = "Storage if full!";
                save.disabled = true;
            }
        }
    }
};

const loadPageHandler = () => {
    menu.style.display = "none";
    savedGames.style.display = "flex";
    backBtn2.style.display = "flex";
    loadThumbnail();
};

const loadMapHandler = (e) => {
    if (e.target.matches("td") && e.target.innerHTML != "") {
        back();
        start();
        loadFromLocalStorage(e.target.classList[0]);
    }
};

function loadThumbnail() {
    let cellsToClear = document.querySelectorAll("#saved-games td");
    for (let e of cellsToClear) {
        e.innerHTML = "";
    }
    let saveNames;
    if (!localStorage.getItem("saveName")) {
        saveNames = JSON.parse(localStorage.getItem("saveNames"));
    } else {
        return false;
    }

    if (!saveNames) {
        return false;
    }

    for (let h = 0; h < saveNames.length; h++) {
        let data = localStorage.getItem(saveNames[h]);
        let save = document.querySelector(`#saveTD${h}`);
        save.className = "";
        save.classList.add(saveNames[h]);
        let thumbnail = document.createElement("div");
        thumbnail.classList.add("thumbnail");

        let label = document.createElement("label");
        label.innerHTML = saveNames[h];
        label.classList.add("inner-table-label");

        let delBtn = document.createElement("button");
        delBtn.classList.add("delete");
        delBtn.innerHTML = `<img id="${saveNames[h]}" src="img/trash-can.png">`;

        let tempTable = document.createElement("table");
        tempTable.classList.add("inner-table");
        for (let i = 0; i < 7; i++) {
            let tempRow = document.createElement("tr");
            for (let j = 0; j < 7; j++) {
                let tempCell = document.createElement("td");
                tempCell.classList.add(`cell-style`);
                tempCell.classList.add(`cell${h}`);
                tempCell.id = `ID${h}${j + "" + i}`;
                tempRow.append(tempCell);
            }
            tempTable.append(tempRow);
        }

        thumbnail.append(delBtn);
        thumbnail.append(tempTable);
        thumbnail.append(label);
        /* console.log(tempTable.outerHTML); */
        save.append(thumbnail);

        let tableData = JSON.parse(data)[0];
        let playerData = JSON.parse(data)[1];
        let cells2 = document.querySelectorAll(`.thumbnail .cell${h}`);

        tableArray = [];
        tableArray = matrixToArray(tableData);

        for (let i = 0; i < cells2.length; i++) {
            cells2[i].style.backgroundImage = `url(${tableArray[i].img})`;
        }
        for (let i = 0; i < playerData.length; i++) {
            document
                .getElementById(`ID${h}${playerData[i].currentPosition}`)
                .classList.add(`inner-player${i}`);
        }
    }
}
/* EVENT LISTENERS */
sliders.addEventListener("input", updateOutPut);
startBtn.addEventListener("click", start);
backBtn.addEventListener("click", openPopup);
rotateBtn.addEventListener("click", rotate);
game.addEventListener("click", slide);
game.addEventListener("click", availableFieldsHandler);
winBackBtn.addEventListener("click", back);
exit.addEventListener("click", back);
save.addEventListener("click", saveHandler);
savedGames.addEventListener("click", deleteHandler);
load.addEventListener("click", loadPageHandler);
backBtn2.addEventListener("click", back);
saveGrid.addEventListener("click", loadMapHandler);
cancelBtn.addEventListener("click", cancelHandler);