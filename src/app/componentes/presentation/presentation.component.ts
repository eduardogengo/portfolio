import { Component, OnInit } from '@angular/core';
import { Utils } from '../../shared/utils/utils';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {

  cor: string = this.utils.getCorPrincipal();
  devName: string = this.utils.getDevName();

  constructor(
    private utils: Utils
  ) { }

  ngOnInit(): void {
  }

}
