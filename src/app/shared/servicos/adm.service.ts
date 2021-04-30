import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONSTANTES } from '../utils/constantes';

@Injectable({
  providedIn: 'root'
})
export class AdmService {

  constructor(
    private http: HttpClient
  ) { }

  async getListaEditaveisPeloPortal(){
    const retorno = await this.http.get(CONSTANTES.URL_BASE + CONSTANTES.CAMINHO_EDITAVEIS_PORTAL + CONSTANTES.EXTENSAO_BD).toPromise();
    return retorno;
  }

  async getDados(caminho){
    const retorno = await this.http.get(CONSTANTES.URL_BASE + caminho + CONSTANTES.EXTENSAO_BD).toPromise();
    return retorno;
  }

  async atualizaDados(caminho, obj){
    const retorno = await this.http.patch(CONSTANTES.URL_BASE + caminho + CONSTANTES.EXTENSAO_BD, obj).toPromise();
    return retorno;
  }
}
