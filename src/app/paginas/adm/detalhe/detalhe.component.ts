import { Component, OnInit } from '@angular/core';
import { AdmService } from '../../../shared/servicos/adm.service';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.scss']
})
export class DetalheComponent implements OnInit {

  arrayChaveValor = [];
  obj = {};

  caminho = window.history.state.caminho || '';



  constructor(
    private admService: AdmService
  ) { }

  ngOnInit(): void {
    if (this.verificaSeCaminhoBdFoiPassado()){
    this.carregaDados(this.caminho);
    }
  }

  verificaSeCaminhoBdFoiPassado(){
    if(this.caminho) {
      return true
    }
  }

  carregaDados(caminho){
    this.admService.getDados(caminho).then((res) => {
      console.log('Res', res);
      this.obj = Object.assign({}, res);
      const campos = Object.keys(res);
      const valores = Object.values(res);
      campos.forEach((element, index) => {
        this.arrayChaveValor.push({label: element, valor: valores[index]})
      });
    }).catch((err) => {
      console.log('err', err);
    })
  }

  atualizar(){
    this.admService.atualizaDados(this.caminho, this.obj).then((res) => {
      console.log('Resposta da atualização', res)
    }).catch((err) => {
      console.log('erro ao atualizar', err);
    })
  }

}
