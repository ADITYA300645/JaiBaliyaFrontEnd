



async function putSuggestions(){
  var into = document.getElementsByClassName("CROSSCARDS1").item(0)
var count = 0
var positionCount = 1
console.log(into)
  var data = await fetch("https://jaibaliyabackend.azurewebsites.net/dishes/suggestions", {
    mode: "cors",
    headers:{'Content-Type': 'application/json'},
  }).catch(e=>console.log(e));
  console.log(data);
  var jsonData = await data.json();
  console.log(jsonData.Value);
  jsonData.Value.forEach(e=>{
    console.log(e)
    console.log(count);
    if(count > 3){
      positionCount++
      let div = document.createElement("div")
      into = document.getElementsByClassName(`CROSSCARDS${positionCount}`).item(0)
      console.log(into);
      div.innerHTML = "<div class='Break'></div>"
      console.log("BROKE")
      // into.appendChild(div)
    }
    count++;
    let div = document.createElement("div")
    div.innerHTML = `
    <div class="Card reveal" onclick="location.href = './Pages/Dish/productDish.html'; localStorage.setItem('DishId','${e._id}')">
    <div class="CardCover" style="background-image: url(${e.ImageLink}); background-size: cover; background-position: center;" >
    </div>
    <div class="Name">${e.name}</div>
    <div class="Price">-₹ ${e.Price}</div>
    <div class="Stars">⭐⭐⭐⭐</div>
    <div class="SaveIcon">
      <image
        src="/SaveIcon.svg"
        alt="Save"
        srcset=""
        width="25"
        height="25"
      />
    </div>
    <div class="Content">${e.description}
    </div>
    <div class="CardButtons">
      <button class="PrimaryButton">Explore more</button>
      <button class="SecondaryButton">Order Now</button>
    </div>
    </div>` 
    into.appendChild(div)

  })
}

async function putTrending(){
  var into = document.getElementsByClassName("CROSSCARDS3").item(0)
var count = 0
var positionCount = 3
console.log(into)
  var data = await fetch("https://jaibaliyabackend.azurewebsites.net/dishes/trending", {
    mode: "cors",
    headers:{'Content-Type': 'application/json'},
  }).catch(e=>console.log(e));
  console.log(data);
  var jsonData = await data.json();
  console.log(jsonData.Value);
  jsonData.Value.forEach(e=>{
    console.log(e)
    console.log(count);
    if(count > 3){
      positionCount++
      let div = document.createElement("div")
      into = document.getElementsByClassName(`CROSSCARDS${positionCount}`).item(0)
      console.log(into);
      div.innerHTML = "<div class='Break'></div>"
      console.log("BROKE")
      // into.appendChild(div)
    }
    count++;
    let div = document.createElement("div")
    div.innerHTML = `
    <div class="Card reveal" onclick="location.href = './Pages/Dish/productDish.html'">
    <div class="CardCover" style="background-image: url(${e.ImageLink}); background-size: cover; background-position: center;" >
    </div>
    <div class="Name">${e.name}</div>
    <div class="Price">-₹ ${e.Price}</div>
    <div class="Stars">⭐⭐⭐⭐</div>
    <div class="SaveIcon">
      <image
        src="/SaveIcon.svg"
        alt="Save"
        srcset=""
        width="25"
        height="25"
      />
    </div>
    <div class="Content">${e.description}
    </div>
    <div class="CardButtons">
      <button class="PrimaryButton">Explore more</button>
      <button class="SecondaryButton">Order Now</button>
    </div>
    </div>` 
    into.appendChild(div)

  })
}

window.onload = async (event) =>{

  var AuthPlace = document.getElementsByClassName("AuthOptions").item(0)
  var AuthOptions = `      <button class="signIn"><a href="Pages/SignIn/index.html">SignIn</a></button>
  <button class="signUp"><a href="Pages/SignUp/index.html">SignUp</a></button>`

  if(!localStorage.getItem("ACCESS")){
    AuthPlace.innerHTML = AuthOptions;
  }
  await putSuggestions();
  await putTrending();


}


function reveal() {
     var reveals = document.querySelectorAll(".reveal");
   
     for (var i = 0; i < reveals.length; i++) {
       var windowHeight = window.innerHeight;
       var elementTop = reveals[i].getBoundingClientRect().top;
       var elementVisible = 150;
   
       if (elementTop < windowHeight - elementVisible) {
         reveals[i].classList.add("active");
       } else {
         reveals[i].classList.remove("active");
       }
     }
   }
   
   window.addEventListener("scroll", reveal);
   console.log(into);
  //  into.appendChild(miv)
