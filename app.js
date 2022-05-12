let userNumber = $("#userGuss");
let number = Math.floor(Math.random() * 101);


function handelClick() {
  var form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);

  let input = Number(userNumber.val());

  if(input>100){
    alert("you should put a number below than 100 ");
  }else{
  if (input === number) {
    $("#result").html(" <h3> Woo U win Keep Going .. ! </h3> <button class='l drum'><a href='index.html'>'Again' </a></button> ")

  } else if (input < number) {
    $("#result").html(" <h3> It is Lower than expect .. ! </h3> <button class='l drum'><a href='index.html'>'Again' </a></button>")

  } else if (input > number) {
    $("#result").html(" <h3> It is HighEr than expect .. ! </h3><button class='l drum'><a href='index.html'>'Again' </a></button> ")

  }
}
userNumber.val("");

}
