//* ----------Cells----------
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

const tableIndexes = [
    [1, 0, 1, 0, 1, 0, 1],
    [0, 0, 0, 0, 0, 0, 0],
    [1, 0, 1, 0, 1, 0, 1],
    [0, 0, 0, 0, 0, 0, 0],
    [1, 0, 1, 0, 1, 0, 1],
    [0, 0, 0, 0, 0, 0, 0],
    [1, 0, 1, 0, 1, 0, 1],
];
const fixCellsArr = [
    {
        ID: 0,
        type: twoWayRB,
        treasures: [],
    },
    {
        ID: 0,
        type: threeWayLRB,
        treasures: [],
    },
    {
        ID: 0,
        type: threeWayLRB,
        treasures: [],
    },
    {
        ID: 0,
        type: twoWayLB,
        treasures: [],
    },
    {
        ID: 0,
        type: threeWayTRB,
        treasures: [],
    },
    {
        ID: 0,
        type: threeWayTRB,
        treasures: [],
    },
    {
        ID: 0,
        type: threeWayLRB,
        treasures: [],
    },
    {
        ID: 0,
        type: threeWayTLB,
        treasures: [],
    },
    {
        ID: 0,
        type: threeWayTRB,
        treasures: [],
    },
    {
        ID: 0,
        type: threeWayTLR,
        treasures: [],
    },
    {
        ID: 0,
        type: threeWayTLB,
        treasures: [],
    },
    {
        ID: 0,
        type: threeWayTLB,
        treasures: [],
    },
    {
        ID: 0,
        type: twoWayTR,
        treasures: [],
    },
    {
        ID: 0,
        type: threeWayTLR,
        treasures: [],
    },
    {
        ID: 0,
        type: threeWayTLR,
        treasures: [],
    },
    {
        ID: 0,
        type: twoWayTL,
        treasures: [],
    },
];
const rndCellsIndexes = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 3, 3, 3, 3, 3, 3,
];
let rndCellsArr = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 3, 3, 3, 3, 3, 3,
];
let table = [
    [1, 0, 1, 0, 1, 0, 1],
    [0, 0, 0, 0, 0, 0, 0],
    [1, 0, 1, 0, 1, 0, 1],
    [0, 0, 0, 0, 0, 0, 0],
    [1, 0, 1, 0, 1, 0, 1],
    [0, 0, 0, 0, 0, 0, 0],
    [1, 0, 1, 0, 1, 0, 1],
];

//* ----------Players----------
const playerIcons = [
    "img/knight_transparent1.png",
    "img/knight_transparent2.png",
    "img/knight_transparent3.png",
    "img/knight_transparent4.png",
    "img/knight_transparent5.png",
    "img/knight_transparent6.png",
    "img/knight_transparent7.png",
];
let players = [];
let names = ["Player1", "Player2", "Player3", "Player4"];

//* ----------Constants----------
const bannedTreasurePlaces = ["00", "06", "60", "66"];
const playerSpans2 = [
    document.querySelector("#players1>span:nth-of-type(1)"),
    document.querySelector("#players2>span:nth-of-type(1)"),
    document.querySelector("#players1>span:nth-of-type(2)"),
    document.querySelector("#players2>span:nth-of-type(2)"),
];
const playerSpans4 = [
    document.querySelector("#players1>span:nth-of-type(1)"),
    document.querySelector("#players1>span:nth-of-type(2)"),
    document.querySelector("#players2>span:nth-of-type(1)"),
    document.querySelector("#players2>span:nth-of-type(2)"),
];
const playerSpans = [playerSpans2, playerSpans4];

//* ----------Variables----------
let playerNumber = 2;
let treasureNumber = 6;
let nextItem;
let playerIconIndexes = [];
let availableFields = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
];
let tempNextItem;
let curPlayer = 0;
let lastEntrance;
let alreadyMoved = false;

//* ----------DOM Selectors----------
const menu = document.querySelector("#menu");
const gameContainer = document.querySelector("#container");
const winPage = document.querySelector("#win");
const savedGames = document.querySelector("#saved-games");

const game = document.querySelector("#game > table");
const cells = document.querySelectorAll(".cell");
const nextItemFrame = document.querySelector("#next-item");

const saveGrid = document.querySelector("#save-grid");
const popup = document.querySelector("#popup");
const error = document.querySelector("#error");

const sliders = document.querySelector("#sliders");
const saveFileInput = document.querySelector("#save-file-name");

const startBtn = document.querySelector("#start");
const savedGamesBtn = document.querySelector("#load");
const backBtn = document.querySelector("#back");
const howToBtn = document.querySelector("#how-to");
const rotateBtn = document.querySelector("#rotate");
const winBackBtn = document.querySelector("#win-back");
const backBtn2 = document.querySelector("#back2");
const saveBtn = document.querySelector("#save");
const exitBtn = document.querySelector("#exit");
const cancelBtn = document.querySelector("#cancel");
const entrances = document.querySelectorAll(".entrance");

//* ----------Button Functions----------
const firstRun = () => {
    sliderInputHandler();
    start(playerNumber, treasureNumber);
};
const back = () => {
    menu.style.display = "flex";
    gameContainer.style.display = "none";
    backBtn.style.display = "none";
    winPage.style.display = "none";
    savedGames.style.display = "none";
    backBtn2.style.display = "none";
    popup.style.display = "none";

    gameContainer.style.pointerEvents = "auto";

    playerSpans2.forEach((x) =>
        x.querySelector("img").classList.remove("active")
    );
};
const sliderInputHandler = (e) => {
    if (e) {
        if (e.target.matches("#player-number")) {
            document.querySelector("#treasure-number").max =
                24 / e.target.value;
            document.querySelector("#max-treasure").innerHTML =
                24 / e.target.value;
            document.querySelector("#player-out").innerHTML = e.target.value;
            if (
                document.querySelector("#treasure-out").innerHTML >
                24 / e.target.value
            ) {
                document.querySelector("#treasure-out").innerHTML =
                    24 / e.target.value;
            }
        }
        if (e.target.matches("#treasure-number")) {
            document.querySelector("#treasure-out").innerHTML = e.target.value;
        }
    }

    playerNumber = document.querySelector("#player-number").value;
    treasureNumber = document.querySelector("#treasure-number").value;
};
const toggleDescription = () => {
    document.querySelector("#description > p").classList.toggle("hidden");
};
const loadSaveMenu = () => {
    menu.style.display = "none";
    savedGames.style.display = "flex";
    backBtn2.style.display = "flex";
    loadGamePreviews();
};
const openPopUp = () => {
    gameContainer.style.pointerEvents = "none";
    popup.style.display = "flex";
    error.innerHTML = "";
    saveFileInput.value = "";
    saveFileInput.disabled = false;
    saveBtn.disabled = false;
    if (localStorage.getItem("saveNames")) {
        let temp = JSON.parse(localStorage.getItem("saveNames"));
        if (temp) {
            if (JSON.parse(localStorage.getItem("saveNames")).length >= 9) {
                saveFileInput.disabled = true;
                error.innerHTML = "Storage if full!";
                saveBtn.disabled = true;
            }
        }
    }
};
const cancelPopUp = () => {
    gameContainer.style.pointerEvents = "auto";
    popup.style.display = "none";
};
const saveGame = () => {
    let name = saveFileInput.value;
    if (!saveToLocalStorage(name)) {
        return;
    }
    gameContainer.style.pointerEvents = "auto";
    error.innerHTML = "";
    back();
};
const checkInput = () => {
    let name = saveFileInput.value;
    if (name.length == 0) {
        error.innerHTML = "";
        return false;
    }
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
    error.innerHTML = "";
    return true;
};
const deleteHandler = (e) => {
    if (e.target.matches(".delete img")) {
        deleteFromLocalStorage(e.target.id);
        loadGamePreviews();
    }
};
const loadGame = (e) => {
    if (e.target.matches("td") && e.target.innerHTML != "") {
        savedGames.style.display = "none";
        loadFromLocalStorage(e.target.classList[0]);
    }
};

//* ----------Logic Functions----------
const start = (plyNumber, trsNumber) => {
    playerSpans2[0].querySelector("img").classList.toggle("active");

    curPlayer = 0;
    lastEntrance = null;
    alreadyMoved = false;

    menu.style.display = "none";
    gameContainer.style.display = "flex";
    backBtn.style.display = "block";

    playerNumber = plyNumber;
    treasureNumber = trsNumber;

    unDrawAvailableFields();
    cells.forEach((x) => {
        x.style.opacity = "1";
        /* x.classList.remove("dimmed") */
    });

    genRandomCells();
    genTable();
    drawCells();

    genPlayers();
    drawPlayers();

    genTreasures();
    drawNextTreasure(0);

    drawPlayerIcons();
    drawValidEntrances();
};
const isTreasure = (playerID) => {
    return (
        players[playerID].curPos ==
        getCellPosition(players[playerID].treasureIDs[0])
    );
};
const pickUpTreasure = (playerID) => {
    let pos = getCellPosition(players[playerID].treasureIDs[0]);

    let ind = table[pos[0]][pos[1]].treasures.indexOf(playerID);
    if (ind > -1) {
        table[pos[0]][pos[1]].treasures.splice(ind, 1);
    }

    let img = document.querySelector(".treasure-img").remove();

    players[playerID].treasureIDs.shift();
    players[playerID].collected++;
};
const checkWin = (playerID) => {
    return (
        players[playerID].treasureIDs.length == 0 &&
        players[playerID].curPos == players[playerID].startPos
    );
};
const win = (playerID) => {
    gameContainer.style.display = "none";
    backBtn.style.display = "none";
    winPage.style.display = "flex";
    winPage.querySelector(
        "p"
    ).textContent = `${players[playerID].name} has won the game!`;
    winPage.querySelector("img").src = players[playerID].img;
};
const step = () => {
    alreadyMoved = false;
    nextPlayer();
    drawPlayerIcons();
    drawNextTreasure(curPlayer);
    drawValidEntrances();
};

//* ----------Generator functions----------
const genRandomCells = () => {
    /* Shuffle rndCellArr */
    let currentIndex = rndCellsIndexes.length,
        randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [rndCellsIndexes[currentIndex], rndCellsIndexes[randomIndex]] = [
            rndCellsIndexes[randomIndex],
            rndCellsIndexes[currentIndex],
        ];
    }

    /* Replace rndCellArr elements(numbers) with cells */
    let rnd;
    for (let i = 0; i < rndCellsIndexes.length; i++) {
        let tempCell = {
            ID: 0,
            type: {},
            treasures: [],
        };
        switch (rndCellsIndexes[i]) {
            case 1:
                rnd = getRandomInt(oneWays.length - 1);
                tempCell.type = oneWays[rnd];
                rndCellsArr[i] = tempCell;
                break;
            case 2:
                rnd = getRandomInt(twoWays.length - 1);
                tempCell.type = twoWays[rnd];
                rndCellsArr[i] = tempCell;
                break;
            case 3:
                rnd = getRandomInt(threeWays.length - 1);
                tempCell.type = threeWays[rnd];
                rndCellsArr[i] = tempCell;
                break;
        }
    }
};
const genTable = () => {
    let tempRnd = [...rndCellsArr];
    let tempFix = [...fixCellsArr];
    for (let i = 0; i < tableIndexes.length; i++) {
        for (let j = 0; j < tableIndexes[i].length; j++) {
            if (tableIndexes[i][j] == 1) {
                table[i][j] = tempFix.shift();
                table[i][j].ID = i + "" + j;
            } else {
                table[i][j] = tempRnd.shift();
                table[i][j].ID = i + "" + j;
            }
        }
    }
    nextItem = tempRnd.shift();
};
const genPlayers = () => {
    players = [];
    playerIconIndexes = [];

    for (let i = 0; i < playerNumber; i++) {
        let tempPlayer = {
            name: names[i],
            startPos: "00",
            curPos: "00",
            collected: 0,
            treasureIDs: [],
            img: "",
        };

        /* Setting starting position */
        switch (i) {
            case 0:
                tempPlayer.startPos = "00";
                tempPlayer.curPos = "00";
                break;
            case 1:
                tempPlayer.startPos = "66";
                tempPlayer.curPos = "66";
                break;
            case 2:
                tempPlayer.startPos = "60";
                tempPlayer.curPos = "60";
                break;
            case 3:
                tempPlayer.startPos = "06";
                tempPlayer.curPos = "06";
                break;
        }

        /* Setting player icon */
        let randomPlayerIconIndex = getRandomInt(6);
        while (playerIconIndexes.includes(randomPlayerIconIndex)) {
            randomPlayerIconIndex = getRandomInt(6);
        }
        playerIconIndexes.push(randomPlayerIconIndex);

        tempPlayer.img = playerIcons[randomPlayerIconIndex];
        players.push(tempPlayer);
    }
};
const genTreasures = () => {
    let k;
    let h;
    for (let i = 0; i < playerNumber; i++) {
        for (let j = 0; j < treasureNumber; j++) {
            k = getRandomInt(6);
            h = getRandomInt(6);

            while (
                bannedTreasurePlaces.includes(k + "" + h) ||
                table[k][h].treasures.includes(i)
            ) {
                k = getRandomInt(6);
                h = getRandomInt(6);
            }
            table[k][h].treasures.push(i);
            players[i].treasureIDs.push(k + "" + h);
        }
    }
};

//* ----------Drawing Functions----------
const drawCells = () => {
    for (let i = 0; i < table.length; i++) {
        for (let j = 0; j < table.length; j++) {
            cells[
                i * table[i].length + j
            ].style.backgroundImage = `url(${table[i][j].type.img})`;
        }
    }
    nextItemFrame.style.backgroundImage = `url(${nextItem.type.img})`;
};
const drawPlayers = () => {
    let playerImageCells = document.querySelectorAll(".player-img");
    for (let img of playerImageCells) {
        img.remove();
    }
    for (let i = 0; i < players.length; i++) {
        document.getElementById(
            `${players[i].curPos}`
        ).innerHTML += `<img class="player-img" src="${players[i].img}">`;
    }
};
const drawNextTreasure = (playerID) => {
    /* Remove Previous Treasures */
    let treasureImageCells = document.querySelectorAll(".treasure-img");
    for (let img of treasureImageCells) {
        img.remove();
    }

    if (players[playerID].treasureIDs.length != 0) {
        let pos = getCellPosition(players[playerID].treasureIDs[0]);
        if (pos != -1) {
            document.getElementById(
                `${pos[0] + "" + pos[1]}`
            ).innerHTML += `<img class="treasure-img" src="img/treasure.png">`;
        } else {
            document.getElementById(
                `next-item`
            ).innerHTML += `<img class="treasure-img" src="img/treasure.png">`;
        }
    }
};
const drawAvailableFields = () => {
    unDrawAvailableFields();
    for (let i = 0; i < availableFields.length; i++) {
        for (let j = 0; j < availableFields[i].length; j++) {
            if (availableFields[i][j] == 1) {
                document
                    .getElementById(`${i + "" + j}`)
                    .classList.toggle("path");
            }
        }
    }
};
const unDrawAvailableFields = () => {
    let pathFields = document.querySelectorAll(".path");
    for (let field of pathFields) {
        field.classList.remove("path");
    }
};
const drawPlayerIcons = () => {
    let spans;
    if (playerNumber <= 2) {
        spans = playerSpans[0];
    } else {
        spans = playerSpans[1];
    }

    for (let span of spans) {
        span.style.display = "none";
    }

    for (let i = 0; i < players.length; i++) {
        spans[i].style.display = "flex";
        spans[i].querySelector("img").src = players[i].img;
        spans[i].querySelector(".player-name").innerHTML = names[i];
        spans[i].querySelector(
            ".collected"
        ).innerHTML = `Collected: ${players[i].collected}/${treasureNumber}`;

        if (players[i].treasureIDs.length != 0) {
            let pos = getCellPosition(players[i].treasureIDs[0]);
            if (pos != -1) {
                spans[i].querySelector(".next-treasure").innerHTML = `x: ${parseInt(pos[1]) + 1
                    }, y: ${parseInt(pos[0]) + 1}`;
            } else {
                spans[i].querySelector(
                    ".next-treasure"
                ).innerHTML = `x: -, y: -`;
            }
        } else {
            spans[i].querySelector(".next-treasure").innerHTML = `x: ${parseInt(players[i].startPos[1]) + 1
                }, y: ${parseInt(players[i].startPos[0]) + 1}`;
        }
    }
};
const nextPlayer = () => {
    let spans;
    if (playerNumber <= 2) {
        spans = playerSpans[0];
    } else {
        spans = playerSpans[1];
    }
    spans[curPlayer].querySelector("img").classList.toggle("active");
    if (curPlayer + 1 <= players.length - 1) {
        curPlayer++;
    } else {
        curPlayer = 0;
    }
    spans[curPlayer].querySelector("img").classList.toggle("active");
};
const drawValidEntrances = () => {
    let alreadyValid = document.querySelectorAll(".valid");
    for (let valid of alreadyValid) {
        valid.classList.remove("valid");
    }

    for (let entry of entrances) {
        if (!alreadyMoved) {
            if (lastEntrance != null) {
                if (entry != getOppositeEntrance(lastEntrance))
                    entry.classList.add("valid");
            } else {
                entry.classList.add("valid");
            }
        }
    }
};

//* ----------Path Finding Functions----------
const getAvailableFields = (i, j) => {
    availableFields = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
    ];
    availableFields[i][j] = 1;
    let l = true;
    while (l) {
        l = false;
        for (let i = 0; i < availableFields.length; i++) {
            for (let j = 0; j < availableFields[i].length; j++) {
                if (availableFields[i][j] == 1) {
                    let a = getNeighborFields(i, j);
                    if (a.length != 0) {
                        if (
                            a.includes("up") &&
                            availableFields[i - 1][j] != 1
                        ) {
                            availableFields[i - 1][j] = 1;
                            l = true;
                        }
                        if (
                            a.includes("down") &&
                            availableFields[i + 1][j] != 1
                        ) {
                            availableFields[i + 1][j] = 1;
                            l = true;
                        }
                        if (
                            a.includes("left") &&
                            availableFields[i][j - 1] != 1
                        ) {
                            availableFields[i][j - 1] = 1;
                            l = true;
                        }
                        if (
                            a.includes("right") &&
                            availableFields[i][j + 1] != 1
                        ) {
                            availableFields[i][j + 1] = 1;
                            l = true;
                        }
                    }
                }
            }
        }
    }
};
const getNeighborFields = (i, j) => {
    let availableDirections = [];
    if (i - 1 >= 0 && table[i][j].type.T == 1 && table[i - 1][j].type.B == 1) {
        if (availableFields[i - 1][j] != 1) {
            availableDirections.push("up");
        }
    }
    if (
        i + 1 <= table.length - 1 &&
        table[i][j].type.B == 1 &&
        table[i + 1][j].type.T == 1
    ) {
        if (availableFields[i + 1][j] != 1) {
            availableDirections.push("down");
        }
    }
    if (j - 1 >= 0 && table[i][j].type.L == 1 && table[i][j - 1].type.R == 1) {
        if (availableFields[i][j - 1] != 1) {
            availableDirections.push("left");
        }
    }
    if (
        j + 1 <= table[0].length - 1 &&
        table[i][j].type.R == 1 &&
        table[i][j + 1].type.L == 1
    ) {
        if (availableFields[i][j + 1] != 1) {
            availableDirections.push("right");
        }
    }
    return availableDirections;
};

//* ----------Table Manipulation Functions----------
const rotate = () => {
    let ind;
    if (nextItem.type.img.includes("1")) {
        ind = oneWays.indexOf(nextItem.type);
        if (ind + 1 > oneWays.length - 1) {
            ind = 0;
        } else {
            ind++;
        }
        nextItem.type = oneWays[ind];
    } else if (nextItem.type.img.includes("2")) {
        ind = twoWays.indexOf(nextItem.type);
        if (ind + 1 > twoWays.length - 1) {
            ind = 0;
        } else {
            ind++;
        }
        nextItem.type = twoWays[ind];
    } else {
        ind = threeWays.indexOf(nextItem.type);
        if (ind + 1 > threeWays.length - 1) {
            ind = 0;
        } else {
            ind++;
        }
        nextItem.type = threeWays[ind];
    }
    nextItemFrame.style.backgroundImage = `url(${nextItem.type.img})`;
};
const slide = (e) => {
    let element = e.target;
    if (element.matches(".arrow")) {
        element = element.parentElement;
    }
    if (element.matches(".entrance") && !alreadyMoved) {
        if (lastEntrance != null) {
            if (element === getOppositeEntrance(lastEntrance)) {
                return;
            }
        }

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
        alreadyMoved = true;

        drawCells();
        drawPlayers();
        getAvailableFields(
            players[curPlayer].curPos[0],
            players[curPlayer].curPos[1]
        );
        drawAvailableFields();
        drawNextTreasure(curPlayer);
        drawPlayerIcons();

        cells.forEach((x) => {
            if (!x.matches(".path")) {
                /* x.classList.toggle("dimmed") */
                x.style.opacity = "0.7";
            }
        });
        lastEntrance = element;
    }
    drawValidEntrances();
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
        if (players[i].curPos[0] == rowNum) {
            let newPos;
            if (players[i].curPos[1] == 0) {
                newPos = players[i].curPos[0] + "" + (table[rowNum].length - 1);
            } else {
                newPos =
                    players[i].curPos[0] +
                    "" +
                    (parseInt(players[i].curPos[1]) - 1);
            }
            players[i].curPos = newPos;
        }
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
        if (players[i].curPos[0] == rowNum) {
            let newPos;
            if (players[i].curPos[1] == table[rowNum].length - 1) {
                newPos = players[i].curPos[0] + "" + 0;
            } else {
                newPos =
                    players[i].curPos[0] +
                    "" +
                    (parseInt(players[i].curPos[1]) + 1);
            }
            players[i].curPos = newPos;
        }
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
        if (players[i].curPos[1] == colNum) {
            let newPos;
            if (players[i].curPos[0] == table.length - 1) {
                newPos = 0 + "" + players[i].curPos[1];
            } else {
                newPos =
                    parseInt(players[i].curPos[0]) +
                    1 +
                    "" +
                    players[i].curPos[1];
            }
            players[i].curPos = newPos;
        }
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
        if (players[i].curPos[1] == colNum) {
            let newPos;
            if (players[i].curPos[0] == 0) {
                newPos = parseInt(table.length) - 1 + "" + players[i].curPos[1];
            } else {
                newPos =
                    parseInt(players[i].curPos[0] - 1) +
                    "" +
                    players[i].curPos[1];
            }
            players[i].curPos = newPos;
        }
    }
};

//* ----------Helper Functions----------
const getRandomInt = (max) => {
    return Math.floor(Math.random() * (max - 0 + 1));
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
const getCellPosition = (cellID) => {
    let k = -1;
    let h = -1;
    for (let i = 0; i < table.length; i++) {
        for (let j = 0; j < table[i].length; j++) {
            if (table[i][j].ID == cellID) {
                k = i;
                h = j;
            }
        }
    }
    if (k == -1) {
        return "-1";
    } else {
        return k + "" + h;
    }
};
const getOppositeEntrance = (element) => {
    if (element.matches(".top")) {
        switch (getCol(element)) {
            case 1:
                return document.querySelector(".bottom.col1");
            case 3:
                return document.querySelector(".bottom.col3");
            case 5:
                return document.querySelector(".bottom.col5");
        }
    } else if (element.matches(".bottom")) {
        switch (getCol(element)) {
            case 1:
                return document.querySelector(".top.col1");
            case 3:
                return document.querySelector(".top.col3");
            case 5:
                return document.querySelector(".top.col5");
        }
    } else if (element.matches(".side-r")) {
        switch (getRow(element)) {
            case 1:
                return document.querySelector(".side-l.row1");
            case 3:
                return document.querySelector(".side-l.row3");
            case 5:
                return document.querySelector(".side-l.row5");
        }
    } else if (element.matches(".side-l")) {
        switch (getRow(element)) {
            case 1:
                return document.querySelector(".side-r.row1");
            case 3:
                return document.querySelector(".side-r.row3");
            case 5:
                return document.querySelector(".side-r.row5");
        }
    }
};
const matrixToArray = (arrToConvert) => {
    let newArr = [];

    for (let i = 0; i < arrToConvert.length; i++) {
        newArr = newArr.concat(arrToConvert[i]);
    }
    return newArr;
};

//* ----------Player Moving Functions----------
const movePlayer = (e) => {
    if (e.target.matches(".path")) {
        players[curPlayer].curPos = e.target.id;
        if (isTreasure(curPlayer)) {
            pickUpTreasure(curPlayer);
        }
        if (checkWin(curPlayer)) {
            win(curPlayer);
        }

        cells.forEach((x) => {
            x.style.opacity = "1";
            /* x.classList.remove("dimmed") */
        });

        drawPlayers();
        unDrawAvailableFields();
        step();
    }
};

//* ----------Save/Load Functions----------
const saveToLocalStorage = (name) => {
    if (!checkInput()) {
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
    data.push(curPlayer);
    data.push(playerNumber);
    data.push(treasureNumber);
    data.push(alreadyMoved);
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
    playerNumber = data[4];
    treasureNumber = data[5];

    start(playerNumber, treasureNumber);

    table = data[0].slice(0);
    players = data[1].slice(0);
    nextItem = data[2];
    curPlayer = data[3];
    alreadyMoved = data[6];

    drawCells();
    drawPlayers();
    drawPlayerIcons();
    drawNextTreasure(curPlayer);
    getAvailableFields(
        players[curPlayer].curPos[0],
        players[curPlayer].curPos[1]
    );
    drawAvailableFields();
    drawValidEntrances();
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
const loadGamePreviews = () => {
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
        save.classList.add("td-pointer");
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
                tempCell.id = `ID${h}${i + "" + j}`;
                tempRow.append(tempCell);
            }
            tempTable.append(tempRow);
        }

        thumbnail.append(delBtn);
        thumbnail.append(tempTable);
        thumbnail.append(label);
        save.append(thumbnail);

        let tableData = JSON.parse(data)[0];
        let playerData = JSON.parse(data)[1];
        let cells2 = document.querySelectorAll(`.thumbnail .cell${h}`);

        let tableArray = [];
        tableArray = matrixToArray(tableData);

        for (let i = 0; i < cells2.length; i++) {
            cells2[i].style.backgroundImage = `url(${tableArray[i].type.img})`;
        }
        for (let i = 0; i < playerData.length; i++) {
            document
                .getElementById(`ID${h}${playerData[i].curPos}`)
                .classList.add(`inner-player${i}`);
        }
    }
};

//* ----------Action Listeners----------
sliders.addEventListener("input", sliderInputHandler);
startBtn.addEventListener("click", firstRun);
backBtn.addEventListener("click", openPopUp);
winBackBtn.addEventListener("click", back);
backBtn2.addEventListener("click", back);
rotateBtn.addEventListener("click", rotate);
howToBtn.addEventListener("click", toggleDescription);
game.addEventListener("click", slide);
game.addEventListener("click", movePlayer);
savedGamesBtn.addEventListener("click", loadSaveMenu);
exitBtn.addEventListener("click", back);
cancelBtn.addEventListener("click", cancelPopUp);
saveBtn.addEventListener("click", saveGame);
saveFileInput.addEventListener("input", checkInput);
savedGames.addEventListener("click", deleteHandler);
saveGrid.addEventListener("click", loadGame);

document.addEventListener(
    "contextmenu",
    function (e) {
        e.preventDefault();
    },
    false
);
//* ----------OnLoad Function Calls----------
sliderInputHandler();
