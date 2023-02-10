// This js file contains most of the functions. Some of them needed to be repeated.
createCards(data);
btnListeners();

// Function used for importance button, that increases importance score and calls colorChange helper.
function btnListeners() {
  let btns = document.getElementsByClassName("btn-priority");
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      data[i].importance++;
      document.getElementsByClassName("btn-priority")[i].innerHTML =
        data[i].importance;
      colorChange(i, btns);
    });
    colorChange(i, btns);
  }
}

// Helper function that changes color of the button based on the importance score.
function colorChange(i, btns) {
  if (data[i].importance <= 1) {
    btns[i].classList.add("btn-success");
  } else if (data[i].importance <= 3) {
    btns[i].classList.add("btn-warning");
  } else {
    btns[i].classList.add("btn-danger");
  }
}

// This is also helper function that sorts ascending.
function compare(a, b) {
  if (a.importance < b.importance) {
    return -1;
  }
  if (a.importance > b.importance) {
    return 1;
  }
  return 0;
}

// Sorts data and renders newly sorted cards.
let btnSort = document.getElementById("sort");
btnSort.addEventListener("click", function () {
  data.sort(compare);
  document.getElementById("result").innerHTML = "";
  createCards(data);
  btnListeners();
});
