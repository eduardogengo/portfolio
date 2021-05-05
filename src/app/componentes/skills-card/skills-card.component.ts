import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skills-card',
  templateUrl: './skills-card.component.html',
  styleUrls: ['./skills-card.component.scss']
})
export class SkillsCardComponent implements OnInit {

  @Input('nome') nome: string;
  @Input('lista') techs: string[];

  fetechnologies: string[] = ['angular', 'js', 'mongodb'];

  constructor() { }

  ngOnInit(): void {
  }

}
