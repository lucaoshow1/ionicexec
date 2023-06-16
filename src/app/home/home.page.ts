import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {

  constructor() {}

  nome: string = "Lucas";
  sobreNome: string = "Gomes";
  idade: number = 24;
  peso: number = 100;

  testaFuncao() { alert('Botão CLicado!');}

  calcular(){
    let valor1 = 6;
    let valor2 = 2;
    let soma = valor1 + valor2;
    let subt = valor1 - valor2;
    let mult = valor1 * valor2;
    let divi = valor1 / valor2;

    alert('Valores: 6 e 2' + '\n soma = '+soma+'\n subtração = '+ subt+ '\n multiplicação = '+ mult + '\n divisão = ' +divi);
  }

  repeticaoFor(){
    let valor = 6;
    
    for(var i=0; i<=valor; i++){ alert(i); }

  }
  
  repeticaoWhile(){
    let valor = 0;
    while(valor<=6){
      alert(valor);
      valor++
    }
  }
}
