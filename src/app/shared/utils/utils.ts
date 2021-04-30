import { Injectable } from '@angular/core';

@Injectable()
export class Utils {

    private corPrincipal = '#0000ff30'

    getCorPrincipal(): string {
        return this.corPrincipal
    }

    public redireciona(url) {
        window.open(url)
    }

    transformaObjetoVindoDoFirebaseEmArray(entrada) {
      var listaIds = Object.keys(entrada);
      var listaValores = Object.values(entrada);
      var propriedades = Object.keys(listaValores[0]);
      var arrayRetorno = [];
      listaIds.forEach((element, index) => {
          arrayRetorno.push({
              id: element
          });
          propriedades.forEach((element) => {
              arrayRetorno[index][element] = listaValores[index][element]
          })
      });
      return arrayRetorno;
  }





}
