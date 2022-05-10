/*------TRIGGER------*/
const trigger = document.querySelector("menu > .trigger");
trigger.addEventListener('click', (e) => {
  e.currentTarget.parentElement.classList.toggle("open");
});

/*------CARROSEL------*/
const imgs = document.querySelector('.imgCurso');
const img = document.querySelectorAll('.imgCurso img');

let idx = 0;

function carrossel(){
  idx++;

  if(idx > img.length - 1){
    idx = 0;
  }

  imgs.style.transform = `translateX(${-idx * 200}px)`;
}

setInterval(carrossel, 1800)