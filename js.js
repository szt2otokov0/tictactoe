const PlayerChar = "X";
const CpuChar = "O";
let spaceMatrix = [[], [], []];

window.onload = () => {
    let columns = document.querySelectorAll(".column");
    spaceMatrix = [[], [], []];
    for (i = 0; i < columns.length; i++) {
        spaceMatrix[i] = columns[i].children;
        for (space of spaceMatrix[i]) {
            space.addEventListener("click", (ev) => mark(ev.target))
        }
    }
    console.log(spaceMatrix)
}

function mark(space) {
    if (space.innerHTML != "") return;
    space.innerHTML = PlayerChar;
    let maxDistance = 0;
    for (i = 0; i < spaceMatrix.length; i++) {
        for (j = 0; j < spaceMatrix[i].length; j++) {
            if (spaceMatrix[i][j] != space) {
                continue;
            }
            if (checkPlayer(i,j+1) || checkPlayer(i,j-1) ||
                checkPlayer(i+1,j) || checkPlayer(i-1,j) ||
                checkPlayer(i+1,j+1) || checkPlayer(i+1,j-1) ||
                checkPlayer(i-1,j+1) || checkPlayer(i-1,j-1)) {
                maxDistance++;
            }
            console.log("checking.., max distance so far:" + maxDistance)
            if (maxDistance === 3) {
                alert("Nyertél!")
            }
        }
    }

    function checkPlayer(y, x) {
        try {
            let spaceToCheck = spaceMatrix[y][x];
            spaceToCheck.style = "background-color: green"
            return (spaceToCheck.innerHTML == PlayerChar);
        } catch (error) {
            return false;
        }
    }
}

