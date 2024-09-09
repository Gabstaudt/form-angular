import { Component } from '@angular/core';

@Component({
  selector: 'app-componente08',
  standalone: true,
  imports: [],
  templateUrl: './componente08.component.html',
  styleUrl: './componente08.component.css'
})
export class Componente08Component {

  //Varuável de média
  media:number = 6;

  //Vetor
  nomes: string[] = [ 'Ralf', 'Ana', 'Danilo', 'Camila'];

  //linguagem
  linguagem: string = 'HTML';
}
