let quizDB = [
  {
    question: 'Q1 What are the three important manipulations done in a for loop on a loop variable?',
    a: 'Updation, Incrementation, Initialization',
    b: 'Initialization,Testing, Updation',
    c: ' Testing, Updation, Testing',
    d: 'Initialization,Testing, Incrementation',
    ans: 'ans2',
  },
  {
    question: 'Q2 Which of the following statements about addEventListener() is True.',
    a: ' The first argument to addEventListener() is the event type for which the handler is being registered',
    b: 'The second argument to addEventListener() is the function that should be invoked when the specified type of event occurs.',
    c: ' The third argument to addEventListener() is a numerical value.',
    d: 'All of these',
    ans: 'ans2',
  },
  {
    question:
      'Q3Invoking ………. more than once on the same object with the same arguments has no effect, the handler function remains registered only once, and repeated invocation does not alter the order in which handlers are invoked.This question is required.',
    a: 'addEvent()',
    b: 'addMultipltEvent()',
    c: 'attackEvent()',
    d: 'addEventListener()',
    ans: 'ans2',
  },
  {
    question:
      'Q4 What property on the event object contains the DOM object that invoked the event?This question is required.',
    a: 'event.element',
    b: 'event.source',
    c: 'Event.target',
    d: 'event.invoker',
    ans: 'ans2',
  },
];

let quizAns =[]



let question = document.querySelector('.question');
let option1 = document.querySelector('#option1');
let option2 = document.querySelector('#option2');
let option3 = document.querySelector('#option3');
let option4 = document.querySelector('#option4');
let submit = document.querySelector('#submit');
let answers = document.querySelectorAll('.answer');
let showScore = document.querySelector('#showScore');
let backBtn = document.querySelector('#back');
console.log(backBtn);

let questionCount = 0;
let score = 0;
let loadQuestion = () => {
  let questionList = quizDB[questionCount];
  question.innerText = questionList.question;
  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;
};

loadQuestion();

let checkAnswer = () => {
  let answer = false;

  answers.forEach((curElement) => {
    if (curElement.checked) {
      answer = curElement.id;
    }
  });

  return answer;
};

checkAnswer();

submit.addEventListener('click', () => {
  let checkedAnswer = checkAnswer();
  if (checkedAnswer == quizDB[questionCount].ans) {
    score++;
    questionCount++;
    console.log(checkedAnswer);
    console.log(score);
  } else if (checkedAnswer) {
    questionCount++;
  }
  if (questionCount < quizDB.length) {
    loadQuestion();
  } else {
    showScore.innerHTML = `<h3> Your Score is ${score}/${quizDB.length}</h3>
    <button class="btn" onclick='location.reload()'>Try Again</button>`;
    showScore.classList.remove('scoreArea');
  }
});

backBtn.addEventListener('click',
  () => {
    if (questionCount >= 1) {
      console.log(questionCount);
      questionCount--;
      loadQuestion();
    }
  });
