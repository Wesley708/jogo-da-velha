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
        this.venceu = {
            um: '',
            dois: '',
            tres: '',
            quatro: '',
            cinco: '',
            seis: '',
            sete: '',
            oito: '',
            nove: ''
        };
    }

    selecionar(selecionado){

        if(selecionado.classList.contains('x') || selecionado.classList.contains('o')){

        }else{
            if(this.cont % 2 == 0){
                selecionado.classList.add('x');
                this.cont++;
                switch(selecionado){
                    case um:
                        this.venceu.um = 'x';
                    break;
                    case dois:
                        this.venceu.dois = 'x';
                    break;
                    case tres:
                        this.venceu.tres = 'x';
                    break;
                    case   quatro:
                        this.venceu.quatro = 'x';
                    break;
                    case cinco:
                        this.venceu.cinco = 'x';
                    break;
                    case seis:
                        this.venceu.seis = 'x';
                    break;
                    case sete:
                        this.venceu.sete = 'x';
                    break;
                    case oito:
                        this.venceu.oito = 'x';
                    break;
                    case nove:
                        this.venceu.nove = 'x';
                    break;
                }
                console.log(this.venceu)
            }else{
                selecionado.classList.add('o');
                this.cont++;
                switch(selecionado){
                    case um:
                        this.venceu.um = 'o';
                    break;
                    case dois:
                        this.venceu.dois = 'o';
                    break;
                    case tres:
                        this.venceu.tres = 'o';
                    break;
                    case   quatro:
                        this.venceu.quatro = 'o';
                    break;
                    case cinco:
                        this.venceu.cinco = 'o';
                    break;
                    case seis:
                        this.venceu.seis = 'o';
                    break;
                    case sete:
                        this.venceu.sete = 'o';
                    break;
                    case oito:
                        this.venceu.oito = 'o';
                    break;
                    case nove:
                        this.venceu.nove = 'o';
                    break;
                }
                console.log(this.venceu)
            }
            
        }

        this.vencedor()
    }

    vencedor(){
        if(this.venceu.um == this.venceu.dois && this.venceu.tres == this.venceu.dois){
            resultado.innerHTML = `<h2>${this.venceu.um} Venceu</h2>`;
        }else if(this.venceu.quatro == this.venceu.cinco && this.venceu.cinco == this.venceu.seis){
            resultado.innerHTML = `<h2>${this.venceu.quatro} Venceu</h2>`;
        }
        else if(this.venceu.sete == this.venceu.oito && this.venceu.oito == this.venceu.nove){
            resultado.innerHTML = `<h2>${this.venceu.nove} Venceu</h2>`;
        }else if(this.venceu.um == this.venceu.quatro && this.venceu.sete == this.venceu.quatro){
            resultado.innerHTML = `<h2>${this.venceu.quatro} Venceu</h2>`;
        }else if(this.venceu.dois == this.venceu.cinco && this.venceu.cinco == this.venceu.oito){
            resultado.innerHTML = `<h2>${this.venceu.cinco} Venceu</h2>`;
        }else if(this.venceu.tres == this.venceu.seis && this.venceu.nove == this.venceu.seis){
            resultado.innerHTML = `<h2>${this.venceu.nove} Venceu</h2>`;
        }
        else if(this.venceu.um == this.venceu.cinco && this.venceu.cinco == this.venceu.nove){
            resultado.innerHTML = `<h2>${this.venceu.cinco} Venceu</h2>`;
        }
        else if(this.venceu.sete == this.venceu.cinco && this.venceu.cinco == this.venceu.tres){
            resultado.innerHTML = `<h2>${this.venceu.cinco} Venceu</h2>`;
        }

        if(this.cont == 9){
            resultado.innerHTML = "<h1>Deu Velha!</h1>";
        }
    }
}

var jogo = new Jogo();
