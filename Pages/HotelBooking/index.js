var PageWrapper = document.getElementsByClassName("PageWrapper").item(0)
console.log(PageWrapper);

window.onload = async (event) =>{
  var getUrl = "https://jaibaliyabackend.azurewebsites.net/room"
  var data = await fetch(getUrl)
  var jsonData = await data.json();
  console.log(jsonData.value);
  var k = [[]]
  x = 0
  y = 0
  jsonData.value.forEach(
    e=>{
      if(y == 1){
        k.push([])
      }
      k[x].push(e)
      y++
      if(y % 2 == 0){
        x++
        y = 0
      }
    } 
  )
  console.log(k);
    k.forEach(e=>{
  var Html = `<div class="Grid">
  <div
    class="Left reveal"
    style="
      background-image: linear-gradient(
          rgba(158, 158, 158, 0.628),
          rgba(3, 3, 114, 0)
        ),
        url('${e[0].roomImageUrl}');
      background-size: cover;
      background-position: center;
    "
  >
  <h3>
    ${e[0].roomType}</h3>
  </div>
  <div
    class="Right reveal"
    style="
      color: aliceblue;
      background-image: linear-gradient(
          rgba(255, 255, 255, 0),
          rgba(0, 0, 0, 0.226)
        ),
        url('${e[1].roomImageUrl}');
      background-size: cover;
      background-position: center;
    "
  >
  <h3>${e[1].roomType}</h3>
    
  </div>
</div>`
        var div = document.createElement("div")
        console.log(e)
        div.innerHTML = Html;
        PageWrapper.appendChild(div);
   })
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