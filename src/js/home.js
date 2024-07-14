import { details } from "./details.js";

// import { serch } from "./serch.js";
// let se = new serch();
//  to show side nave
$("#navside").click(function () {
  let widthNav = $("#sideNav").width() - 100;
  let leftSidenave = $("#sideNav").offset().left;
  if (leftSidenave == 0) {
    $("#sideNav").animate({ left: -widthNav }, 1000);
  } else {
    $("#sideNav").animate({ left: 0 }, 1000);
  }
});
// to reblace silders to x and reblace again
$("#reblace").click(function (e) {
  console.log(this.classList.contains("fa-sliders"));
  if (this.classList.contains("fa-sliders") == true) {
    $("#reblace").removeClass("fa-sliders");
    $("#reblace").addClass("fa-x");
  } else {
    $("#reblace").removeClass("fa-x");
    $("#reblace").addClass("fa-sliders");
  }
});

export class home {
  constructor() {
    this.mealname();
  }

  async mealname() {
    let api = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?s="
    );
    let respones = await api.json();
    // console.log(respones.meals);
    this.display(respones.meals);
  }

  display(allMeal) {
    console.log(allMeal);
    let box = "";
    let index;
    for (let i = 0; i < allMeal.length; i++) {
      box += `
       <div  class="boxreblace w-full md:w-6/12 lg:w-3/12 p-3">
            <div class="boxhover relative overflow-hidden rounded-[12px]">
              <img src="${allMeal[i].strMealThumb}" class="w-full" alt="" />
              <div
                class="absolute bottom-[-400px] p-3 w-full flex justify-start bg-white bg-opacity-50 items-center h-full"
              >
                <h2 class="text-[30px] font-bold">${allMeal[i].strMeal}</h2>
              </div>
            </div>
          </div>
      `;
    }
    $("#boxmeal").html(box);
    let boxid = document.querySelectorAll(".boxhover");

    for (let i = 0; i < boxid.length; i++) {
      boxid[i].addEventListener("click", function () {
        console.log(i);
        console.log(allMeal[i].idMeal);
        allMeal[i].idMeal;
        let getid = new details(allMeal[i].idMeal);
      });
    }
    let show = document.querySelectorAll(".boxreblace");
    for (let s = 0; s < show.length; s++) {
      show[s].addEventListener("click", function () {
        console.log("hi");
        document.getElementById("home").classList.replace("block", "hidden");
        console.log(document.getElementById("home"));
        document.getElementById("details").classList.replace("hidden", "block");
      });
    }
  }
}
