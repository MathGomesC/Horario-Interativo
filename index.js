let tempo = new Date()
let horas = tempo.getHours()
let iconeTitulo = document.getElementById("icone-hora-titulo")

//RELOGIO PARA MUDAR O ICONE DO TITULO DEPENDENDO DO HORARIO
if (horas >= 7 && horas < 12) {
    /*alert("Bom dia")*/
    iconeTitulo.href = "assets/dia.png"
} else if (horas > 12 && horas < 18){
    /*alert("Boa tarde")*/
    iconeTitulo.href = "assets/tarde.png"
} else if (horas > 18 || horas < 7){
    /*alert("Boa noite")*/
    iconeTitulo.href = "assets/noite.png"
}

