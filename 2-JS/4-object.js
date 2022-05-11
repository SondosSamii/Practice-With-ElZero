let myCar = {
  type: "Honda",
  year: 2022,
  color: "blue",
  price: "500K",
};

console.log(myCar.year); // Dot Notation

for (let property in myCar) {
  console.log(`${property}: ${myCar[property]}`); // Bracket Notation
  // myCar.property // >> Dynamic Variable > Can't access it with Dot Notation
}

function generateYears(startYear, endYear, yearsList, yearsError) {
  yearsError.innerHTML = "";
  yearsList.innerHTML = "";

  let defaultOption = document.createElement("option");
  defaultOption.innerHTML = "Generated Years";
  defaultOption.disabled = true;
  defaultOption.selected = true;
  yearsList.appendChild(defaultOption);

  if (startYear === "" || endYear === "") {
    yearsError.innerHTML = "Start and End year are required";
  } else if (startYear < 1900 || endYear > 2099) {
    yearsError.innerHTML =
      "Start Year must be after 1899 and End Year must be before 2100";
  } else if (startYear > endYear) {
    yearsError.innerHTML = "End Year must be bigger than Start Year";
  } else {
    for (let i = startYear; i <= endYear; i++) {
      let option = document.createElement("option");
      option.innerHTML = i;
      option.value = i;
      yearsList.appendChild(option);
    }
  }
}

let generateYearsBtn = document.getElementById("generate-years");

generateYearsBtn.addEventListener("click", function () {
  generateYears(
    document.getElementById("start-year").value,
    document.getElementById("end-year").value,
    document.getElementById("years-list"),
    document.getElementById("years-error")
  );
});

// for Loop Label
ParentLoop: for (let i = 0; i < 4; i++) {
  ChildLoop: for (let j = 10; j < 14; j++) {
    if (j === 12) {
      break ChildLoop;
    } else if (i === 2) {
      break ParentLoop;
    }
    console.log(`${i} => ${j}`);
  }
}

let x = 0,
  y = 5,
  stars = "";

do {
  stars += "*";
  console.log(stars);
  y--;
} while (y > 0);

let nowDate = new Date();
console.log("Now: ");
console.log(nowDate);

console.log("Using Milliseconds: ");
console.log(new Date(10000));

let myBirthDate = new Date("Dec 20, 1994 09:15:33");
console.log("My Birth Date: ");
console.log(myBirthDate);

console.log(new Date(1994, 11, 20, 9, 15, 33)); // The month is 0-indexed

let birthDate = new Date("11/22/1994 14:02:17"); //Short Date
console.log("Birth Date: ");
console.log(birthDate);

console.log(new Date().getTimezoneOffset());

console.log(new Date("11/22/1994 00:10").getDay()); // Tuesday
console.log(new Date("11/22/1994 00:10").getUTCDay()); //Monday

let newDate = new Date();
newDate.setFullYear(1994, 11, 20);
console.log(newDate);
