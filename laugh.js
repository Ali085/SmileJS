let button = document.getElementById("btnn")
let head = document.getElementById("smile")
let all = document.getElementById("boddy")
let mout = document.getElementById("agiz")


// setInterval(function() {
//     smiil;
// }, 150);

// function smiil(){
//     if ("click",button){
//         head.style.marginLeft ='30%';
//         head.style.backgroundColor ='red';
//         all.style.backgroundColor='purple';
//         agiz.style. height='60px';
//         agiz.style.backgroundColor='white';
//         agiz.style.borderRadius='40%';
//         agiz.style.border='6px solid black';
//         setTimeout(function(){
//             head.style.marginLeft ='35%'
//             head.style.backgroundColor = 'blue';
//             all.style.backgroundColor='black'
//         },250)


//     }
// }
// document.getElementById("btnn").addEventListener("click", function smiil() {

// })


function repeatt() {
    dncc= setInterval(basla, 500);
}

let basla = function () {

    Kar();
}
document.querySelector('#btnn').addEventListener('click', function Kar() {
    head.style.marginLeft = '30%';
    head.style.backgroundColor = 'red';
    all.style.backgroundColor = 'purple';
    agiz.style.height = '60px';
    agiz.style.backgroundColor = 'white';
    agiz.style.borderRadius = '40%';
    agiz.style.border = '6px solid black';
    setTimeout(function () {
        head.style.marginLeft = '35%'
        head.style.backgroundColor = 'blue';
        all.style.backgroundColor = 'black'
    }, 250)

});
