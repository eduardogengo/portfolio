import { Component, OnInit } from '@angular/core';

import db from '../../../assets/db/registros.json'
import { WorkXP } from './../../interfaces/work-experience';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  titulo = 'Resume'
  subtitulo = 'Some of the my most relevant IT professional experiences are listed here'

  workXPs: WorkXP[] = []

  constructor() { }

  ngOnInit(): void {
    this.carregaDb()
  }

  dados
  carregaDb(){
    try{
    this.dados = db.registros
    this.carregaWorkXp()
    } catch(err) {
      console.log("Erro ao carregar dados", err)
    }
  }

  carregaWorkXp() {
    try {
      this.dados[2].workXps.forEach(item => {
        if (!!item.exibir) this.workXPs.push(item)
      })
    } catch (err) {
      console.log("Erro ao carregar redes sociais", err)
    }

  }

}
