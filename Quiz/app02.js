// クイズの詳細
const quiz = [
  {
    question: "What?",
    answers: ["a","b","c","d"],
    correct: "a"
  },{
    question: "What.?",
    answers: ["a","b","c","d"],
    correct: "b"
  },{
    question: "What..?",
    answers: ["a","b","c","d"],
    correct: "c"
  }
];


//HTMLの要素
const $question = document.getElementById("js-question");
const $buttons = document.getElementsByTagName("button");


//イニシャル状態
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

init();

//次のページへ
const goToNext = () => {
  quizCount++;
  if(quizCount < quizLen){
    init(quizCount);
  } else {
    //window.alert('End Quiz！');
    showEnd();
  }
};


//合否判断
const judge = (e) =>{
  if(e.textContent === quiz[quizCount].correct){
    window.alert("Correct！");
    score++;
  } else {
    window.alert("Incorrect!");
  }
  goToNext();
};


//結果表示
const showEnd = () => {
  $question.textContent = 'Your score is ' + score + '/' + quizLen + '!';
  
  const $items = document.getElementById('js-items');
  $items.style.visibility = 'hidden';
};


//ボタンクリック（eイベント）
let answersIndex = 0;
let answersLen = quiz[quizCount].answers.length;

while(answersIndex < answersLen){
  $buttons[answersIndex].addEventListener('click', (e) => {
    judge(e.target);
  });
  answersIndex++;
}