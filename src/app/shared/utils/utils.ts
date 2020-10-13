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





}