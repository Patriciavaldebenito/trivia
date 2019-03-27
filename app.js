function saveUser(){
    let user = document.getElementById("user").value;
    
    let userForm = document.getElementById("userForm");
    var elemento =document.createElement("p");
    var contenido =document.createTextNode("Ingresa tu usuario, POR FAVOR");
    
    elemento.appendChild(contenido);
    elemento.setAttribute("align","center");
    

    if(user!=""){
      localStorage.setItem("name", user);
      
      userForm.submit();
      
    }
    else{
    document.body.appendChild(elemento);
    }
  }
  
  function setName(){
    let saludo = document.getElementById("saludo"); 
   
    saludo.innerHTML = "¡Hola, "+localStorage.getItem("name")+"!";
    
  }
  
  function desafio(){
    let score = 0;
    let actualQuestion = "q1"
    let question1 = document.getElementById("question1")
    let question2 = document.getElementById("question2")
    let question3 = document.getElementById("question3")
    let button = document.getElementById("nextQuestion")
    let finalScore = document.getElementById("score")
    question2.style.display="none"
    question3.style.display="none"
    finalScore.style.display="none"
  
    button.addEventListener("click", function() {
      if(actualQuestion == "q1"){
        if(document.getElementById("answerA1").checked || document.getElementById("answerA2").checked || document.getElementById("answerA3").checked){
          question1.style.display="none"
          question2.style.display="block"
          actualQuestion = "q2"
        }
      }
      else if(actualQuestion == "q2") {
        if(document.getElementById("answerA4").checked || document.getElementById("answerA5").checked || document.getElementById("answerA6").checked){
          question2.style.display="none"
          question3.style.display="block"
          button.textContent="Terminar"
          actualQuestion = "q3"
        }
      }
      else if(actualQuestion == "q3"){
        if(document.getElementById("answerA7").checked || document.getElementById("answerA8").checked || document.getElementById("answerA9").checked){
          question3.style.display="none"
          button.style.display="none" //
          let showScore = document.getElementById("finalScore")
          let correctAnswers = document.getElementsByClassName("correct")
  
          for (let i = 0; i < correctAnswers.length; i++) {
            if(correctAnswers[i].checked){
              score++
            }
          }
          let category = document.getElementById("category")
           
          showScore.textContent="¡"+score+"/3!"
          finalScore.style.display="block"
          category.style.display="none"
        }
      }
    })
  }