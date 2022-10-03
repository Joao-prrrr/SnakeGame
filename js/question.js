const btnValider = document.getElementById("valider");
const question = document.getElementById("question");
const plan = document.getElementById("plan");
const reponse = document.getElementById("correct").checked;

btnValider.addEventListener("click", function(){
    question.style.display = "none";
    plan.style.display = "flex";
});

function verifReponse(){
    if (reponse == true){

    }
    else{
        
    }
}