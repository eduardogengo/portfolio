import { Component, OnInit, Input } from '@angular/core';

import { WorkXP } from './../../interfaces/work-experience';

@Component({
  selector: 'app-work-experience-card',
  templateUrl: './work-experience-card.component.html',
  styleUrls: ['./work-experience-card.component.scss']
})
export class WorkExperienceCardComponent implements OnInit {

  @Input() description: string;
  @Input() initialDate: Date;
  @Input() finalDate: Date = null;
  @Input() company: string;
  @Input() activities: string;

  workXP: WorkXP;


  constructor() { }

  ngOnInit(): void {
    this.carregaXP()
  }

  carregaXP() {
    this.workXP = {
      id: null,
      exibir: null,
      description: this.description,
      initialDate: this.initialDate,
      finalDate: this.finalDate,
      company: this.company,
      activities: this.activities
    }
  }

}
