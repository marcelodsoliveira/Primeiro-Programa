function verificar() {
    //var dia = Date.UTC (Verificar depois a variável pra pegar dia e hora)
    var valorconta = document.getElementById('txtvalorconta')
    var valorpago = document.getElementById('txtvalorpago')
    var res1 = document.getElementById('res1')
    var lista = document.querySelector('select#passlista')
    if (valorpago.value.length == 0 || valorconta.value.length == 0) {
        window.alert('[ERRO] Digite os valores!')
    } else {
        var vconta = Number(valorconta.value)
        var vpago = Number(valorpago.value)
        //var troco = ()
        //res.innerHTML = ''
        if ( vpago > vconta ) {
            var troco = (vpago - vconta)
        }
        res1.innerHTML = `O troco será: ${troco} R$`
    }      
    
  
        
     /*   var passdia = document.createElement('option')
    passdia.text = `Passageiro ${passdia} pagou ${vpago} e seu troco foi ${troco}`
    lista.appendChild(passdia)
    res.innerHTML = ''
    vpago.value = '' // Isso limpará o campo valor pago após cada verificação
    vpago.focus()   // Isso manterá o ponteiro do mouse em cima da caixa valor recebido  
*/      
}



/*var lista = document.querySelector('select#passlista')
var passdia = document.createElement('option')
    passdia.text = `Passageiro ${passdia} pagou ${vpago.value}e seu troco foi ${troco.value}`
    lista.appendChild(passdia)
    res.innerHTML += `Bla bla ${passdia}`
*/

function finalizar(){
    window.alert('Função OK, mas ainda está em desenvolvimento') // Função OK
}


/*

Uma coisa legal pra se fazer, é colocar a quantidade de passageiros
que já passaram no ônibus, armazenar em lista os valores que eles pagaram e o troco
recebido, depois somar todo o caixa.

Também automaticamente salvar o histório do dia em arquivos de textos com dia, hora e ano e pra cada mês e ano criar um diretório novo.

Uma feature legal é colocar uma pergunta no botão Finalizar, para que a pessoa não clique acidentalmente e tenha certeza que está querendo encerrar o turno.
Depois também da pra criar um botão com link pra outra página onde estarão os txts.




*/