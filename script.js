let imgOne = document.querySelector(".img1");
let imgTwo = document.querySelector(".img2");
let btn = document.querySelector("button");
let h1 = document.querySelector("h1");

let randomNumber = () => {
  let num = Math.ceil(Math.random() * 6);
  return num;
};

btn.addEventListener("click", (e) => {
  e.preventDefault();

  let playerOne = randomNumber();
  let playerTwo = randomNumber();

  imgOne.setAttribute("src", `images/dice${playerOne}.png`);
  imgTwo.setAttribute("src", `images/dice${playerTwo}.png`);
  if (playerOne > playerTwo) {
    h1.style.color = "#00B8A9";
    h1.textContent = `Player ONE wins!`;
    imgTwo.classList.add("opacity");
    imgOne.classList.remove("opacity");
  } else if (playerOne == playerTwo) {
    h1.textContent = `DRAW!`;
    h1.style.color = "#222";
    imgOne.classList.add("opacity");
    imgTwo.classList.add("opacity");
  } else {
    h1.style.color = "#F6416C";
    h1.textContent = `Player TWO wins!`;
    imgOne.classList.add("opacity");
    imgTwo.classList.remove("opacity");
  }
});
