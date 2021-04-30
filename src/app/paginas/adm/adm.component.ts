import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdmService } from '../../shared/servicos/adm.service';
import { Utils } from '../../shared/utils/utils';

@Component({
  selector: 'app-adm',
  templateUrl: './adm.component.html',
  styleUrls: ['./adm.component.scss']
})
export class AdmComponent implements OnInit {

  listaAdm = [];


  displayedColumns = ['area'];

  constructor(
    private router: Router,
    private admService: AdmService,
    private utils: Utils
  ) { }

  ngOnInit(): void {
    this.getListaEditaveis();
  }

  getListaEditaveis(){
    this.admService.getListaEditaveisPeloPortal().then((res) => {
      console.log('Res', res);
      this.listaAdm = this.utils.transformaObjetoVindoDoFirebaseEmArray(res).filter((item) => item.ativo);
    }).catch((err) => {
      console.log('Err', err);
    })
  }

  acessaDetalhes(caminho: string) {
    console.log('Caminho', caminho);
    this.router.navigateByUrl('/adm-detalhe', {state: {caminho}});
  }

}
