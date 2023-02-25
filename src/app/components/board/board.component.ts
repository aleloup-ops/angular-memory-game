import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})

export class BoardComponent implements OnInit {

  @Input() team: Array<any> = [];
  @Output() myData: EventEmitter<any> = new EventEmitter<any>();

  positions: Array<string> = [
    "inactive",
    "inactive",
    "inactive",
    "inactive",
    "inactive",
    "inactive",
    "inactive",
    "inactive",
    "inactive",
    "inactive",
    "inactive",
    "inactive",
  ];

  constructor() { }

  ngOnInit(): void {
    this.team.push(...this.team);
    this.team = this.team.sort((a, b) => 0.5 - Math.random())
  }

  // Set the status of the clicked card
  public setStatus(index: number) {


    if (this.positions[index] != "correct") {

      // If there is only one active card, set the status of the clicked card to active
      if (this.positions.filter((currentElement) => currentElement == "active").length == 1 || this.positions.filter((currentElement) => currentElement == "active").length == 0) {
        console.log(this.positions.filter((currentElement) => currentElement == "active").length)
        this.positions[index] = "active";
      }

      // Wait 1.5 seconds
      setTimeout(() => {

        // Filter the array to get the active cards
        let activeCards = this.positions
        .map((status, index) => ({ status, index }))
        .filter((currentElement) => currentElement.status == "active");

        // If there are two active cards, check if they are the same
        if (activeCards.length == 2) {

          // If they are the same, alert the user
          if (this.team[activeCards[0].index] == this.team[activeCards[1].index]) {
            this.positions[activeCards[0].index] = "correct";
            this.positions[activeCards[1].index] = "correct";

          // If they are not the same, set the status of both cards to inactive
          } else {
            this.positions[activeCards[0].index] = "incorrect";
            this.positions[activeCards[1].index] = "incorrect";
            
            setTimeout(() => {
              this.positions.forEach((currentElement, index) => {
                if (currentElement == "incorrect") {
                  this.positions[index] = 'inactive';
                }
              });
            }, 1500);
          }
        }}, 1500);
      }
  }

  public resetGame() {
    this.team = [];
    this.myData.emit(this.team);
  }

}
