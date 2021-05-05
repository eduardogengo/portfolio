import { Injectable } from '@angular/core';

@Injectable()
export class Utils {

  private corPrincipal = '#0000ff30';

  getCorPrincipal(): string {
    return this.corPrincipal;
  }

  public redireciona(url) {
    window.open(url);
  }

  transformaObjetoVindoDoFirebaseEmArrayDoisNiveis(entrada) {
    const listaIds = Object.keys(entrada);
    const listaValores = Object.values(entrada);
    const propriedades = Object.keys(listaValores[0]);
    const arrayRetorno = [];
    listaIds.forEach((element, index) => {
      arrayRetorno.push({
        id: element
      });
      propriedades.forEach((item) => {
        arrayRetorno[index][item] = listaValores[index][item];
      });
    });
    return arrayRetorno;
  }

  transformaObjetoVindoDoFirebaseEmArraySimples(entrada) {
    const arrayPropValor = [];
    const campos = Object.keys(entrada);
    const valores = Object.values(entrada);
    campos.forEach((element, index) => {
      arrayPropValor.push({ label: element, valor: valores[index] });
    });
    return arrayPropValor;
  }

  // const campos = Object.keys(res);
  // const valores = Object.values(res);
  // campos.forEach((element, index) => {
  //   this.arrayPropValor.push({ label: element, valor: valores[index] })
  // }
  // );





}
