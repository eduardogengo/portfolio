import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import db from '../../../assets/db/registros.json';
import { RedeSocial } from '../../interfaces/rede-social';

@Component({
  selector: 'app-contact-container',
  templateUrl: './contact-container.component.html',
  styleUrls: ['./contact-container.component.scss']
})
export class ContactContainerComponent implements OnInit {

  constructor() { }

  redesSociais: RedeSocial[] = db.registros[0].redesSociais;
  redesSelecionadas: RedeSocial[] = [];

  ngOnInit(): void {
    this.redesSelecionadas = this.carregaMeiosDeContato(this.redesSociais);
  }

  carregaMeiosDeContato(listaRedes: RedeSocial[]) {
    try {
      const redes: RedeSocial[] = listaRedes.filter((item) => item.contactArea);
      if (!redes.length) {
        throw new Error('Não há elementos na lista');
      }
      return redes;
    } catch (err) {
    }
  }

}
