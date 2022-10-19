let notificaciones = [];
let randoms = [];
    
let not1 = document.querySelector('.not1');
let not2 = document.querySelector(".not2");
let not3 = document.querySelector(".not3");
let not4 = document.querySelector(".not4");
let not5 = document.querySelector(".not5");
let not6 = document.querySelector(".not6");
let not7 = document.querySelector(".not7");
let mark = document.querySelector(".mark");
let numnot = document.querySelector('.num-not')


let par1 = document.querySelector(".par1");
let par2 = document.querySelector(".par2");
let par3 = document.querySelector(".par3");
let par4 = document.querySelector(".par4");
let par5 = document.querySelector(".par5");
let par6 = document.querySelector(".par6");
let par7 = document.querySelector(".par7");
let flex = document.querySelectorAll(".flex-row")

notificaciones.push(not1, not2, not3, not4, not5, not6, not7);


window.addEventListener('load', () => {
  let notRandom;
  function obtenerRandom(numero = 3) {
    for (let index = 0; index < numero; index++) {
         notRandom = Math.round(Math.random() * 6);
         if (notRandom != randoms[0] && notRandom != randoms[1]) {
           if (notRandom === 0) {
             not1.classList.add("not-read");
             numnot.textContent = +numnot.textContent + 1;

             let div1 = document.createElement('div');
             flex[0].appendChild(div1).classList.add('pelotita');

             randoms.push(notRandom);
           } else if (notRandom == 1) {
             not2.classList.add("not-read");
             numnot.textContent = +numnot.textContent + 1;

             let div2 = document.createElement("div");
             flex[1].appendChild(div2).classList.add("pelotita");

             randoms.push(notRandom);
           } else if (notRandom == 2) {
             not3.classList.add("not-read");
             numnot.textContent = +numnot.textContent + 1;

             let div3 = document.createElement("div");
             flex[2].appendChild(div3).classList.add("pelotita");

             randoms.push(notRandom);
           } else if (notRandom == 3) {
             not4.classList.add("not-read");
             numnot.textContent = +numnot.textContent + 1;

              let div4 = document.createElement("div");
              flex[3].appendChild(div4).classList.add("pelotita");

             randoms.push(notRandom);
           } else if (notRandom == 4) {
             not5.classList.add("not-read");
             numnot.textContent = +numnot.textContent + 1;

            let div5 = document.createElement("div");
            flex[4].appendChild(div5).classList.add("pelotita");


             randoms.push(notRandom);
           } else if (notRandom == 5) {
             not6.classList.add("not-read");
             numnot.textContent = +numnot.textContent + 1;

              let div6 = document.createElement("div");
              flex[5].appendChild(div6).classList.add("pelotita");

             randoms.push(notRandom);
           } else if (notRandom == 6) {
             not7.classList.add("not-read");
             numnot.textContent = +numnot.textContent + 1;

            let div7 = document.createElement("div");
            flex[6].appendChild(div7).classList.add("pelotita");

             randoms.push(notRandom);
           }
         } else {
           obtenerRandom(1)
         }
       }
  } 
  obtenerRandom()
} )



mark.addEventListener('click', () => {
  notificaciones.forEach(element => {
    element.classList.add('read')
  });

  flex.forEach((element) => {
   element.removeChild(element.lastChild)
});
 

  numnot.textContent = "0"

})