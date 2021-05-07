import { Component, OnInit } from '@angular/core';
import { RedeSocial } from 'src/app/interfaces/rede-social';
import db from '../../../assets/db/registros.json';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
  ) { }

  titulo = 'Contact';
  subtitulo = 'You can contact me by these means';

  meiosDeContato: RedeSocial[] = [];

  dados;

  ngOnInit(): void {
    this.carregaMeiosDeContato();
  }
  carregaMeiosDeContato() {
    try {
      this.dados = db.registros;
      this.dados[0].redesSociais.forEach(item => {
        if (!!item.contactArea) { this.meiosDeContato.push(item); }
      });
    } catch (err) {
      console.log('Erro ao carregar meios de contato', err);
    }
  }



}
