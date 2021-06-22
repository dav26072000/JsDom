li = document.querySelectorAll("li");
ol = document.querySelector("ol");

for (let i = 0; i < li.length; i++) {
  li[i].addEventListener("click", () => {
    if (checkIfHasClassBefore(li, i, "checked")) {
      li[i].classList.add("checked");
    } else alert("is not valid");
  });
}

function checkIfHasClassBefore(elementArr, index, className) {
  if (index != 0) {
    for (let i = 0; i < index; i++) {
      if (elementArr[i].classList.contains(className)) {
        continue;
      } else return false;
    }
    return true;
  } else return true;
}
