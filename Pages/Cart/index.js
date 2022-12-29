window.onload = async (event) => {

var access = localStorage.getItem("ACCESS");
  // var access = true
  if (access) {
    console.log("Access");
    var HeadderPlace = document.getElementsByClassName("CartContainer").item(0);
    var main = document.getElementsByClassName("CartLine").item(0);
    var shopingCartHeader = `      <div class="Header">
    <h3 class="Heading">Shopping Cart</h3>
    <h5 class="Action">Remove all</h5>
  </div>`;
    HeadderPlace.innerHTML = shopingCartHeader;
    console.log(main.innerHTML)
    var data = await fetch("http://localhost:3000/auth/getbookmarks", {
      mode: "cors",
      method:"POST",
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify({"id":localStorage.getItem("OBJID")})
    })
    var jsonData = await data.json()
    console.log("---------------------------------");
    console.log(jsonData)

    jsonData.value.forEach(e=>{
      var html = `<div class="Cart-Items">
      <div class="image-box">
        <img src="images/apple.png" style="height: 120px" />
      </div>
      <div class="about">
        <h1 class="title">Apple Juice</h1>
        <h3 class="subtitle">250ml</h3>
        <img src="images/veg.png" style="height: 30px" />
      </div>
      <div class="counter">
        <div class="btn">+</div>
        <div class="count">2</div>
        <div class="btn">-</div>
      </div>
      <div class="prices">
        <div class="amount">$2.99</div>
        <div class="save"><u>Save for later</u></div>
        <div class="remove"><u>Remove</u></div>
      </div>
      </div>`;
let div = document.createElement("div");
console.log(main);
div.innerHTML = html;
main.appendChild(div);
// todo WORK ON RENDERING ISSUE
    })

    
    var Futter = `      <hr />
    <div class="checkout">
    <div class="total">
    <div>
    <div class="Subtotal">Sub-Total</div>
    <div class="items">2 items</div>
    </div>
    <div class="total-amount">$6.18</div>
    </div>
    <button class="button">Checkout</button>
    </div>`;
    let futter = document.createElement("div");
    futter.innerHTML = Futter;
    main.appendChild(futter)
    console.log(futter)

    console.log(main)
  } else {
    console.log("NO ACCESS");
    var main = document.getElementsByClassName("CartLine").item(0);
    console.log(main);

    var html = `<div class="wrapper login">
    <div class="container">
        <div class="col-left">
            <div class="login-text">
                <h2></h2>
                <p>Welcome<br> to jai Balia's Grill</p>
                <a href="/" class="btn">HOME</a>
            </div>
        </div>

        <div class="col-right">
         <div class="login-text" style="color: black;">
              <h2></h2>
              <p>Lookes Like <br> You are not Authorized</p>
              <a href="../SignIn/index.html" class="btnk">Login</a>
              <a href="../SignUp/index.html" class="btnk">SignUp</a>
          </div>
        </div>

    </div>
</div>`
let div = document.createElement("div")
div.innerHTML = html
main.appendChild(div)
console.log(main);
  }

}