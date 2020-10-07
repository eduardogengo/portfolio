import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-apresentacao',
  templateUrl: './apresentacao.component.html',
  styleUrls: ['./apresentacao.component.scss']
})
export class ApresentacaoComponent implements OnInit {

  @Input('cor') cor: string;

  constructor() { }

  ngOnInit(): void {
    console.log("Cor recebida", this.cor)
  }

}
