import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss']
})
export class ContactItemComponent implements OnInit {

  @Input() icone: string;
  @Input() endereco: string;
  @Input() link: string;

  constructor() { }

  ngOnInit(): void {
  }

}
