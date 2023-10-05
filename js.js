const PlayerChar = "X";
const CpuChar = "O";

window.onload = () => {
    let columns = document.querySelectorAll(".column");
    let spaceMatrix = [[], [], []];
    for (i = 0; i < columns.length; i++) {
        spaceMatrix[i] = columns[i].children;
    }
    let spaces = document.querySelectorAll(".space");
    spaces.forEach(s => {
        s.addEventListener("click", () => {
            mark(PlayerChar, s)
            winCheck();
            cpuRound();
        })
    })
    function cpuRound() {
        spaces.forEach(s => {
            try {
                mark(CpuChar, s)
            }
            catch (state) {
                if (state !== false) {
                    mark(CpuChar, s)
                }
            }
        })

        function winCheck() {
            //todo: do the logic
        }
    }

    
    function mark(sign, s) {
        if (s.innerHTML != "") throw false;
        s.innerHTML = sign;
    }
}

