import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'Passo informações para o componente filho',
      autoria: 'Componente pai',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Minha propriedade é decorada com o @Input',
      autoria: 'Componente filho',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates itaque quidem asperiores enim nesciunt id. Modi illo cupiditate, perspiciatis corporis possimus sunt ipsum! Voluptatibus, tenetur corrupti rem deserunt odit amet?odit ametodit ametodit ametodit ametodit ametodit ametodit ametodit amet',
      autoria: '',
      modelo: 'modelo1'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
