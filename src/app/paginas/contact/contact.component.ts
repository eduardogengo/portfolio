import { Component, OnInit } from '@angular/core';

import { EmailService } from './../../shared/servicos/email.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    private servico: EmailService
  ) { }

  ngOnInit(): void {
    this.lerRedes()
  }


  async fazerEnvio() {
    try {
      let res = await this.servico.enviarEmail(JSON.stringify({ email: 'teste do programa', mensagem: 'top top' }))
      // console.log("Resposta", res)
    } catch (err) {
      console.log("Erro ao enviar", err)
    }
  }

  lerRedes(){
    // this.servico.lerRedes().then((res) => console.log(res)).catch(err => console.log(err))
  }

}
