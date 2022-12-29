// var userId = document.querySelector("#UserId")
var userId = "";
var passWord = "";
function logId(e) {
  userId = e.target.value;
}
function logPass(e) {
  passWord = e.target.value;
  console.log(userId);
  console.log(passWord);
}
async function submitData() {
  var data = await fetch("http://localhost:3000/auth/signIn", {
    mode: "cors",
    method:"POST",
    headers:{'Content-Type': 'application/json'},
    body:JSON.stringify({"emailId":userId,"password":passWord})
  }).catch(e=>console.log(e));
  var jsonData = await data.json();
  if(jsonData.value == "FAIL"){
    console.log("FAILED");
    return
  }
  else if(jsonData.value == "SUCCESS"){
    localStorage.setItem("NAME",jsonData.user.name)
    localStorage.setItem("OBJID",jsonData.user._id)
    localStorage.setItem("EMAIL",jsonData.user.emailId)
    localStorage.setItem("ACCESS",true)
    window.location.href = "/";

  }else{
    console.log(jsonData);
  }
  

}
console.log(localStorage.getItem("NAME"))