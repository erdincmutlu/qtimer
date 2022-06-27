const tquestion_const = 50;
const ttime_const = 15*60;

var intervalId;
var seconds = 0;
var question = 1;
var tquestion = tquestion_const;
var ttime = ttime_const;
var perq = ttime/tquestion;

updateAll()
document.getElementById("status").innerHTML = "Click start button...";

function run() {
  seconds = 0;
  tquestion = tquestion_const;
  ttime = ttime_const;
  perq = ttime/tquestion;

  // Clear if start was clicked before.
  clearInterval(intervalId);
  
  // Update the count every 1 second
  intervalId = setInterval(function() {
    question = Math.floor(seconds/perq) +1;
    
    if (question === tquestion+1 ) {
      document.getElementById("status").innerHTML = "FINISHED";
      clearInterval(intervalId);
    } else {
      document.getElementById("status").innerHTML = "GO GO GO";   
    }
    updateAll()

    seconds = seconds+1;
  }, 1000);
}

function updateAll() {
  var minutes = Math.floor(seconds / 60 );
  var second_display = seconds % 60 ;

  tLeft = ttime - seconds
  var leftminutes = Math.floor(tLeft / 60 );
  var leftsecond = tLeft % 60 ;

  document.getElementById("time").innerHTML = "<span style='color: red;'>" + minutes + "m " + second_display + "s</span><br>" +
   "Time left: <span style='color: red;'>" + leftminutes + "m " + leftsecond + "s</span>";

  if (question === tquestion +1) {
    question = tquestion
  }
  remain = tquestion-question
  document.getElementById("question").innerHTML = "At question: <span style='color: red;'>" + question +
    "</span> remain:<span style='color: red;'>" + remain + "</span>";

  qtleft = perq-(seconds%perq)
  document.getElementById("qtime").innerHTML = "Question time left " + "<span style='color: red;'>" + qtleft +"</span>";
}

let btn = document.getElementById("btn");
btn.addEventListener('click', event => {
  run();
});

let incBtn = document.getElementById("inc");
incBtn.addEventListener('click', event => {
  seconds = seconds +1;
  document.getElementById("debug").innerHTML = "Increment seconds now:" + seconds + " question:" + question;
  updateAll()
});
    
let decBtn = document.getElementById("dec");
decBtn.addEventListener('click', event => {
  seconds--;
  document.getElementById("debug").innerHTML = "Decrement seconds now:" + seconds + " question:" + question;
  updateAll()
});
