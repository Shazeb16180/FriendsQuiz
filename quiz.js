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
     answer:'Elijah'
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
    console.log("Wrong");
  }
}
for(var i=0;i<quiz.length;i++){
  check(quiz[i].question,quiz[i].answer);
}
console.log('Total Score:'+score);