let counter = 0;
const seconds = document.getElementById("counter");

function increment() {
  seconds.innerHTML = counter++;
}

let timer = setInterval(increment, 1000);

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");

function decrement() {
  seconds.innerHTML = counter--;
}

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

// document.querySelector("div .comments").appendChild(document.createElement("ul"))
const commentSubmit = document.getElementById("submit");

function submitComment(e) {
  e.preventDefault();
  const commentInput = document.getElementById("comment-input");
  const comments = document.getElementById("list");
  let newComment = document.createElement("p");
  newComment.innerText = commentInput.value;
  comments.appendChild(newComment);
  commentInput.value = "";
}

function preventReload(e) {
  e.preventDefault();
}

function addListeners() {
  plus.addEventListener("click", increment);
  minus.addEventListener("click", decrement);
  heart.addEventListener("click", addLike);
  commentSubmit.addEventListener("click", submitComment);
}

function removeListeners() {
  heart.removeEventListener("click", addLike);
  plus.removeEventListener("click", increment);
  minus.removeEventListener("click", decrement);
  commentSubmit.removeEventListener("click", submitComment);
  commentSubmit.addEventListener("click", preventReload);
}

const pause = document.getElementById("pause");

pause.addEventListener("click", function () {
  if (pause.innerText === "pause") {
    clearInterval(timer);
    pause.innerText = "resume";
    removeListeners();
  } else {
    timer = setInterval(increment, 1000);
    pause.innerText = "pause";
    commentSubmit.removeEventListener("click", preventReload);
    addListeners();
  }
});

document.addEventListener("DOMContentLoaded", addListeners);
