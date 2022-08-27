const rabbit = document.getElementById("rabbit");
const carrot = document.getElementById("carrot");
function jump() {
  if (dispatchEvent.classList != "jump") {
    rabbit.classList.add("jump");
    setTimeout(function () {
      raddit.classList.remove("jump");
    }, 300);
  }
}
let checkAlive = setInterval(function () {
  let rabbitTop = parseInt(
    window.getComputedStyle(rabbit).getPropertyValue("top")
  );
  let carrotLeft = parseInt(
    window.getComputedStyle(carrot).getPropertyValue("left")
  );
  if (carrotLeft > 0 && carrotLeft < 70 && rabbitTop >= 143) {
    rabbit.style.animationPlayState = "paused";
    carrot.style.animationPlayState = "paused";
    alert("Game Over :( ");
    window.location.reload();
  }
}, 10);
document.addEventListener("keydown", function (event) {
  jump();
});
