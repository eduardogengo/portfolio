import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adm',
  templateUrl: './adm.component.html',
  styleUrls: ['./adm.component.scss']
})
export class AdmComponent implements OnInit {

  listaAdm = [{ nome: 'Dados Pessoais', caminhoBd: 'cv/dados_pessoais' }];


  displayedColumns = ['area'];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log('window', window.history)
  }

  acessaDetalhes(caminho: string) {
    console.log('Caminho', caminho);
    this.router.navigateByUrl('/adm-detalhe', {state: {caminho}});
  }

}
