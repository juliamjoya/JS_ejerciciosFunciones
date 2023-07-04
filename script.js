let colorSemaforo = ['rojo', 'amarillo', 'verde']
const semaforoImg = document.querySelector('#semaforo-img')

const simuladorSemaforo = function (){
  let color = colorSemaforo.pop()
  //console.log(color)
  if (colorSemaforo.length === 0){
    colorSemaforo = ['rojo', 'amarillo', 'verde']
  }
  semaforoImg.src = "img/"+color+".png";
  return color
}

setInterval(simuladorSemaforo, 3000)