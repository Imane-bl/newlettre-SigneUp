

/*function check(){


var inputText=document.getElementsByClassName("input").value;
var emailreg= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailreg.test(inputText)){
   // document.getElementById("output").innerHTML = "Email subscribed!";
    alert("Valid Email!");
   // inputText.classList.add("invalid");
  //  alert("Invalid Email! Please enter a valid email addres
  container.classList.add("hide")
  msg.classList.remove("hide")
} else {
    
    document.getElementsByClassName("input").style.color = "red";
// p.style.color = "red";
   // example when document.getElementById("output").innerHTML = "You need to subscribe to email.";
  // inputText.classList.add("invalid");
 //  alert("Invalid Email! Please enter a valid email address.");
 
 
}

}*/

"user strict";
var btnsubmit=document.querySelector(".subbtn")
var succesbtn=document.querySelector(".msg")
var contain=document.querySelector(".container")
var inpute=document.querySelector(".emailcheck")
//var emailreg= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
btnsubmit.addEventListener("click",() => {
    if(inpute.value !== " "){
    contain.classList.add("hide")
    succesbtn.classList.remove("hide")
console.log("work")

}else{
    console.log("emopty")
}
})
