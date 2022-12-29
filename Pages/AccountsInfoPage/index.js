window.onload = (event) => {
  var access = localStorage.getItem("ACCESS");
  console.log(access);
  if (access) {
    console.log("Access");
    var main = document.getElementsByClassName("main").item(0);

    var html = `<div class="wrapper login">
     <div class="container">
         <div class="col-left">
             <div class="login-text">
                 <h2>USER NAME</h2>
                 <p>GOOD AFTER NOON<br>Your Profile : </p>
                 <a href="/" class="btn">HOME</a>
             </div>
         </div>

         <div class="col-right">
          emailId : email.com
          <br>
          default pincode : pincode
          <br>
          organised Events : event NAmes
          <br>
          roomsBooked : roomName
          <br>
          invited TO : INVITD EVENTS NAMES
         </div>

     </div>
 </div>`;
    let div = document.createElement("div")
    div.innerHTML = html
    main.appendChild(div)
    console.log(main);
  } else {
    console.log("NO ACCESS");
    var main = document.getElementsByClassName("main").item(0);
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
};
