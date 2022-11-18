import { Component, OnInit } from '@angular/core';
import { Aulas } from 'src/app/core/model'

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent implements OnInit {

  listacurso: Aulas[] = [

    {id: 1, nomecurso: 'DS'}

  ];
  displayedColumns: string[] = ['id', 'nomecurso'];

  constructor() { }

  ngOnInit(): void {
  }

}
