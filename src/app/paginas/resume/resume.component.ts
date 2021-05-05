import { Component, OnInit } from '@angular/core';

import db from '../../../assets/db/registros.json';
import { WorkXP } from './../../interfaces/work-experience';
import { ExtraInfo } from './../../interfaces/extra-info';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  constructor() { }

  titulo = 'Resume';
  subtitulo = 'Some of the my most relevant IT professional experiences are listed here';

  workXPs: WorkXP[] = [];
  extraInfo: ExtraInfo[] = [];

  dados;

  ngOnInit(): void {
    this.carregaDb();
  }
  carregaDb(){
    try{
    this.dados = db.registros;
    this.carregaWorkXp();
    this.carregaExtraInfo();
    } catch (err) {
      console.log('Erro ao carregar dados', err);
    }
  }

  carregaWorkXp() {
    try {
      this.dados[2].workXps.forEach(item => {
        if (!!item.exibir) { this.workXPs.push(item); }
      });
    } catch (err) {
      console.log('Erro ao carregar redes sociais', err);
    }

  }

  carregaExtraInfo() {
    try {
      this.dados[3].extraInfo.forEach(item => {
        if (!!item.exibir) { this.extraInfo.push(item); }
      });
    } catch (err) {
      console.log('Erro ao carregar redes sociais', err);
    }

  }

}
