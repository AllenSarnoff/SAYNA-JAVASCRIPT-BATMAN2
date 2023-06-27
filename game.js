const anchors = document.querySelectorAll(".anchor");
anchors.forEach(elem => elem.addEventListener("click", smoothing));

function smoothing(event){
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href")
    window.scrollTo({
        top: document.querySelector(targetId).offsetTop,
        behavior: "smooth"
    })
}

let rightAnswer, points = 0;
let startButton = document.querySelector("button");
startButton.addEventListener("click", loadQuestions)


function loadQuestions(){
    const url = 'https://batman-api.sayna.space/questions';
    fetch(url)
    .then(data=>data.json())
    .then(result=>showQuestion(result.results));
}

showQuestion = questions =>{

    const questionHTML = document.createElement('div');

    questions.forEach(question=>{
        rightAnswer = question.isTrue;
    })
}