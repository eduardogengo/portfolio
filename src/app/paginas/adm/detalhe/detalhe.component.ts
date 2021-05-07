import { Component, OnInit } from '@angular/core';
import { AdmService } from '../../../shared/servicos/adm.service';
import { Utils } from '../../../shared/utils/utils';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.scss']
})
export class DetalheComponent implements OnInit {

  arrayPropValor = [];
  objParaAlteracao = {};
  caminho = window.history.state.caminho || '';

  constructor(
    private admService: AdmService,
    private utils: Utils
  ) { }

  ngOnInit(): void {
    if (this.verificaSeCaminhoBdFoiPassado()) {
      this.carregaDados(this.caminho);
    }
  }

  verificaSeCaminhoBdFoiPassado() {
    if (this.caminho) {
      return true;
    }
  }

  carregaDados(caminho) {
    this.admService.getDados(caminho).then((res) => {
      console.log('Res', res);
      this.objParaAlteracao = Object.assign({}, res);
      // this.arrayPropValor = this.utils.transformaObjetoVindoDoFirebaseEmArraySimples(res);
      console.log('array', this.arrayPropValor);
    }).catch((err) => {
      console.log('err', err);
    });
  }

  atualizar() {
    this.admService.atualizaDados(this.caminho, this.objParaAlteracao).then((res) => {
      console.log('Resposta da atualização', res);
    }).catch((err) => {
      console.log('erro ao atualizar', err);
    });
  }

}
