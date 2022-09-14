const quiz = [
  {
    question: 'What is the best-selling game in the history?',
    answers: [ 'Super Famicon', 'PlayStation 2', 'Nintendo DS', 'Xbox 360'],
    correct: 'ニンテンドーDS'
  }, {
    question: 'What ---?',
    answers: [ 'Option 1', 'Option 2', 'Option 3', 'Option 4'],
    correct: 'Option 1'
  }, {
    question: 'What ---?',
    answers: [ 'Option 1', 'Option 2', 'Option 3', 'Option 4'],
    correct: 'Option 1'
  }
];

const $window = window;
const $doc = document;
const $question = $doc.getElementById('js-question');
//const $buttons = $doc.querySelectorAll('.btn');
const $buttons = $doc.getElementsByTagName('button');


const quizLen = quiz.length;
let quizCount = 0;
let score = 0;

const init = () => {
  $question.textContent = quiz[quizCount].question;
  
  const buttonLen = $buttons.length;
  let btnIndex = 0;
  
  while(btnIndex < buttonLen){
    $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
    btnIndex++;
  }
};

const goToNext = () => {
  quizCount++;
  if(quizCount < quizLen){
    init(quizCount);
  } else {
    //$window.alert('クイズ終了！');
    showEnd();
  }
};

const judge = (elm) => {
  if(elm.textContent === quiz[quizCount].correct){
    $window.alert('正解!');
    score++;
  } else {
    $window.alert('不正解!');
  }
  goToNext();
};

const showEnd = () => {
  $question.textContent = '終了！あなたのスコアは' + score + '/' + quizLen + 'です';
  
  const $items = $doc.getElementById('js-items');
  $items.style.visibility = 'hidden';
};

init();


let answersIndex = 0;
let answersLen = quiz[quizCount].answers.length;

while(answersIndex < answersLen){
  $buttons[answersIndex].addEventListener('click', (e) => {
    judge(e.target);
  });
  answersIndex++;
}