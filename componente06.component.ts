import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-componente06',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente06.component.html',
  styleUrl: './componente06.component.css'
})
export class Componente06Component {
//variável contendo uma linguagem (html,css, javascript...)
linguagem:string='HTML'; // O que trocar aqui e estiver no html é o que vai aparecer
}
