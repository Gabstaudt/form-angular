import { Component } from '@angular/core';

@Component({
  selector: 'app-componente03',
  standalone: true,
  imports: [],
  templateUrl: './componente03.component.html',
  styleUrl: './componente03.component.css'
})
export class Componente03Component {

  //variável de imagem

  imagem: string = 'cosanpa.jpg';

  //Função para alterar imagem

  AlterarImagem(){

    if  (this.imagem === 'cosanpa.jpg'  ){// 3 = verifica qual variável e seu tipo // se o valor dela for esse, algo será executado
   this.imagem='cosanpa02.jpg'; }// condicional para troca de imagem
   else {
    this.imagem='cosanpa.jpg';// condicional para fazer outra troca e repetir o looping
  }
   }
  }


