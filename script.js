
let currentQuestion= 0;

function init(){  
    document.getElementById('number-of-all-questions').innerHTML = questions.length;
    showCurrentQuestion();
    
}


function showCurrentQuestion(){
 let questionObj = questions[currentQuestion];
 document.getElementById('question_text').innerHTML = questionObj['quiz']; 
 document.getElementById('answer_1').innerHTML = questionObj['solution_1']; 
 document.getElementById('answer_2').innerHTML = questionObj['solution_2'];
 document.getElementById('answer_3').innerHTML = questionObj['solution_3'];
 document.getElementById('answer_4').innerHTML = questionObj['solution_4'];
 //answer_1bis4 in html und solution_1bis4 in db
 //bei unsere DB gibts nur questionObj[0] und questionObj[1]
}

function answerSelect(selection){
   let questionObj = questions[currentQuestion];
   let lastcharecter= selection.slice(-1); //zb von answer_1 --> den zahl 1 herausfinden
   
   if (lastcharecter == questionObj.right_solution) {
      document.getElementById(selection).parentNode.classList.add('bg-success');

   }else{
     document.getElementById(selection).classList.add('bg-danger');
     document.getElementById('answer_' + questionObj.right_solution).parentNode.classList.add('bg-success');//version 1(den richtigen antwort mit trick finden und grün machen wenn mit erster click falsche antwort erwicht wurde )
    //let rightAnswer = questionObj.right_solution; //  version 2(A,B) oder version 3(A,C) --> diese zeile hat bezeichnung A   
    //  document.getElementById ('answer_' +  righteAnswer).parentNode.classList.add('bg-success'); // -->  diese zeile hat bezeichnung B
    //document.getElementById(`answer_${rightAnswer}`).parentNode.classList.add('bg-success'); // version 3 <--  diese zeile hat bezeichnung C  
   }
//    console.log("selected question is ", selection ,"right answer is" , rightAnswer);//zum testzwecken
}
