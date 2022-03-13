function inicio() {
    /*                            Lâmpada                        */
    /*<div id='lampada'></div>*/
    /*1º passo - criar a tag*/
    let temp = document.createElement('div');
    let temp2 = document.createElement('img');
    /*2º passo - definir os atributos*/
    temp.setAttribute('id','E_apagada');
    temp2.setAttribute('id', 'lampada');
    temp2.setAttribute('src', 'lampada_desligada.png');
    temp2.setAttribute('alt', 'Lampada Apagada');
    temp2.onclick = acender_lampada;
    /*3º passo - anexar no html*/
    document.querySelector('body').appendChild(temp);
    document.querySelector('div').appendChild(temp2);
    /*                            Lâmpada                        */

    /*                            Campo tipo color                        */
    /*1º passo - criar as tags*/
    temp = document.createElement('div');
    temp2 = document.createElement('label');
    let temp3= document.createElement('input')
    /*2º passo - definir os atributos*/
    temp.setAttribute('id','divCor')
    temp2.innerText='Selecione a cor de fundo: ';
    temp3.setAttribute('type','color');
    temp3.setAttribute('id', 'cor');
    temp3.setAttribute('name', 'cores');
    temp3.onchange=trocar_Cor_fundo;

    /*3º passo - anexar no html*/
    document.querySelector('body').appendChild(temp);
    document.getElementById('divCor').appendChild(temp2);
    document.getElementById('divCor').appendChild(temp3);
/*                            Campo tipo color                        */

}
function acender_lampada() {
    let imagem = document.getElementById('lampada').src;
    let ligada = document.createElement('img');//variavel para comparação
    ligada.setAttribute('src', 'lampada_ligada.png');

    if (imagem != ligada.src) {
        document.getElementById('lampada').setAttribute('src', 'lampada_ligada.png');
        document.getElementById('lampada').setAttribute('alt', 'Lampada acessa');
        document.getElementById('E_apagada').setAttribute('id','E_acessa');
    }
    else {
        document.getElementById('lampada').setAttribute('src', 'lampada_desligada.png')
        document.getElementById('lampada').setAttribute('alt', 'Lampada apagada');
        document.getElementById('E_acessa').setAttribute('id','E_apagada');
    }
   
}
function trocar_Cor_fundo()
{
    let cor=document.getElementById('cor').value;
    document.body.style.backgroundColor=cor;

    
}