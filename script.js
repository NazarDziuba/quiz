const container = document.querySelectorAll("container");
const mainContainer = document.getElementById("mainCont");
const btnDiv = document.getElementById("action");
const countRemain = document.getElementById("countRemain");
const actionButton = document.getElementById("start");

let currentPosition = 0;
let optionButtonAct;
const questions = [
    {
        number: 1,
        name: "Яка найбільша планета Сонячної системи?",
        options: ["Марс", "Юпітер", "Сатурн"],
        id: 2
    },
    {
        number: 2,
        name: "Хто написав \"Кобзар\"",
        options: ["Іван Франко", "Леся Українка", "Тарас Шевченко"],
        id: 3
    },
    {
        number: 3,
        name: "Скільки кісток у людському тілі?",
        options: [206, 186, 226],
        id: 1
    },
    {
        number: 4,
        name: "Яка столиця Австралії?",
        options: ["Сідней", "Мельбурн", "Канберра"],
        id: 3
    },
    {
        number: 5,
        name: "Який хімічний символ золота?",
        options: ["Fe", "Au", "Ag"],
        id: 2
    },
    {
        number: 6,
        name: "В якому році відбулась Чорнобильська катастрофа?",
        options: [1985, 1986, 1987],
        id: 2
    },
    {
        number: 7,
        name: "Який найвищий водоспад у світі?",
        options: ["Ніагарський", "Анхель", "Вікторія"],
        id: 2
    },
    {
        number: 8,
        name: "Скільки днів Земля обертається навколо Сонця?",
        options: [365, 360, 370],
        id: 1
    },
    {
        number: 9,
        name: "Яка найдовша річка у світі?",
        options: ["Амазонка", "Ніл", "Міссісіпі"],
        id: 2
    },
    {
        number: 10,
        name: "Хто написав \"Ромео і Джульєтту\"?",
        options: ["Чарльз Діккенс", "Вільям Шекспір", "Марк Твен"],
        id: 2
    }
];
console.log(questions.length)
//questions.forEach((i)=>{console.log(i.id)});
function getAnswer (param){
    if (param === questions.forEach((i)=>{
        i.id
    })){
        trueAnswer +=1 
    }
}
let trueAnswer = 0;
console.log(mainContainer.classList)
const goNext = () => {
    
    if (currentPosition >= questions.length){
        mainContainer.classList.replace("questions", "greetings");
        mainContainer.innerHTML = `<div class="greetingsDiv">
                    <h1 class="greetH1">Поздравляем!</h1>
                    <p class="greetP">Вы ответили правильно на ${trueAnswer} вопросов из 10! </p>
                </div>
                <div class="greetingsBtnDiv" id="greetingsBtnDiv">
                    <button class="greetingsBtn" id="greetingsBtn">Показать правильные ответы</button>
                </div>`;
        actionButton.style.display = "none";
        const resultButton = document.getElementById("greetingsBtn");
        resultButton.addEventListener("click", resultFunc)
        return
    }


    const question = questions[currentPosition];
    mainContainer.classList.remove("mainFirstCont");
    mainContainer.innerHTML = `<div class="questionName"><span class="questionNameText">${questions[currentPosition].number}. ${questions[currentPosition].name}</span></div>
                <div class="questionOptDiv">
                <button class="questionOption" data-id="1"><span class="qustionText">${questions[currentPosition].options[0]}</span></button>
                <button class="questionOption" data-id="2"><span class="qustionText">${questions[currentPosition].options[1]}</span></button>
                <button class="questionOption" data-id="3"><span class="qustionText">${questions[currentPosition].options[2]}</span></button>
                </div>`;
    actionButton.innerText = "Далі";
    
    //ОБРАБОТЧИК КНОПОК
    let isAnswered = false;
    optionButtonAct = document.querySelectorAll(".questionOption");
    optionButtonAct.forEach(button=>{
        button.addEventListener("click", (event)=>{
            if (isAnswered){return};
            isAnswered = true;

            //Получение name
            const dataId = event?.target.dataset.id;
            const eventTest = event.target;
            console.log("Атрибут data:", dataId);
            console.log("Тестовый event:", eventTest);
            console.log("Тип данных dataId:", typeof dataId)
            const selectedAnswer = parseInt(dataId, 10);
            console.log(`Выбранный ответ: ${selectedAnswer}, Правильный ответ: ${question.id}`);
            console.log("Тип данных selectedAnswer:", typeof selectedAnswer)

            //Проверка правильности ответа
            if(selectedAnswer === question.id){
                trueAnswer++;
                console.log("Ответ правильный!");
            } else{
                console.log("Ответ неправильный!");
            };
            
            //Визуальное обновление
            button.classList.replace("questionOption", "selected");
            optionButtonAct.forEach(btn=>btn.disabled = true)
            
        })
    }
    )
    
    mainContainer.classList.add("mainCont", "questions");
    //currentPosition ++;
    console.log(`Текущий вопрос: ${currentPosition + 1}`);
    console.log(`Общее количество правильных ответов: ${trueAnswer}`);
    currentPosition ++;
    
    
};
actionButton.addEventListener("click", goNext);

const resultFunc = () => {
    mainContainer.classList.replace("greetings", "results")
    mainContainer.innerHTML = `<div class="resultsDiv">
                    <div class="result"><p class="resultP">${questions[0].number}. ${questions[0].name} <b>${questions[0].options[questions[0].id-1]}</b></p></div>
                    <div class="result"><p class="resultP">${questions[1].number}. ${questions[1].name} <b>${questions[1].options[questions[1].id-1]}</b></p></div>
                    <div class="result"><p class="resultP">${questions[2].number}. ${questions[2].name} <b>${questions[2].options[questions[2].id-1]}</b></p></div>
                    <div class="result"><p class="resultP">${questions[3].number}. ${questions[3].name} <b>${questions[3].options[questions[3].id-1]}</b></p></div>
                    <div class="result"><p class="resultP">${questions[4].number}. ${questions[4].name} <b>${questions[4].options[questions[4].id-1]}</b></p></div>
                    <div class="result"><p class="resultP">${questions[5].number}. ${questions[5].name} <b>${questions[5].options[questions[5].id-1]}</b></p></div>
                    <div class="result"><p class="resultP">${questions[6].number}. ${questions[6].name} <b>${questions[6].options[questions[6].id-1]}</b></p></div>
                    <div class="result"><p class="resultP">${questions[7].number}. ${questions[7].name} <b>${questions[7].options[questions[7].id-1]}</b></p></div>
                    <div class="result"><p class="resultP">${questions[8].number}. ${questions[8].name} <b>${questions[8].options[questions[8].id-1]}</b></p></div>
                    <div class="result"><p class="resultP">${questions[9].number}. ${questions[9].name} <b>${questions[9].options[questions[9].id-1]}</b></p></div>
                </div>`
};










