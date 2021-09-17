var readLineSync=require('readline-sync');
var quiz=[
  {
    question:"What is my Favourite Food:",
    answer:"Biryani"
  },
  {
     question:"What is my Favourite juice:",
     answer:"Mango"
  },
  {
     question:"What is my Favourite tvd Character:",
     answer:"Elijah"
  },
  {
     question:"What is my First Name:",
     answer:"Klaus"
  },
  {
     question:"What is my favourite Sport:",
     answer:"Football"
  },
  {
     question:"What do i do in my free time:",
     answer:"Code"
   }
]
var hScore=[
  {
    names:"Bob",
    scores:2
  },
  {
    names:"Don",
    scores:4
  }
]
var score=0;
function check(question,answer){
  var uAnswer=readLineSync.question(question);
  if(uAnswer==answer){
    score++;
    console.log("Correct");
  }
  else{
    if(score==0){
      score=0;
    }
    else{
      score--;
    }
    console.log("Wrong,Score reduced");
  }
}
var name=readLineSync.question(("May I know Your Name:"));
for(var i=0;i<quiz.length;i++){
  check(quiz[i].question,quiz[i].answer);
}
for(var i=0;i<hScore.length;i++){
  if(hScore[i].scores <score){
    hScore[i].names=name;
    hScore[i].scores=score;
    break;
  }
}
console.log("Highest scores:");
for(var i=0;i<hScore.length;i++){
  console.log(hScore[i].names+":"+hScore[i].scores);
}
console.log("If you are here ping me:aabc@gmail.com");
console.log(' Your Score:'+score);