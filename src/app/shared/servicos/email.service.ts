import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(
    private http: HttpClient
    
  ) { }

  enviarEmail(data) {
    return this.http.post('/apiemail', data).toPromise()
  }

  // lerRedes(){
  //   return this.http.get('https://gengo-portfolio.firebaseio.com/redes.json').toPromise()
  // }
}
