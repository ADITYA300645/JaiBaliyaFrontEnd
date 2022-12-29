var into = document.getElementsByClassName("EventCarier").item(0)
var count = 0
var months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

console.log(into)
window.onload = async (event) =>{
  var data = await fetch("https://jaibaliyabackend.azurewebsites.net/events", {
    mode: "cors",
    headers:{'Content-Type': 'application/json'},
  }).catch(e=>console.log(e));
  var jsonData = await data.json();
  console.log(jsonData.Value);
  jsonData.events.forEach(e=>{
    console.log(e)
    var hostingDay = new Date(e.startTime);
    var startTime = e.startTime.split("T")[1].slice(0,5);
    var endTime = e.endTime.split("T")[1].slice(0,5);
    var day = hostingDay.getDate();
    var month = months[hostingDay.getMonth()];
    count++;
    let div = document.createElement("div")
    div.innerHTML = `
    <div class="EventCard">
    <div class="EVENTNAME">${e.eventType} -Organised by MR.${e.hostedBy}</div>
    
    <div class="Border"></div>
    <div class="MainCard">
    <div class="EventImage" style="background-image: url(${e.mainImageUrl}); background-size: cover; background-position: center;" >
         <div class="PersonImage" style="background-image: url(${e.sideImageUrl}); background-size: cover; background-position: top;"></div>
    </div>
    <div class="EventInfo">
         <div class="Date">
         ${day}
         </div>
         <div class="month">
         ${month}</div>
         <div class="border"></div>
         <div class="EventType">${e.eventName}</div>
         <div class="Time">${startTime} - ${endTime}</div>
         <button class="signIn"><a href="">Check Are You Invided</a></button>
         <button class="signUp"><a href="">Request For Invitation</a></button>
    </div>
    </div>
    </div>` 
    into.appendChild(div)

  })
}