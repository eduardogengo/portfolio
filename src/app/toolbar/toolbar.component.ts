import { ItemMenu } from './../interfaces/item-menu';
import { Component, OnInit } from '@angular/core';
import db from '../../assets/db/registros.json'
import { Rede } from '../interfaces/rede-social'


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {


  dados;
  redes: Rede[] = []
  itensMenu: ItemMenu[] = []

  constructor() { }

  ngOnInit(): void {
    this.carregaDb()
    this.carregaRedesSociais();
    this.carregaItensMenu();
  }

  carregaDb(){
    try{
    this.dados = db.registros
    } catch(err) {
      console.log("Erro ao carregar dados", err)
    }
  }

  carregaRedesSociais() {
    try {
      this.dados[0].redesSociais.forEach(item => {
        if (!!item.ativo) this.redes.push(item)
      })
    } catch (err) {
      console.log("Erro ao carregar redes sociais", err)
    }
  }

  carregaItensMenu() {
    try {
      this.dados[1].itensMenu.forEach(item => {
        if (!!item.ativo) this.itensMenu.push(item)
      })
      console.log("Itens do menu", this.itensMenu)
    } catch (err) {
      console.log("Erro ao carregar Itens Menu", err)
    }

  }

}
