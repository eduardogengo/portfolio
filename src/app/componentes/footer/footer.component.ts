import { Component, OnInit, Input } from '@angular/core';
import { Utils } from '../../shared/utils/utils';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input('cor') cor: string = this.utils.getCorPrincipal();

  constructor(
    private utils: Utils
  ) { }

  ngOnInit(): void {
    //teste
  }

}
