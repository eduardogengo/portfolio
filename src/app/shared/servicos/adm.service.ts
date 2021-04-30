import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONSTANTES } from '../utils/constantes';

@Injectable({
  providedIn: 'root'
})
export class AdmService {

  EXT_JSON = '.json'

  constructor(
    private http: HttpClient
  ) { }

  async getDados(caminho){
    const retorno = await this.http.get(CONSTANTES.URL_BASE + caminho + CONSTANTES.EXTENSAO_BD).toPromise();
    console.log('Retorno', retorno);

    return retorno;
  }

  async atualizaDados(caminho, obj){
    console.log('obj', obj);
    const retorno = await this.http.patch(CONSTANTES.URL_BASE + caminho + CONSTANTES.EXTENSAO_BD, obj).toPromise();
    console.log('Retorno', retorno);

    return retorno;
  }
}
