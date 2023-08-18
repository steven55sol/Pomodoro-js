let btnTimer = document.querySelector('.btn-timer');
let btnShort = document.querySelector('.short-btn');
let btnLong = document.querySelector('.long-btn');
let Time = document.querySelector('.time');
let btnStart = document.querySelector('.btn-start');
let btnPause = document.querySelector('.btn-pause');
let btnReset = document.querySelector('.btn-reset');
let buttons = document.querySelectorAll('.btn');

let set;
let paused = true;
let minutos = 24;
let segundos = 59;
let active = "focus";

Time.textContent = `${minutos + 1}:00`;

const appendZero = (value)=>{
   value = value < 10 ? `0${value}`:value;
   return value;
}

const validateBtn = ()=>{
    switch(active){
        case "short":
            minutos = 4;
            break;
        case "long":
            minutos = 14;
            break;
        default:
            minutos = 24;
            break;
    }
    segundos = 59;
    Time.textContent = `${appendZero(minutos + 1)}:00`;
}

//removiendo focus al Boton
const removeFocus = ()=>{
    buttons.forEach(btn => {
        btn.classList.remove('btn-focus');
    })
}

btnReset.addEventListener('click', resetTimer = () =>{
    pauseTimer();
    validateBtn();
})


btnTimer.addEventListener('click', ()=>{
   active = "focus";
   validateBtn();
   removeFocus();
   btnTimer.classList.add('btn-focus');
   pauseTimer();
})

btnShort.addEventListener('click', ()=>{
  active = "short";
  validateBtn();
  removeFocus();
  btnShort.classList.add('btn-focus');
  pauseTimer();
})

btnLong.addEventListener('click', ()=>{
    active = "long";
    validateBtn();
    removeFocus();
    btnLong.classList.add('btn-focus');
    pauseTimer();
})

btnPause.addEventListener('click', pauseTimer = () =>{
    paused = true;
    clearInterval(set);
    btnStart.classList.remove('hide');
    btnPause.classList.remove('show');
    btnReset.classList.remove('show');
})

btnStart.addEventListener('click', ()=>{
    btnPause.classList.add('show');
    btnReset.classList.add('show');
    btnStart.classList.remove('show');
    btnStart.classList.add('hide');

    if(paused){
        paused = false;
        Time.textContent = `${appendZero(minutos)}:${appendZero(segundos)}`;
        set = setInterval(()=>{
            segundos--;
            Time.textContent = `${appendZero(minutos)}:${appendZero(segundos)}`;

            if(segundos == 0){
                if(minutos != 0){
                   minutos--;
                   segundos=60;
                }else{
                    clearInterval(set);
                }
            }

        },1000)
    }
})