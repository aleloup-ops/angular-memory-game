import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'board-card',
  templateUrl: './board-card.component.html',
  styleUrls: ['./board-card.component.css'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179deg)',
      })),
      state('correct', style({
        transform: 'rotateY(179deg)',
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      state('incorrect', style({
        transform: 'rotateY(179deg)',
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in')),
      transition('active => correct', animate('200ms ease-in')),
      transition('active => incorrect', animate('200ms ease-in')),
      transition('incorrect => inactive', animate('500ms ease-out'))
      
    ]),
    trigger( 'theChildAnimation', [
      state('active', style({
        'border-radius': '0.375rem',
        'background-image': 'linear-gradient(-136deg, #569CFF 0%, #515DEC 100%)',
      })),
      state('correct', style({
        'border-radius': '0.375rem',
        'background-image': 'linear-gradient(-135deg, #77D037 0%, #429321 100%)',
      })),
      state('incorrect', style({
        'border-radius': '0.375rem',
        'background-image': 'linear-gradient(-135deg, #FF6674 0%, #E31534 100%)',
      })),
    ] ),
  ]
})
export class BoardCardComponent implements OnInit {

  @Input() pokemon: any = {};
  @Input() flip: string = 'inactive';

  constructor() { }

  ngOnInit(): void {

  }

  toggleFlip() {
    //this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
  }

}