// Seleciona os elementos HTML
const allQuestions = document.querySelector(".mainQuestions");  
const resetBtn = document.querySelector(".reset");  
const resetBtn2 = document.querySelector(".reseta");  
const resetBtnBreve = document.querySelector(".reset2");  
const nextBtn = document.querySelector(".next");    
const scoreDisplay = document.querySelector(".score");

// Variáveis para rastrear o estado do quiz
let numberActual = 0;     // Número da pergunta atual
let score = 0;            // Pontuação atual
let selectedOption = null;  // Índice da opção selecionada


// Função para exibir a pergunta atual
const showQuestion = () => {
  const valorantQuestions = questions.filter(question => question.game === 'Valorant')

  if (numberActual < valorantQuestions.length) {  
    const questionContainer = document.createElement("div");
    questionContainer.classList.add('titleQuestion')
    questionContainer.innerHTML = `
      <h2>${questions[numberActual].numb} - ${questions[numberActual].game}</h2>
      <span>${questions[numberActual].question}</span>
      <ul>${questions[numberActual].options.map(option => `<li>${option}</li>`).join('')}</ul>`;
    
    allQuestions.innerHTML = ""; 
    allQuestions.appendChild(questionContainer); 
    allQuestions.querySelectorAll("li").forEach((option, index) => {
      option.addEventListener("click", () => handleOptionClick(index));
      scoreDisplay.style.display="none";
    });
  } else {
    allQuestions.innerHTML =
    `<div>
      <h2>Quiz finalizado!</h2>${scoreDisplay.outerHTML}  <!-- Exibe a pontuação final -->
    </div>`;
    updateScoreDisplay()
    nextBtn.style.display = "none";
    resetBtn.style.display = "none";
    resetBtn2.classList.remove("active");
    scoreDisplay.style.display="flex";
  }
};

// Função para lidar com o clique em uma opção
const handleOptionClick = (optionIndex) => {
  if (selectedOption === null) {  // Verifica se nenhuma opção foi selecionada
    selectedOption = optionIndex;  // Armazena a opção selecionada
    updateOptions();  
    checkAnswer();   
  }
};

// Função para atualizar a aparência das opções
const updateOptions = () => {
  allQuestions.querySelectorAll("li").forEach((option, index) => {
    option.classList.remove("selected", "correct", "incorrect");
    if (index === selectedOption) {
      option.classList.add("selected");
    }
  });
};

// Função para verificar a resposta
const checkAnswer = () => {
  const selectedOptionText = questions[numberActual].options[selectedOption];  
  const correctOption = questions[numberActual].correct;

  if (selectedOptionText === correctOption) {
    allQuestions.querySelector(`li:nth-child(${selectedOption + 1})`).classList.add("correct");  
    score++;
    
  } else {
    allQuestions.querySelector(`li:nth-child(${selectedOption + 1})`).classList.add("incorrect"); 
  
  }

  // Remove os event listeners das opções para evitar mais cliques
  allQuestions.querySelectorAll("li").forEach(option => {
    option.removeEventListener("click", handleOptionClick);
  });
};


// Evento de clique para avançar para a próxima pergunta
nextBtn.addEventListener('click', () => {
  if (selectedOption !== null) {
    numberActual++;         
    selectedOption = null;  
    showQuestion();
  } else {
    const msgSelectOneOption = document.createElement("h5");// Alerta se nenhuma opção foi selecionada
      msgSelectOneOption.innerHTML = ('Selecione uma opção');
      allQuestions.appendChild(msgSelectOneOption);      
  }
});

// Função para reiniciar o quiz
const resetQuiz = () => {
  numberActual = 0;      // Reinicia o número da pergunta
  score = 0;             // Reinicia a pontuação
  selectedOption = null; // Limpa a opção selecionada
  showQuestion();       
  updateScoreDisplay();
};


// Evento de clique para reiniciar o quiz volta o jogo escolhido do 0
resetBtn2.addEventListener('click', resetQuiz);

// Função para atualizar o display da pontuação
const updateScoreDisplay = () => {
  scoreDisplay.textContent = `Sua pontuação foi de : ${score} acerto(s)`;
};
// Função para reiniciar pagina do em breve
resetBtnBreve.addEventListener("click", ()=>{
  location.reload();
  console.log("click");
});


// Inicia o quiz exibindo a primeira pergunta
showQuestion();
