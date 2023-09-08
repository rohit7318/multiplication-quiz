let score = document.getElementById("score");
let num1 = document.getElementById("numOne");
let num2 = document.getElementById("numTwo");
let searchBar = document.getElementById("search");
let submit = document.getElementById("submit");
let heading = document.getElementById("disclaimer");

let countScore = JSON.parse(localStorage.getItem("countScore"));
if(!countScore)
{
    countScore=0;
}

// else 
// {
    
// }


score.innerText = parseInt(countScore);






let realAnswer = 0;

let randomNumOne = 0;
let randomNumTwo = 0 ; 

let userInput = 0; 


window.addEventListener("load",function(){
    searchBar.focus();
})

generateQuestion();




submit.addEventListener("click",function(){

    userInput = searchBar.value;
    if(userInput == "")
    {
        alert("please type the answer before sumbmit");
    }
    // alert(userInput + " \n answer is : " + realAnswer);
   else if(userInput==realAnswer)
    {
        countScore++;
        updateLocalStorage();
        score.innerText = countScore;
        generateQuestion();
        searchBar.value = '';
        searchBar.focus();
        heading.classList.remove("hide");
        heading.innerText = "Correct";
        
       
        
    }
    else 
    {
        countScore--;
        updateLocalStorage();
        score.innerText = countScore;
        alert("Correct Answer is : " + realAnswer);
        generateQuestion();
        searchBar.value ='';
        searchBar.focus();
        heading.innerText = "Incorrect";
        


    }

});


searchBar.addEventListener("keyup",handleEnterKey);


function handleEnterKey(event)
{
    if(event.key ==='Enter')
    {
        submit.click();
    }
}


   




// var number = generateRandomNum(10);
// console.log(number);

function updateLocalStorage()
{
    localStorage.setItem("countScore",JSON.stringify(countScore));
}

function generateRandomNum(to)
{
    
    let num = parseInt((Math.random()* to));
   
    return num+1;
}

function makeQuestionAndGetResult(randomOne , randomTwo)
{
    let result = randomOne*randomTwo;
    return result;
}

function generateQuestion()
{

    heading.classList.remove("hide");
    randomNumOne = generateRandomNum(10);
    randomNumTwo = generateRandomNum(10);
    num1.innerText = randomNumOne;
    num2.innerText = randomNumTwo;
    realAnswer = makeQuestionAndGetResult(randomNumOne,randomNumTwo);

    
}



score.style.color="green";
num1.style.color = "red";
num2.style.color = "red";