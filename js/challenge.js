let counter = 0;
const seconds = document.getElementById("counter");

//counter incrementing every second (1000ith millisec)
let counterId = setInterval(function () {
  seconds.innerHTML = counter++;
}, 1000);

//manually + / - counter
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");

function addSecond() {
  seconds.innerHTML = counter++;
}

function minusSecond() {
  seconds.innerHTML = counter--;
}

plus.addEventListener("click", addSecond);
minus.addEventListener("click", minusSecond);

//display likes
// ❤️ 35 (2)
const likesUl = document.querySelector(".likes");
const heart = document.getElementById("heart");
let heartsHash = {};

function addLike() {
  if (heartsHash[seconds.innerHTML]) {
    heartsHash[seconds.innerHTML]++;
    let li = document.getElementById(`${seconds.innerHTML}`);
    li.textContent = `❤️ ${seconds.innerHTML} (${
      heartsHash[seconds.innerHTML]
    })`;
  } else {
    heartsHash[seconds.innerHTML] = 1;
    let numLikes = heartsHash[seconds.innerHTML];
    let li = document.createElement("li");
    li.textContent = `❤️ ${seconds.innerHTML} (${numLikes})`;
    li.id = `${seconds.innerHTML}`;
    likesUl.appendChild(li);
  }
}

heart.addEventListener("click", addLike);

//pause button
const pause = document.getElementById("pause");

pause.addEventListener("click", function () {
  // if text on Pause button is pase => remove ALL event listeners
  // else => reinstate all event listeners
  if (pause.innerText === "pause") {
    clearInterval(counterId);
    pause.innerText = "resume";
    heart.removeEventListener("click", addLike);
    plus.removeEventListener("click", addSecond);
    minus.removeEventListener("click", minusSecond);
  } else {
    setInterval(function () {
      seconds.innerHTML = counter++;
    }, 1000);
    counterId++;
    pause.innerText = "pause";
    heart.addEventListener("click", addLike);
    plus.addEventListener("click", addSecond);
    minus.addEventListener("click", minusSecond);
  }
});
