import { Component, OnInit, Input } from '@angular/core';
import { Utils } from '../../shared/utils/utils';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() titulo: string;
  @Input() subtitulo: string;
  cor: string = this.utils.getCorPrincipal();

  constructor(
    private utils: Utils
  ) { }

  ngOnInit(): void {
  }
}
