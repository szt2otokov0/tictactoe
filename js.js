const PlayerChar = "X";
const CpuChar = "O";
const Vector2 = class {
    constructor(y, x) {
        this.x = x;
        this.y = y;
    }
}
let spaceMatrix = [[], [], []];
let vectorMatrix = [[], [], []];
let maxDistance = 1;

window.onload = () => {
    let columns = document.querySelectorAll(".column");
    spaceMatrix = [[], [], []];
    for (i = 0; i < columns.length; i++) {
        spaceMatrix[i] = columns[i].children;
        for (j = 0; j < spaceMatrix[i].length; j++) {
            vectorMatrix[i].push(new Vector2(1 - i, 1 - j));
            spaceMatrix[i][j].addEventListener("click", (ev) => mark(ev.target))
        }
    }
    console.log(spaceMatrix)
    console.log(vectorMatrix);
}

function mark(space) {
    if (space.innerHTML != "") return;
    space.innerHTML = PlayerChar;
    for (i = 0; i < spaceMatrix.length; i++) {
        for (j = 0; j < spaceMatrix[i].length; j++) {
            spaceMatrix[i][j].style = "background-color: gray"
        }
    }
    for (i = 0; i < spaceMatrix.length; i++) {
        for (j = 0; j < spaceMatrix[i].length; j++) {
            if (spaceMatrix[i][j] != space) {
                continue;
            } 
            let pos = findPosition(i,j);
            checkPlayer(pos.x,pos.y)
            console.log("checking.., max distance so far:" + maxDistance)
            if (maxDistance === 3) {
                alert("Nyertél!")
            }
        }
    }

    function findSpaceByPosition(posVector){
        let pos = vectorMatrix.indexOf(posVector);
        return spaceMatrix[pos.y,pos.x]
    }

    function findPosition(y,x){
        let pos = vectorMatrix[x][y];
        return new Vector2(1-pos.y,1-pos.x)
    }

    function checkPlayer(x, y) {
        try {
            let spaceToCheck = spaceMatrix[x][y];
            spaceToCheck.style = "background-color: green"
            return (spaceToCheck.innerHTML == PlayerChar);
        } catch (error) {
            return false;
        }
    }
}

