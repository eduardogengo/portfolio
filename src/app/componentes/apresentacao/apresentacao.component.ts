import { Component, OnInit, Input } from '@angular/core';
import { Utils } from '../../shared/utils/utils';

@Component({
  selector: 'app-apresentacao',
  templateUrl: './apresentacao.component.html',
  styleUrls: ['./apresentacao.component.scss']
})
export class ApresentacaoComponent implements OnInit {

  @Input('cor') cor: string = this.utils.getCorPrincipal();

  constructor(
    private utils: Utils
  ) { }

  ngOnInit(): void {
    console.log('Cor recebida', this.cor);
  }

}
