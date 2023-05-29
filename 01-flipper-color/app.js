const colors = ['green', 'red', 'rgba(133, 122, 200)', '#E893CF'];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = color[randomNumber];
});

function getRandomNumber() {
  return Math.floor(math.random() * color.length);
}