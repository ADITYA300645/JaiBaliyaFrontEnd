var Main = document.getElementsByClassName("Main").item(0)
console.log(Main);
dishId = localStorage.getItem("DishId");

window.onload = async (event) => {
     var linkAddress = `https://jaibaliyabackend.azurewebsites.net/dishes/dish/${dishId}`
     console.log(linkAddress)
     var data = await fetch(linkAddress, {
          mode: "cors",
          headers:{'Content-Type': 'application/json'},
        }).catch(e=>console.log(e));
        var jsonData = await data.json();
        console.log(jsonData.Value);
        jsonData.Value.forEach(
          e=>{
               var MainContent = `
<!-- HEADER POINT -->
<div class="Flex">
  <div class="productImage" style="background-image: url(${e.ImageLink}); background-size: cover; background-position: center;">image</div>
  <div class="productDescription">
    <h1>${e.name} &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp - ${e.Price}</h1>
    <div>
    ${e.description}
    </div>
    <br />
    <h3>
      quantity &nbsp&nbsp&nbsp:&nbsp&nbsp&nbsp&nbsp&nbsp <button>+</button>
      <span>0</span>
      <button>-</button>
    </h3>

    <br />
    <button>Add To Cart</button>
    <button>Order NOw</button>
  </div>
</div>
<div class="Recipe">
  <div class="RecipeVideo">
    <iframe src="${e.RecipeVideoLink}"> </iframe>
  </div>
  <div class="RecipeDescription">
    <h2>RECIPE:</h2>
    <br />
    ${e.Recipe}
  </div>
</div>
<div class="allRightRecived">Out Top Quality Chefs</div>
`;
Main.innerHTML = MainContent;
          }
        )
     }    


