const um = document.querySelector('#um');
const dois = document.querySelector('#dois');
const tres = document.querySelector('#tres');
const quatro = document.querySelector('#quatro');
const cinco = document.querySelector('#cinco');
const seis = document.querySelector('#seis');
const sete = document.querySelector('#sete');
const oito = document.querySelector('#oito');
const nove = document.querySelector('#nove');

const resultado = document.querySelector('.resultado');


class Jogo {

    constructor(){
        this.cont = 0;
    }

    selecionar(selecionado){
        if(selecionado.classList.contains('x') || selecionado.classList.contains('o')){

        }else{
            if(this.cont % 2 == 0){
                selecionado.classList.add('x');
                this.cont++;
            }else{
                selecionado.classList.add('o');
                this.cont++;
            }
            console.log(this.cont)
        }
        this.vencedor()

    }

    vencedor(){
        if(this.cont == 9){
            resultado.innerHTML = "<h1>Deu Velha</h1>";
        }
    }
}

var jogo = new Jogo();


