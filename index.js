let tempo = new Date()
let horas = tempo.getHours()
let minutos = tempo.getMinutes()
let iconeTitulo = document.getElementById("icone-hora-titulo")
let txtP = document.getElementById("TP")
txtP.innerText = horas + ":" + minutos

//RELOGIO PARA MUDAR O ICONE DO TITULO DEPENDENDO DO HORARIO
if (horas >= 7 && horas < 12) {
    iconeTitulo.href = "assets/dia.png"
} else if (horas > 12 && horas < 18){
    iconeTitulo.href = "assets/tarde.png"
} else if (horas > 18 || horas < 7){
    iconeTitulo.href = "assets/noite.png"
}

