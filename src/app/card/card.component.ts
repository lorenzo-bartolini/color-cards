import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input()color: any

  constructor() { }

  ngOnInit(): void {
    console.log('Card Component initialized with color: ', this.color);
  }

}
