import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rede-social',
  templateUrl: './rede-social.component.html',
  styleUrls: ['./rede-social.component.scss']
})
export class RedeSocialComponent implements OnInit {

  @Input() nomeIcon: string;
  @Input() link: string;

  constructor() { }

  ngOnInit(): void {
    console.log("Recebidos:", this.nomeIcon, this.link)
  }

}
