// Get references to the elements
const optionSelect = document.getElementById('optionSelect');
const navigateButton = document.getElementById('navigateButton');
const destinationView = document.getElementById('destinationView');
const quitbutton = document.getElementById("quitButton");

navigateButton.addEventListener('click', () => {

  const selectedOption = optionSelect.value;

  
  switch (selectedOption) {
    case 'option1':
      destinationView.innerHTML = `<div class="add" style=>
      <input type="number" id="firstnumber" placeholder="enter the first number" style ="width:200px;height:40px;">
      <input type="number" id="secondnumber" placeholder="enter the second number"style ="width:200px;height:40px;">
      <button id="btnenter" style ="width:80px;height:20px;">enter</button>
      <div id="answer"><h1 style="font-size:larger;"></h1></div>
    </div>`;
    var firstInput = document.getElementById("firstnumber")
    var secondInput = document.getElementById("secondnumber")
    var answer = document.getElementById("answer")
    var btn1 = document.getElementById("btnenter")
    var enteraction = function enterfunc(){
        var first = parseInt(document.getElementById("firstnumber").value);
        var second = parseInt(document.getElementById("secondnumber").value);
        answer.textContent = "The answer is:"+(first + second);
    }
    btn1.addEventListener("click",enteraction)
      break;
    case 'option2':
      destinationView.innerHTML = `<div class="add" style=>
      <input type="number" id="firstnumber" placeholder="enter the first number" style ="width:200px;height:40px;">
      <input type="number" id="secondnumber" placeholder="enter the second number"style ="width:200px;height:40px;">
      <button id="btnenter" style ="width:80px;height:20px;">enter</button>
      <div id="answer"><h1>your answer is </h1></div>
    </div>`;
    firstInput = document.getElementById("firstnumber")
    secondInput = document.getElementById("secondnumber")
    answer = document.getElementById("answer")
    btn1 = document.getElementById("btnenter")
    var enteraction1 = function enterfunc(){
        var first = parseInt(document.getElementById("firstnumber").value);
        var second = parseInt(document.getElementById("secondnumber").value);
        answer.textContent = "The answer is:"+(first - second);
    }
    btn1.addEventListener("click",enteraction1)
      break;
    case 'option3':
        destinationView.innerHTML = `<div class="add" style=>
      <input type="number" id="firstnumber" placeholder="enter the first number" style ="width:200px;height:40px;">
      <input type="number" id="secondnumber" placeholder="enter the second number"style ="width:200px;height:40px;">
      <button id="btnenter" style ="width:80px;height:20px;">enter</button>
      <div id="answer"><h1>your answer is </h1></div>
    </div>`;
    firstInput = document.getElementById("firstnumber")
    secondInput = document.getElementById("secondnumber")
    answer = document.getElementById("answer")
    btn1 = document.getElementById("btnenter")
    var enteraction1 = function enterfunc(){
        var first = parseInt(document.getElementById("firstnumber").value);
        var second = parseInt(document.getElementById("secondnumber").value);
        answer.textContent = "The answer is:"+(first * second);
    }
    btn1.addEventListener("click",enteraction1)
      break;

    case 'option4':
        destinationView.innerHTML =  `<div class="add" style=>
        <input type="number" id="firstnumber" placeholder="enter a number" style ="width:200px;height:40px;">
        <button id="btnenter" style ="width:80px;height:20px;">enter</button>
        <div id="answer"><h1>your answer is </h1></div>
      </div>`;
    firstInput = document.getElementById("firstnumber")
    answer = document.getElementById("answer")
    btn1 = document.getElementById("btnenter");
    var enteraction3 = function enterfunc(){
        var first =  parseInt(document.getElementById("firstnumber").value)
            let product= first;
            for (let i = first-1; i >0; i--) {
                product *= i ;
             }
             answer.innerHTML = product
    }
    btn1.addEventListener("click", enteraction3)
        break;

        
    case 'option5':
        destinationView.innerHTML = `<div class="add" style=>
        <input type="number" id="firstnumber" placeholder="enter a number" style ="width:200px;height:40px;">
        <button id="btnenter" style ="width:80px;height:20px;">enter</button>
        <div id="answer"><h1>your answer is </h1></div>
      </div>`;
    firstInput = document.getElementById("firstnumber")
    answer = document.getElementById("answer")
    btn1 = document.getElementById("btnenter")
    var enteraction2 = function enterfunc(){
      var first =  parseInt(document.getElementById("firstnumber").value)
      var n1 = 0;
      var n2 = 1;
      var sum = 0;
      for (let i = 0; i < first; i++) {
          console.log(sum);
          n1 = n2;
          n2 = sum;
          sum = n1 + n2;
      }
      answer.innerHTML = sum
    }
    btn1.addEventListener("click",enteraction2)
        break;

    default:
      destinationView.innerHTML = 'Invalid option.';
      break;
  }
  let quitfunc = function quitfunction(){
    window.close()
  }
  
  quitbutton.addEventListener("click",quitfunc)

  // Hide the select and button elements
  optionSelect.style.display = 'none';
  navigateButton.style.display = 'none';

  // Show the destination view
  destinationView.style.display = 'block';
});
function display (num){
    var n1 = 0;
    var n2 = 1;
    var sum = 0;
    for (let i = 0; i < num; i++) {
        console.log(sum);
        n1 = n2;
        n2 = sum;
        sum = n1 + n2;
    }
}
