 AOS.init();

 // Data e hora do evento (Ano, Mês-1, Dia, Hora, Minuto, Segundo)
 //Atenção: no JavaScript, o mês é de 0 a 11 (janeiro = 0, dezembro = 11)

 const dataEvento = new Date("2025, 12, 12, 19:00:00").getTime(); // 12 /07 /1994

 function atualizarContagem(){
    const agora = new Date().getTime();
    const diferenca = dataEvento - agora;

    if(diferenca <= 0){
        document.querySelector(".contador").innerHTML = "🎉 O evento já começou!";
        clearInterval(intervalo);
        return;
    }

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    // Cálculos de dias, horas, minutos e segundos
    const dias = Math.floor(diferenca / diaEmMs);
    const horas = Math.floor((diferenca % diaEmMs) / horaEmMs);
    const minutos = Math.floor((diferenca % horaEmMs) /  minutoEmMs);
    const segundos = Math.floor((diferenca % minutoEmMs) / 1000);

    document.getElementById('time').innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
   

 }
 
  // Atualiza a cada segundo
    const intervalo = setInterval(atualizarContagem, 1000);
    // Chama a função imediatamente para não esperar 1s para aparecer
    atualizarContagem();