import { Injectable } from '@angular/core';
import { CONSTANTES } from './constantes';

@Injectable({
  providedIn: 'root'
})
export class Utils {

  private corPrincipal = '#0000ff30';

  getCorPrincipal(): string {
    return this.corPrincipal;
  }

  public redireciona(url) {
    window.open(url);
  }

  getDate(): Date {
    return new Date();
  }

  getDevName(): string {
    return CONSTANTES.NOME_DEV;
  }

  // transformaObjetoVindoDoFirebaseEmArrayDoisNiveis(entrada) {
  //   const listaIds = Object.keys(entrada);
  //   const listaValores = Object.values(entrada);
  //   const propriedades = Object.keys(listaValores[0]);
  //   const arrayRetorno = [];
  //   listaIds.forEach((element, index) => {
  //     arrayRetorno.push({
  //       id: element
  //     });
  //     propriedades.forEach((item) => {
  //       arrayRetorno[index][item] = listaValores[index][item];
  //     });
  //   });
  //   return arrayRetorno;
  // }

  // transformaObjetoVindoDoFirebaseEmArraySimples(entrada) {
  //   const arrayPropValor = [];
  //   const campos = Object.keys(entrada);
  //   const valores = Object.values(entrada);
  //   campos.forEach((element, index) => {
  //     arrayPropValor.push({ label: element, valor: valores[index] });
  //   });
  //   return arrayPropValor;
  // }

}
