
let url = "https://script.google.com/macros/s/AKfycby1OeZMdOr9X1su0cDas8vjoAyDjfDUi0qQ5aGR4wCnygY4ujRszJOmOy0eC16W1Nh6/exec";
let form = document.querySelector('#form');
form.addEventListener("submit",(e)=>{
    e.target.btn.innerHTML="Massege Send";
  let d = new FormData(form);
  fetch(url,{
    method : "POST",
    body : d
  }).then((res)=>res.text())
  .then((finalRes)=>{
    e.target.btn.innerHTML = "Send";
    form.reset();
  })
  e.preventDefault();

})