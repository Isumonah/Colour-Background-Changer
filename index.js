const colors = [
  { color: "#FFFFFF", id: 1 },
  { color: "#89B6A5", id: 2 },
  { color: "#423E3B", id: 3 },
  { color: "#E67F0D", id: 4 },
  { color: "#227A4A", id: 5 },
  { color: "#17BEBB", id: 6 },
  { color: "#726E60", id: 7 },
  { color: "#B6E86B", id: 8 },
  { color: "#AF1B3F", id: 9 },
  { color: "#04AB3D", id: 10 },
  { color: "#FCFF78", id: 11 },
  { color: "#340068", id: 12 },
  { color: "#A54657", id: 13 },
  { color: "#ABE188", id: 14 },
  { color: "#6184D8", id: 15 },
  { color: "#CBE896", id: 16 },
  { color: "#767800", id: 17 },
  { color: "#EA526F", id: 18 },
  { color: "#0A1045", id: 19 },
  { color: "#DBCBD8", id: 20 },
  { color: "#E1CE7A", id: 21 },
  { color: "#FF8811", id: 22 },
  { color: "#DD7373", id: 23 },
  { color: "#E9190F", id: 24 },
];

window.addEventListener("load", function () {
  displayColorChangerDiv(colors);
});

const colorOptions = document.getElementById("color-options");
const mainDivBackground = document.querySelector(".change-background-color");

function displayColorChangerDiv(colorItems) {
  let displayColor = colorItems.map((item) => {
    return `
            <button
                class='my-color-option'
                style='background: ${item.color}';
                'color: ${item.color}'
                id = ${item.color}
                >
            </button>
        `;
  });
  displayColor = displayColor.join("");
  colorOptions.innerHTML = displayColor;
  const divButtons = document.querySelectorAll(".my-color-option");
  console.log(divButtons);

  divButtons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      const category = e.target.id;
      mainDivBackground.style.background = category;
    });
  });
}

// function changeColor(event) {
//   const background = event.target.style.background;
//   console.log(background);

//   // changeBackgroundColor is each div class whose background will be changed in the sample page

//   let changeBackgroundColor = document.getElementsByClassName("change-background-color");
//   for (divClass of changeBackgroundColor) {
//     divClass.style.background = background;

//     background === "rgb(66, 62, 59)" || background === "rgb(34, 122, 74)" || background === "rgb(114, 110, 96)" || background === "rgb(175, 27, 63)" || background === "rgb(52, 0, 104)" || background === "rgb(165, 70, 87)" || background === "rgb(118, 120, 0)" || background === "rgb(10, 16, 69)" || background === "rgb(233, 25, 15)"
//       ? (divClass.style.color = "white")
//       : (divClass.style.color = "black");
//   }

//   //  textColor is the colour of text in the sample page
//   let textColor = document.getElementById("change-text-color");

//   background === "rgb(255, 255, 255)" ? (textColor.style.color = "black") : (textColor.style.color = background);
// }

// function addEventListener() {
//   const buttonCollection = document.getElementsByClassName("my-color-option");
//   for (button of buttonCollection) {
//     button.addEventListener("click", changeColor);
//   }
// }
// addEventListener();
