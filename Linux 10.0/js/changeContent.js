// text changer

let texto = ['Dev-friendly',
'Open Source ',
'Gratuito',
'Multitasking',
'Funcional',]

document.getElementsByClassName('texto')[0].textContent = texto[0]

// image changer
let imagems = ['./images/1.jpg','./images/2.jpg','./images/3.jpg','./images/4.jpg','./images/5.jpg']
let fundo = document.getElementById('imagemFundo')
fundo.style.backgroundImage = `url(${imagems[0]})`

let imagem = 0;
var change = setInterval(imageChanger, 10000);

function imageChanger() {
   if(imagem >= 4) {
        imagem = 0;
        fundo.style.backgroundImage = `url(${imagems[imagem]})`;
        document.getElementsByClassName('texto')[0].textContent = texto[imagem];
   } 
   else {
       imagem++;
       fundo.style.backgroundImage = `url(${imagems[imagem]})`;
       document.getElementsByClassName('texto')[0].textContent = "";

       var i = 0;
       var speed = 50; /* The speed/duration of the effect in milliseconds */
       typeWriter();
       
       function typeWriter() {
         if (i < texto[imagem].length) {
           document.getElementsByClassName("texto")[0].innerHTML += texto[imagem].charAt(i);
           i++;
           setTimeout(typeWriter, speed);
         }
      }
   }
}

// setInterval(animation, 400);
// let posX = 0;

// function animation(){
//     if(posX < -10){
//         posX = 0;
//         fundo.style.backgroundPosition = posX + 'vh 0vh' ;
//     }

//     else{
//         posX--;
//         fundo.style.backgroundPosition = posX + 'vh 0vh' ;
//     }
// }