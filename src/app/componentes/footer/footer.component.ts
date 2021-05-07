import { Component, OnInit, Input } from '@angular/core';
import { Utils } from '../../shared/utils/utils';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input('cor') cor: string = this.utils.getCorPrincipal();
  dateToday: Date;
  devName: string;

  constructor(
    private utils: Utils
  ) { }

  ngOnInit(): void {
    this.loadsInicialInfo();
  }

  loadsInicialInfo() {
    this.dateToday = this.utils.getDate();
    this.devName = this.utils.getDevName();
  }
}
