
const body = document.body;
const main = document.querySelector('main');
const mainActived = document.querySelector('mainActived');
const btnStartQuiz = document.querySelector(".startQuiz");

const startBox = document.querySelector(".start");
const selectQuizBox = document.querySelector(".selectQuiz");
const mainQuizBox = document.querySelector(".quiz");

const emBreve = document.querySelector(".breve");


// botões escolher jogo
const btnValorant = document.querySelector(".btnValorant");
const btnPhasmophobia = document.querySelector(".btnPhasmophobia");
const btnCrash = document.querySelector(".btnCrash");
const btnHollow = document.querySelector(".btnHollow");
const btnAllGames = document.querySelector(".btnAllGames");

//Função que inicia o quiz
btnStartQuiz.addEventListener('click', () =>{
  startBox.classList.add('disable');
  selectQuizBox.classList.add('active');
});

btnValorant.addEventListener('click', () =>{
  selectQuizBox.classList.remove('active');
  mainQuizBox.classList.add('active');
  main.classList.add('active');
});


btnPhasmophobia.addEventListener('click', () =>{
  emBreve.classList.add("active");
  selectQuizBox.classList.remove('active');
  main.style.background = 'url("../img/backgroundPhasmophobia.jpg")';
  main.style.backgroundSize = 'cover';
  main.style.backgroundPositionX = '50%'
});
btnCrash.addEventListener('click', () =>{
  emBreve.classList.add("active");
  selectQuizBox.classList.remove('active');
  main.style.background = 'url("../img/backgroundCrash.jpg")';
  main.style.backgroundSize = 'cover';
  main.style.backgroundPositionX = '50%'
});
btnHollow.addEventListener('click', () =>{
  emBreve.classList.add("active");
  selectQuizBox.classList.remove('active');
  main.style.background = 'url("../img/backgroundHollowKnight.jpg")';
  main.style.backgroundSize = 'cover';
  main.style.backgroundPositionX = '30%'
});
btnAllGames.addEventListener('click', () =>{
  emBreve.classList.add("active");
  selectQuizBox.classList.remove('active');
  main.style.background = 'url("../img/backgroundAllgames.jpg")';
  main.style.backgroundSize = 'cover';
  main.style.backgroundPositionX = '50%'
});






// -------------------------------------------------------------------------------
//   Imagem dos jogos

// Valorant
btnValorant.addEventListener('mouseenter', () =>{
  body.style.background = 'url("../img/backgroundValorant.png")';
  body.style.backgroundPositionX = '50%'
  
});
// btnValorant.addEventListener('mouseleave', () =>{
//   body.style.background = '#25262a';
// });

//Phasmophobia
btnPhasmophobia.addEventListener('mouseenter', () =>{
  body.style.background = 'url("../img/backgroundPhasmophobia.jpg")';
  body.style.backgroundSize = 'cover';
  body.style.backgroundPositionX = '50%'
});
main.style.backgroundSize = 'cover';
// btnPhasmophobia.addEventListener('mouseleave', () =>{
//   body.style.background = '#25262a';
// });

//Crash Bandicoot
btnCrash.addEventListener('mouseenter', () =>{
  body.style.background = 'url("../img/backgroundCrash.jpg")';
  body.style.backgroundSize = 'cover';
  body.style.backgroundPositionX = '50%'
});
// btnCrash.addEventListener('mouseleave', () =>{
//   body.style.background = '#25262a';
// });

//Hollow Kngiht
btnHollow.addEventListener('mouseenter', () =>{
  body.style.background = 'url("../img/backgroundHollowKnight.jpg")';
  body.style.backgroundSize = 'cover';
  body.style.backgroundPositionX = '30%'
});
// btnHollow.addEventListener('mouseleave', () =>{
//   body.style.background = '#25262a';
// });

//All games
btnAllGames.addEventListener('mouseenter', () =>{
  body.style.background = 'url("../img/backgroundAllgames.jpg")';
  body.style.backgroundSize = 'cover';
  body.style.backgroundPositionX = '50%'
});
btnAllGames.addEventListener('mouseleave', () =>{
  body.style.background = '#25262a';
});



