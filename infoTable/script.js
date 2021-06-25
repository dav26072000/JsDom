// get items
let addInfoButton = document.querySelector("#add-info");
let inputInfo = document.querySelectorAll(".input-info");
let tableTbody = document.querySelector(".styled-table__tbody");
let ageSort = document.querySelector("#age-sort");

let allInfo = [];
let sortAbleInfo = [];

function getInfo() {
  let infoObj = {};
  inputInfo.forEach((e) => {
    if (e.name === "name") {
      infoObj["name"] = e.value;
    }
    if (e.name === "age") {
      infoObj["age"] = e.value;
    }
    if (e.name === "average") {
      infoObj["average"] = e.value;
    }
  });

  let valueExist = 0;
  for (const [key, value] of Object.entries(infoObj)) {
    if (value !== "") {
      valueExist++;
    }
  }
  if (valueExist === 3) {
    allInfo.push(infoObj);
    sortAbleInfo.push(infoObj);
    return allInfo;
  } else {
    return false;
  }
}

let sortQue = 0;
addInfoButton.addEventListener("click", () => {
  if (getInfo()) {
    painting(allInfo);
    sortQue = 0;
  }
});

function painting(obj) {
  tableTbody.innerHTML = "";
  obj.forEach((e) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${e.name}</td><td class="user-age">${e.age}</td><td>${e.average}</td>`;
    tableTbody.appendChild(tr);
  });
}

// sort

function sortByAge(obj) {
  if (sortQue === 0) {
    obj.sort((a, b) => {
      return Number(a.age) - Number(b.age);
    });
    painting(obj);
    sortQue++;
  } else if (sortQue === 1) {
    obj.sort((a, b) => {
      return Number(b.age) - Number(a.age);
    });
    painting(obj);
    sortQue++;
  } else if (sortQue === 2) {
    console.log(sortQue);
    obj = allInfo;
    painting(obj);
    sortQue = 0;
  }
}

ageSort.addEventListener("click", () => {
  sortByAge(sortAbleInfo);
  //   painting(sortAbleInfo);
});

// function getInfo(inputs, infoObj) {
//   inputs.forEach((e) => {
//     if (e.name === "name") {
//       infoObj["name"] = e.value;
//     }
//     if (e.name === "age") {
//       infoObj["age"] = e.value;
//     }
//     if (e.name === "average") {
//       infoObj["average"] = e.value;
//     }
//   });

//   let valueExist = 0;
//   for (const [key, value] of Object.entries(infoObj)) {
//     if (value !== "") {
//       valueExist++;
//     }
//   }
//   if (valueExist === 3) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let ageSortQue = 0;
// let ageSortQueAdd;
// painting

// addInfoButton.addEventListener("click", () => {
//   let infoObj = {};
//   if (getInfo(inputInfo, infoObj)) {
//     let tr = document.createElement("tr");
//     tr.innerHTML = `<td>${infoObj.name}</td><td class="user-age">${infoObj.age}</td><td>${infoObj.average}</td>`;
//     tableTbody.appendChild(tr);
//   }

//   if (ageSortQueAdd === 0) {
//     sortByAge(ageSortQueAdd);
//   }
//   if (ageSortQueAdd === 1) {
//     sortByAge(ageSortQueAdd);
//   }
// });

// Sort by age
// ageSort.addEventListener("click", () => {
//   if (ageSortQue === 0) {
//     sortByAge(ageSortQue);
//     ageSortQueAdd = 0;
//     ageSortQue++;
//   } else if (ageSortQue === 1) {
//     sortByAge(ageSortQue);
//     ageSortQueAdd = 1;
//     ageSortQue = 0;
//   }
// });

// function sortByAge(maxOrMin) {
//   let getAllAges = document.querySelectorAll(".user-age");
//   let ageArraySorted = [];
//   // push all ages on array
//   getAllAges.forEach((e) => {
//     ageArraySorted.push(Number(e.innerText));
//   });
//   // sort by max to min
//   if (maxOrMin === 0) {
//     ageArraySorted.sort(function (a, b) {
//       return a - b;
//     });
//   } else if (maxOrMin === 1) {
//     ageArraySorted.sort(function (a, b) {
//       return b - a;
//     });
//   }
//   console.log(ageArraySorted);

//   // clear table and add by sort
//   ageArraySorted.forEach((arrEl) => {
//     getAllAges.forEach((e) => {
//       if (Number(e.innerText) === arrEl) {
//         tableTbody.insertBefore(e.parentNode, tableTbody.childNodes[0]);
//       }
//     });
//   });
// }
