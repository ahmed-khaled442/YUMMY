$("#reblaceToggel").click(function () {
  let leftnav = $("#navleft").outerWidth();
  console.log(leftnav);
  let leftsetion = $("#sideNav").offset().left;
  console.log(leftsetion);
  if (leftsetion == 0) {
    $("#sideNav").css({ left: `-${leftnav}px`, transition: "1s all" });
  } else {
    $("#sideNav").css({ left: `0px`, transition: "1s all" });
  }

  document;
  // .getElementById("reblaceToggel")
  // .classList.replace("fa-sliders", "fa-x");
  console.log(
    document.getElementById("reblaceToggel").classList.contains("fa-sliders")
  );

  if (
    document.getElementById("reblaceToggel").classList.contains("fa-sliders")
  ) {
    document
      .getElementById("reblaceToggel")
      .classList.replace("fa-sliders", "fa-x");
  } else {
    document
      .getElementById("reblaceToggel")
      .classList.replace("fa-x", "fa-sliders");
  }
  for (let i = 0; i < 5; i++) {
    $("li span").eq(i).show(1000);
  }
});

console.log($("li span"));
for (let i = 0; i < 5; i++) {
  $("li span")
    .eq(i)
    .animate(
      {
        top: 0,
      },
      (i + 5) * 100
    );
}
$("li span").click(function () {
  console.log("ahmedsadasdasd");
  $("#sideNav").css({ left: `-440px`, transition: "1s all" });
  document
    .getElementById("reblaceToggel")
    .classList.replace("fa-x", "fa-sliders");
});

// get home bage and details
async function getapi() {
  let api = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s="
  );
  let response = await api.json();
  console.log(response.meals);
  display(response.meals);
}
getapi();
function display(allMeal) {
  let box = "";
  for (let i = 0; i < allMeal.length; i++) {
    box += `
     <div
     onclick="getid(${allMeal[i].idMeal})"
            class="box w-full md:w-5/12  lg:w-3/12 relative overflow-hidden rounded-[10px]"
          >
          <div onclick="reblace()" class="">
            <img
              src="${allMeal[i].strMealThumb}"
              class="img-fluid w-full rounded-top"
              alt=""
            />
            <div
              class="text absolute bottom-[-400px] w-full h-full bg-white bg-opacity-45 flex justify-start items-center p-10"
            >
              <p class="text-black font-bold text-[30px]">${allMeal[i].strMeal}</p>
            </div>
            </div>
          </div>
    
    `;
  }
  $("#boxhome").html(box);
}

function getid(id) {
  console.log("id" + id);
  apiid(id);
}

function reblace() {
  console.log("hi");
  document.getElementById("home").classList.replace("block", "hidden");
  document.getElementById("details").classList.replace("hidden", "block");
  console.log(document.getElementById("boxdetails"));
}

async function apiid(id) {
  let api = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  let response = await api.json();
  console.log(response.meals);
  displayditails(response.meals[0]);
}

function displayditails(info) {
  let mealrec = "";
  for (let i = 1; i <= 20; i++) {
    if (info[`strIngredient${i}`]) {
      mealrec += `<li class="btn-blu mb-7">${info[`strMeasure${i}`]} ${
        info[`strIngredient${i}`]
      }</li>`;
    }
  }

  let box = "";
  box = `
     <div class="w-full md:w-full lg:w-5/12">
            <div class="m-10">
              <img src="${info.strMealThumb}" class="w-full" alt="" />
              <span class="text-[30px] mt-10 font-bold">${info.strMeal}</span>
            </div>
          </div>
          <div class="w-full md:w-full lg:w-7/12">
            <div class="font-bold text-[30px] mb-3">Instructions</div>
            <p class="text-[30px] mb-5">
               ${info.strInstructions}
            </p>
            <div class="text-[30px] mb-5">Area : ${info.strArea}</div>
            <div class="text-[30px] mb-7">Category: ${info.strCategory}</div>
            <div class="text-[30px]">
              Recipes :
              <ul class="flex flex-wrap" >
               ${mealrec}
              </ul>
            </div>
            <div class="text-[30px]">
              Tags : :
              <ul>
                <li class="categry mb-8">asd</li>
              </ul>
              <a class="tube" href="${info.strSource}">source</a>
              <a class="sorce" href="${info.strYoutube}">youteube</a>
            </div>
          </div>
  
  `;
  $("#boxdetails").html(box);
  $("#boxhome1").html(box);
}
// end home bage
// stat bage search
document.getElementById("search").addEventListener("click", function () {
  console.log("hi");
  let box = "";
  box = `
   <div class="container h-screen">
      <div class="ro h-screen p-10">
        <div class="ro w-full gap-3">
          <div class="w-full md:w-5/12 lg:w-5/12">
            <input
              class="w-full bg-black p-2 rounded-[10px] border-solid border-[white] border-2"
              placeholder="search by NAME"
              type="text"
              name=""
              id="inputName"
            />
          </div>
          <div class="w-full md:w-5/12 lg:w-5/12">
            <input
              class="w-full bg-black p-2 rounded-[10px] border-solid border-[white] border-2"
              placeholder="search BY first letter"
              type="text"
              name=""
              id="inputletter"
            />
          </div>
        </div>
        <div class="mt-10 w-full h-full">
          <div
            id="boxhome1"
            class="flex gap-2 justify-center items-center flex-wrap"
          >
          
            </div>
          </div>
        </div>
      </div>
    </div>
     `;
  document.getElementById("home").classList.replace("hidden", "block");
  $("#boxhome").html(box);

  //earch about name
  let inputname = document.getElementById("inputName");
  console.log(inputname);

  inputname.addEventListener("input", function () {
    console.log(inputname.value);
    getapi(inputname.value);
  });

  async function getapi(name) {
    let api = await fetch(
      `https:www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    );
    let response = await api.json();
    console.log(response.meals);
    displaysearch(response.meals);
  }
  function displaysearch(allMeal) {
    let box = "";
    for (let i = 0; i < allMeal.length; i++) {
      box += `
            <div
            onclick="getid(${allMeal[i].idMeal})"
              class="box w-full md:w-5/12 lg:w-3/12 relative overflow-hidden rounded-[10px]"
            >
              <img
                src="${allMeal[i].strMealThumb}"
                class="img-fluid w-full rounded-top"
                alt=""
              />
              <div
                class="text absolute bottom-[-400px] w-full h-full bg-white bg-opacity-45 flex justify-start items-center p-10"
              >
                <p class="text-black font-bold text-[30px]">${allMeal[i].strMeal}</p>
              </div>
            </div>
        

     `;
    }
    $("#boxhome1").html(box);
  }
  // search about letter
  let inputletter = document.getElementById("inputletter");
  console.log(inputletter);
  inputletter.addEventListener("input", function () {
    console.log(inputletter.value);
    getapilleter(inputletter.value);
  });
  async function getapilleter(leter) {
    let api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${leter}`
    );
    let response = await api.json();
    console.log(response.meals);
    displaysearch(response.meals);
  }
  get(id);
});
// end search
// start vatogry
document.getElementById("Categories").addEventListener("click", function () {
  console.log("hi");
  async function getapicatg() {
    let api = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    let response = await api.json();
    console.log(response.categories);
    ddisplaycatg(response.categories);
  }
  getapicatg();

  function ddisplaycatg(allMeal) {
    let box = "";
    for (let i = 0; i < allMeal.length; i++) {
      box += `
     <div
            class="boxname w-full md:w-5/12  lg:w-3/12 relative overflow-hidden rounded-[10px]"
          >
          <div class="">
            <img
              src="${allMeal[i].strCategoryThumb}"
              class="img-fluid w-full rounded-top"
              alt=""
            />
            <div
              class="text  absolute bottom-[-400px] w-full h-full bg-white bg-opacity-45 flex-col flex justify-start items-center p-10"
            >
              <p class="text-black font-bold text-[30px]">${
                allMeal[i].strCategory
              }</p>
              <p class="text-black font-bold text-[20px]">${allMeal[
                i
              ].strCategoryDescription.slice(0, 100)}</p>
              
            </div>
            </div>
          </div>
    
    `;
    }
    $("#boxhome").html(box);
    // console.log(document.querySelectorAll(".boxname"));
    let nameCATG = document.querySelectorAll(".boxname");
    for (let d = 0; d < nameCATG.length; d++) {
      nameCATG[d].addEventListener("click", function () {
        console.log("name" + allMeal[d].strCategory);
        getapicatg(allMeal[d].strCategory);
      });
      async function getapicatg(name) {
        let api = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`
        );
        let response = await api.json();
        console.log(response);
        display(response.meals);
      }
    }
  }
});
// end catogry
// start area

document.getElementById("Area").addEventListener("click", function () {
  console.log("hi");
  async function getapiarea() {
    let api = await fetch(
      "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
    );
    let response = await api.json();
    console.log(response.meals);
    ddisplayArea(response.meals);
  }
  getapiarea();

  function ddisplayArea(allMeal) {
    let box = "";
    for (let i = 0; i < allMeal.length; i++) {
      box += `

   <div class="icon w-full md:w-3/12 lg:w-3/12  mb-7  flex justify-center items-center flex-col">
        <i class="fa-solid fa-house text-[70px] mb-3"></i>
        <span>${allMeal[i].strArea}</span>
      </div>
    
    `;
    }
    $("#boxhome").html(box);
    console.log(document.querySelectorAll(".icon"));
    let nameCATG = document.querySelectorAll(".icon");
    for (let d = 0; d < nameCATG.length; d++) {
      nameCATG[d].addEventListener("click", function () {
        console.log("name" + allMeal[d].strArea);
        getapicity(allMeal[d].strArea);
      });
      async function getapicity(name) {
        let api = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`
        );
        let response = await api.json();
        console.log(response.meals);
        display(response.meals);
      }
    }
  }
});
// end area
// start Ingredients
document.getElementById("Ingredients").addEventListener("click", function () {
  console.log("hi");
  async function getapiaingredient() {
    let api = await fetch(
      "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
    );
    let response = await api.json();
    console.log(response.meals[0]);
    ddisplayind(response.meals);
  }
  getapiaingredient();
  function ddisplayind(allMeal) {
    let box = "";
    for (let i = 0; i < allMeal.length; i++) {
      box += `

   <div class="icon w-full md:w-3/12 lg:w-3/12  mb-7  flex justify-center items-center flex-col">
        <i class="fa-solid fa-house text-[70px] mb-3"></i>
        <span>${allMeal[i].strIngredient}</span>
        <p></p>
      </div>
    
    `;
    }
    $("#boxhome").html(box);
    console.log(document.querySelectorAll(".icon"));
    let nameCATG = document.querySelectorAll(".icon");
    for (let d = 0; d < nameCATG.length; d++) {
      nameCATG[d].addEventListener("click", function () {
        console.log("name" + allMeal[d].strIngredient);
        getapingit(allMeal[d].strIngredient);
      });
      async function getapingit(name) {
        let api = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}`
        );
        let response = await api.json();
        console.log(response.meals);
        display(response.meals);
      }
    }
  }
});
// end
document.getElementById("ContactUs").addEventListener("click", function () {
  console.log("hi");
  function displaycoctact() {
    let box = "";
    box = `
   
       <div class="w-full md:w-5/12 lg:w-5/12">
        <input
         id="inputNAME"
          class="slecdedinput p-2 bg-black border-2  border-solid rounded-[10px] w-full"
          type="text"
          placeholder="ENTER YOU Name"
        />
        <div class='bg-red-600 p-2 rounded-[10px] hidden'>
        <small>no vailed</small>
        </div>
      </div>
      <div class="w-full md:w-5/12 lg:w-5/12">
        <input
        id="inputEmail"
          class="slecdedinput p-2 bg-black border-2  border-solid rounded-[10px] w-full"
          type="email"
          placeholder="ENTER YOU email"
        />
         <div class='bg-red-600 p-2 rounded-[10px] hidden'>
        <small>no vailed</small>
        </div>
      </div>
      <div class="w-full md:w-5/12 lg:w-5/12">
        <input
          id="inputPHONE"
          class="slecdedinput p-2 w-full bg-black border-2  border-solid rounded-[10px]"
          type="number"
          placeholder="ENTER YOU phone"
        />
         <div class='bg-red-600 p-2 rounded-[10px] hidden'>
        <small>no vailed</small>
        </div>
      </div>
      <div class="w-full md:w-5/12 lg:w-5/12">
        <input
        id="inputAGE"
          class="slecdedinput p-2 w-full bg-black border-2  border-solid rounded-[10px]"
          type="text"
          placeholder="ENTER YOU AGE"
        />
         <div class='bg-red-600 p-2 rounded-[10px] hidden'>
        <small>match a date dd/mm/yyyy</small>
        </div>
      </div>
      <div class="w-full md:w-5/12 lg:w-5/12">
        <input
        id="inputpass"
          class="slecdedinput p-2 w-full bg-black border-2  border-solid rounded-[10px]"
          type="password"
          placeholder="password"
        />
         <div class='bg-red-600 p-2 rounded-[10px] hidden'>
        <small>please enter like this A@12AHMED</small>
        </div>
      </div>
      <div class="w-full md:w-5/12 lg:w-5/12">
        <input
        id="repass"
          class="slecdedinput p-2 w-full bg-black border-2  border-solid rounded-[10px]"
          type="password"
          placeholder="Repassword"
        />
         <div class='bg-red-600 p-2 rounded-[10px] hidden'>
        <small>please enter SAME PASS</small>
        </div>
      </div>
      <button class="w-full">
        <span class="w-fit bg-red-900 p-2 rounded-[10px]">sumbit</span>
      </button>
    
    `;

    $("#boxhome").html(box);
  }

  displaycoctact();
  let seleteinput = document.querySelectorAll(".slecdedinput");
  console.log(seleteinput);
  for (let s = 0; s < seleteinput.length; s++) {
    seleteinput[s].addEventListener("", function (e) {
      console.log(e.target.value);
      let inputid = e.target.id;
      let inputval = e.target.value;
      validationinput(inputid, inputval);
      repas();
    });
  }
  function validationinput(id, val) {
    console.log("hi");
    let regex = {
      inputNAME: /^[a-z0-9_-]{3,15}$/,
      inputEmail: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
      inputPHONE: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
      inputpass:
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      inputAGE:
        /(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})/,
    };
    // regex[inputNAME];
    console.log(val);
    console.log(regex[id]);
    let elment = document.getElementById(id);
    let next = elment.nextElementSibling;
    console.log(next);
    if (regex[id].test(val) == true) {
      console.log("match");
      elment.classList.add("border-green-500");
      elment.classList.remove("border-red-500");
      next.classList.replace("block", "hidden");
    } else {
      console.log("no match");
      elment.classList.add("border-red-500");
      elment.classList.remove("border-green-500");
      next.classList.replace("hidden", "block");
    }
  }
  function repas() {
    if (
      document.getElementById("inputpass").value ==
      document.getElementById("repass").value
    ) {
      document.getElementById("repass").classList.add("border-green-500");
      document.getElementById("repass").classList.remove("border-red-500");
      // document
      //   .getElementById("repass")
      //   .nextElementSibling.classList.replace("block", "hidden");
    } else {
      console.log("no");
      document.getElementById("repass").classList.remove("border-green-500");
      document.getElementById("repass").classList.add("border-red-500");
      // document
      //   .getElementById("repass")
      //   .nextElementSibling.classList.replace("hidden", "block");
    }
  }
});
