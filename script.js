const restartBtn = document.getElementById("restartButton");
const stat = document.getElementById("currPlayer");
const textArea = document.getElementById("board");
let arr = new Array(9);
arr.fill(null);

let currPlayer = "X";

restartBtn.addEventListener("click", () => {
  location.reload();
});

function checkWinner() {
  if (
    (arr[0] != null && arr[0] == arr[1] && arr[1] == arr[2]) ||
    (arr[3] != null && arr[3] == arr[4] && arr[4] == arr[5]) ||
    (arr[6] != null && arr[6] == arr[7] && arr[7] == arr[8]) ||
    (arr[0] != null && arr[0] == arr[3] && arr[3] == arr[6]) ||
    (arr[1] != null && arr[1] == arr[4] && arr[4] == arr[7]) ||
    (arr[2] != null && arr[2] == arr[5] && arr[5] == arr[8]) ||
    (arr[0] != null && arr[0] == arr[4] && arr[4] == arr[8]) ||
    (arr[2] != null && arr[2] == arr[4] && arr[4] == arr[6])
  ) {
    textArea.innerText = `Winner is ${currPlayer}`;
    textArea.style.color = "red";
    textArea.style.fontWeight = "bold";
    textArea.style.textDecoration = "Underline";
    textArea.style.fontSize = "50px";
  } else if (arr.includes(null) == false) {
    textArea.innerText = "It's a DRAW !!!";
    textArea.style.color = "red";
    textArea.style.fontSize = "50px";
    textArea.style.fontWeight = "bold";
  }
}

function handleClick(el) {
  const id = Number(el.id);
  if (arr[id] == null) {
    arr[id] = currPlayer;
    const pos = document.getElementById(`${id}`);
    pos.innerText = currPlayer;
  }
  checkWinner();
  currPlayer = currPlayer === "X" ? "O" : "X";
  stat.innerText = currPlayer;
}
